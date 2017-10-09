import { emptyBasket } from '../constants/basket';

const declaredBasket = (state = emptyBasket, action) => {
  switch (action.type) {
    case 'INCREMENT_DECLARED_BASKET_ITEM': {
      return {
        ...state,
        [action.itemName]: state[action.itemName] + action.increment,
      };
    }
    default: {
      return state;
    }
  }
};

export default declaredBasket;
