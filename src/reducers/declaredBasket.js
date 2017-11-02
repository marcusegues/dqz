import { emptyBasket } from '../constants/basket';
import { dutyBySubCategory } from '../util/dutyCalculator';

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
      const quantity = Math.max(0, state.quantity + action.quantityChange);
      return {
        ...state,
        duty: dutyBySubCategory(action.categoryName, quantity, 1, 0),
        quantity: Math.max(0, quantity),
      };
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
      return {
        ...state,
        [action.categoryName]: basketItem(state[action.categoryName], action),
      };
    }
    default: {
      return state;
    }
  }
};

export default declaredBasket;

export const getDutyForCategory = (state, categoryName) => {
  return state[categoryName].duty;
};

export const getIconForCategory = (state, categoryName) => {
  return state[categoryName].icon;
};

export const getTotalDuty = state => {
  let totalDuty = 0;
  Object.keys(state).forEach(category => {
    totalDuty += state[category].duty;
  });
  return totalDuty;
};
