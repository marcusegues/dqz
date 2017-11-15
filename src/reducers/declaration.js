// @flow
import { emptyBasket } from '../model/configurationApi';
import type { State } from '../types/reducers/declaration';
import { makePeopleRecord } from '../model/types/people';
import { dutyForCategory } from '../model2/dutyCalculator';
import type { Action } from '../types/actions';

const basketItem = (state = {}, action) => {
  switch (action.type) {
    case 'DECLARED_BASKET_ADD_VALUE': {
      if (action.value === '') {
        return state;
      }
      const values = [...state.values];
      values.push(parseInt(action.value, 10));
      return {
        ...state,
        values,
      };
    }
    case 'DECLARED_BASKET_CHANGE_QUANTITY': {
      const quantity = Math.max(
        0,
        state.get('quantity') + action.quantityChange
      );
      ret = state.withMutations(s => {
        s
          .set('duty', dutyForCategory(action.categoryName, quantity, 1, 0))
          .set('quantity', quantity);
      });
      return ret;
    }
    default: {
      return state;
    }
  }
};

const declaration = (
  state: State = {
    people: makePeopleRecord(),
    basket: emptyBasket,
  },
  action: Action
) => {
  switch (action.type) {
    case 'DECLARED_BASKET_ADD_VALUE':
    case 'DECLARED_BASKET_CHANGE_QUANTITY': {
      return state.withMutations(s => {
        s.setIn(
          [action.category, 'duty'],
          dutyForCategory(action.categoryName, quantity, 1, 0)
        );
      });

      return state.set(
        action.categoryName,
        basketItem(state.get(action.categoryName), action)
      );
    }
    default: {
      return state;
    }
  }
};

export default declaration;

export const getDutyForCategory = (state, categoryName) => {
  return state[categoryName].get('duty');
};

export const getIconForCategory = (state, categoryName) => {
  return state.getIn([categoryName, 'icon']);
};

export const getTotalDuty = state => {
  return state.valueSeq().reduce((acc, val) => acc + val.get('duty'), 0);
};
