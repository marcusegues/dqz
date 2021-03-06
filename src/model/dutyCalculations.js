// @flow

import type {
  Map as ImmutableMapType,
  List as ImmutableListType,
} from 'immutable';
import Immutable from 'immutable';
import type {
  Basket,
  Category,
  DutyBracket,
  People,
} from './types/basketPeopleAmountsTypes';
import type { DutyReport } from './types/calculationTypes';
import { categoriesArray, CategoriesRates } from './constants';
import { makeDutyReportRecord } from './types/calculationTypes';
import { quantityRounding, rounding } from './utils';
import { getTotalQuantity } from './configurationApi';

export const getAdultsOnly = (category: Category): boolean =>
  CategoriesRates.getIn([category, 'adultsOnly'], false);

export const getPeopleCount = (people: People, adultsOnly: boolean) =>
  people.get('adults', 0) + +!adultsOnly * people.get('minors', 0);

export const getAllowanceRaw = (category: Category, people: People): number => {
  const adultsOnly: boolean = getAdultsOnly(category);
  const peopleCount: number = getPeopleCount(people, adultsOnly);
  let allowanceRaw: number = CategoriesRates.getIn(
    [category, 'dutyAllowance'],
    0
  );

  allowanceRaw *= peopleCount;
  return allowanceRaw;
};

export const getAllowance = (
  basket: Basket,
  category: Category,
  people: People
): number => {
  const dutyDependency: ?Category = CategoriesRates.getIn(
    [category, 'dutyAllowanceDependency'],
    null
  );
  let allowance = getAllowanceRaw(category, people);
  if (dutyDependency) {
    allowance -= getTotalQuantity(basket, dutyDependency);
    allowance = Math.max(0, allowance);
  }
  return allowance;
};

export const calculateDuty = (basket: Basket, people: People): DutyReport => {
  let total = 0;
  const reportByCategory: ImmutableMapType<
    Category,
    number
  > = Immutable.Map().withMutations(r => {
    categoriesArray.forEach(c => {
      const quantityRaw: number = getTotalQuantity(basket, c);
      const adultsOnly: boolean = getAdultsOnly(c);
      const peopleCount: number = getPeopleCount(people, adultsOnly);

      const allowance = getAllowance(basket, c, people);
      const quantity: number = quantityRounding(quantityRaw - allowance, c);

      let allowanceRunningTotal: number = 0;
      const duty: ImmutableListType<DutyBracket> = CategoriesRates.getIn(
        [c, 'duty'],
        Immutable.List()
      );

      if (quantity <= allowanceRunningTotal) {
        r.set(c, 0);
      } else {
        const fee = duty.reduce((acc, v) => {
          const tempQuantity = Math.max(0, quantity - allowanceRunningTotal);
          let thresholdThisBracket: number = v.get('threshold', 0);
          if (thresholdThisBracket !== Infinity) {
            thresholdThisBracket = peopleCount * v.get('threshold', 0);
          }
          const bracketWidth = thresholdThisBracket - allowanceRunningTotal;
          const inThisBracket = Math.min(bracketWidth, tempQuantity);
          allowanceRunningTotal += bracketWidth;
          return acc + rounding(inThisBracket * v.get('fee'));
        }, 0);
        r.set(c, fee);
        total += fee;
      }
    });
  });
  return makeDutyReportRecord({
    totalDuty: total,
    dutyByCategoryRaw: reportByCategory,
  });
};
