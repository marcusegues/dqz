// @flow
import { CATEGORIES_LIST } from './categories';
import type { Basket } from '../types/basket';
import { makeBasketCategoryInfo } from '../types/basket';
import Immutable from 'immutable';

export const emptyBasket: Basket = Immutable.Map().withMutations(b => {
  CATEGORIES_LIST.forEach(c => {
    b.setIn([c], makeBasketCategoryInfo());
  });
});
