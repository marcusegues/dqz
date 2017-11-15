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
} from './types/basketPeopleTypes';
import type { DutyReport } from './types/calculationTypes';
import { CategoriesArray, CategoriesRates } from './constants';
import { makeDutyReportRecord } from './types/calculationTypes';
import type { CategoryBasketItem } from './types/basket';

export const calculateDutyForCategory = (
  category: ?Category,
  basketItem: ?CategoryBasketItem,
  people: ?People
): ?number => {
  if (!(category && basketItem && people)) return null;
  const quantityRaw: number = basketItem.getIn(['volume', 'quantity'], 0);
  const allowanceRaw: number = CategoriesRates.getIn(
    [category, 'dutyAllowance'],
    0
  );
  const adultsOnly: boolean = CategoriesRates.getIn(
    [category, 'adultsOnly'],
    false
  );
  const peopleCount: number =
    people.get('adults', 0) + +!adultsOnly * people.get('minors', 0);
  const quantity: number = quantityRaw - peopleCount * allowanceRaw;
  let allowanceRunningTotal: number = 0;
  const duty: ImmutableListType<DutyBracket> = CategoriesRates.getIn(
    [category, 'duty'],
    Immutable.List()
  );
  if (quantity <= allowanceRunningTotal) {
    return 0;
  } else {
    const fee = duty.reduce((acc, v) => {
      const tempQuantity = Math.max(0, quantity - allowanceRunningTotal);
      const thresholdThisBracket = v.get('threshold');
      const bracketWidth = thresholdThisBracket - allowanceRunningTotal;
      const inThisBracket = Math.min(bracketWidth, tempQuantity);
      allowanceRunningTotal += bracketWidth;
      return acc + inThisBracket * v.get('fee');
    }, 0);
    return fee;
  }
};

export const calculateDuty = (basket: Basket, people: People): DutyReport => {
  let total = 0;
  const reportByCategory: ImmutableMapType<
    Category,
    number
  > = Immutable.Map().withMutations(r => {
    CategoriesArray.forEach(c => {
      // const fee = calculateDutyForCategory(c, basket.getIn([c]), people);
      // r.set(c, fee);
      // total += fee;
      const quantityRaw: number = basket.getIn([c, 'volume', 'quantity'], 0);
      const allowanceRaw: number = CategoriesRates.getIn(
        [c, 'dutyAllowance'],
        0
      );
      const adultsOnly: boolean = CategoriesRates.getIn(
        [c, 'adultsOnly'],
        false
      );
      const peopleCount: number =
        people.get('adults', 0) + +!adultsOnly * people.get('minors', 0);
      const quantity: number = quantityRaw - peopleCount * allowanceRaw;
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
          const thresholdThisBracket = v.get('threshold');
          const bracketWidth = thresholdThisBracket - allowanceRunningTotal;
          const inThisBracket = Math.min(bracketWidth, tempQuantity);
          allowanceRunningTotal += bracketWidth;
          return acc + inThisBracket * v.get('fee');
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
