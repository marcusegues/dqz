import { emptyBasket } from '../model2/constants/basket';
import { dutyForCategory } from '../model2/dutyCalculator';

const basketItem = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_VALUE_TO_DECLARED_BASKET': {
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
    case 'CHANGE_QUANTITY_DECLARED_BASKET_ITEM': {
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

const declaredBasket = (state = emptyBasket, action) => {
  switch (action.type) {
    case 'ADD_VALUE_TO_DECLARED_BASKET':
    case 'CHANGE_QUANTITY_DECLARED_BASKET_ITEM': {
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

export default declaredBasket;

export const getDutyForCategory = (state, categoryName) => {
  return state[categoryName].get('duty');
};

export const getIconForCategory = (state, categoryName) => {
  return state.getIn([categoryName, 'icon']);
};

export const getTotalDuty = state => {
  return state.valueSeq().reduce((acc, val) => acc + val.get('duty'), 0);
};
