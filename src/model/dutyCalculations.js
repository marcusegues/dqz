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

export const calculateDuty = (basket: Basket, people: People): DutyReport => {
  const report: ImmutableMapType<Category, number> = Immutable.Map();
  return report.withMutations(r => {
    CategoriesArray.forEach(c => {
      const quantity: number = basket.getIn([c, 'volume', 'quantity'], 0);
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
      let allowance: number = peopleCount * allowanceRaw;
      const duty: ImmutableListType<DutyBracket> = CategoriesRates.getIn(
        [c, 'duty'],
        Immutable.List()
      );

      if (quantity <= allowance) {
        r.set(c, 0);
      } else {
        const fee = duty.reduce((acc, v) => {
          const tempQuantity = quantity - allowance;
          const thresholdThisBracket = v.get('threshold');
          if (thresholdThisBracket <= allowance) {
            return acc;
          }
          const bracketWidth = thresholdThisBracket - allowance;
          const inThisBracket = Math.min(bracketWidth, tempQuantity);
          allowance += bracketWidth;
          return acc + inThisBracket * v.get('fee');
        }, 0);
        r.set(c, fee);
      }
    });
  });
};
