// @flow

import type {
  Map as ImmutableMapType,
  List as ImmutableListType
} from 'immutable';
import Immutable from 'immutable';
import type {
  Basket,
  Category,
  DutyBracket,
  People
} from './types/basketPeopleTypes';
import type { DutyReport } from './types/calculationTypes';
import { CategoriesArray, CategoriesRates } from './constants';
import { makeDutyReportRecord } from './types/calculationTypes';
import { rounding } from './utils';
import { getQuantity } from './configurationApi';

export const calculateDuty = (basket: Basket, people: People): DutyReport => {
  let total = 0;
  const reportByCategory: ImmutableMapType<
    Category,
    number
  > = Immutable.Map().withMutations(r => {
    CategoriesArray.forEach(c => {
      const quantityRaw: number = getQuantity(basket, c);
      const adultsOnly: boolean = CategoriesRates.getIn(
        [c, 'adultsOnly'],
        false
      );
      const peopleCount: number =
        people.get('adults', 0) + +!adultsOnly * people.get('minors', 0);

      let allowanceRaw: number = CategoriesRates.getIn([c, 'dutyAllowance'], 0);
      const dutyDependency: ?Category = CategoriesRates.getIn(
        [c, 'dutyAllowanceDependency'],
        null
      );
      allowanceRaw *= peopleCount;
      if (dutyDependency) {
        allowanceRaw -= getQuantity(basket, dutyDependency);
        allowanceRaw = Math.max(0, allowanceRaw);
      }

      const quantity: number = quantityRaw - allowanceRaw;

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
    dutyByCategoryRaw: reportByCategory
  });
};
