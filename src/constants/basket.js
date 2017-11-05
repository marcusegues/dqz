// @flow
import { CATEGORIES_LIST } from './categories';
import type { Basket } from '../types/basket';

let emptyBasket: Basket = {};
CATEGORIES_LIST.forEach(category => {
  emptyBasket[category] = {
    quantity: 0,
    duty: 0,
    values: [],
  };
});

export { emptyBasket };
