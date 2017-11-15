// @flow
import { emptyBasket } from '../model/configurationApi';
import { getInitialState } from '../types/reducers/declaration';
import type { State } from '../types/reducers/declaration';
import { makePeopleRecord } from '../model/types/people';
import { dutyForCategory } from '../model2/dutyCalculator';
import type { Action } from '../types/actions';
import type { Category } from '../model/types/category';

const declaration = (state: State = getInitialState(), action: any) => {
  switch (action.type) {
    case 'DECLARED_BASKET_CHANGE_QUANTITY': {
      const category: Category = action.category;
      const quantity = Math.max(
        0,
        state.getIn(['basket', category, 'quantity'], 0) + action.quantityChange
      );
      return state.withMutations(s => {
        s
          .setIn(['basket', category, 'quantity'], quantity)
          .setIn(
            ['basket', category, 'duty'],
            calculateDutyForCategory(category, state.get(category), state.get)
          );
      });
    }
    default: {
      return state;
    }
  }
};

export default declaration;

export const getDutyForCategory = (
  state: State,
  category: Category
): number => {
  return state.getIn(['basket', category, 'duty']);
};

export const getTotalDuty = (state: State): number => {
  return state
    .get('basket')
    .valueSeq()
    .reduce((acc, val) => acc + val.get('duty'), 0);
};
