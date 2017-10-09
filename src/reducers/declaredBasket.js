import { emptyBasket } from '../constants/basket';

const declaredBasket = (state = emptyBasket, action) => {
  switch (action.type) {
    case 'CHANGE_QUANTITY_DECLARED_BASKET_ITEM': {
      return {
        ...state,
        [action.categoryName]: {
          ...state[action.categoryName],
          quantity: Math.max(
            0,
            state[action.categoryName].quantity + action.quantityChange
          ),
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default declaredBasket;
