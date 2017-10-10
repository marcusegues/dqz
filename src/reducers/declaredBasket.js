import { emptyBasket, categories } from '../constants/basket';

const duty = (action, quantity) => {
  switch (action.categoryName) {
    case categories.MEAT_AND_MEAT_PRODUCTS: {
      if (quantity <= 1) {
        return 0;
      } else if (quantity <= 10) {
        return 17 * (quantity - 1);
      } else {
        return 23 * quantity;
      }
    }
    case categories.BUTTER_OR_CREAM: {
      if (quantity <= 1) {
        return 0;
      } else {
        return 16 * (quantity - 1);
      }
    }
    case categories.OILS_FATS_MARGARINE: {
      if (quantity <= 5) {
        return 0;
      } else {
        return 2 * (quantity - 5);
      }
    }
    case categories.ALCOHOL_BELOW_18: {
      if (quantity <= 5) {
        return 0;
      } else {
        return 2 * (quantity - 5);
      }
    }
    case categories.ALCOHOL_ABOVE_18: {
      if (quantity <= 1) {
        return 0;
      } else {
        return 15 * (quantity - 1);
      }
    }
    case categories.CIGARETTES_AND_CIGARS: {
      if (quantity <= 250) {
        return 0;
      } else {
        return 0.25 * (quantity - 250);
      }
    }
    case categories.OTHER_TOBACCO: {
      if (quantity <= 250) {
        return 0;
      } else {
        return 0.1 * (quantity - 250);
      }
    }
    default: {
      return 0;
    }
  }
};

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
      const quantity = state.quantity + action.quantityChange;
      return {
        ...state,
        duty: duty(action, quantity),
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
