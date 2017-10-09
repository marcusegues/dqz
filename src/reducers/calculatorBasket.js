import { emptyBasket } from '../constants/basket';

const calculatorBasket = (state = emptyBasket, action) => {
  switch (action.type) {
    case 'CHANGE_QUANTITY_CALCULATOR_BASKET_ITEM': {
      return {
        ...state,
        [action.itemName]: state[action.itemName] + action.quantityChange,
      };
    }
    default: {
      return state;
    }
  }
};

export default calculatorBasket;
