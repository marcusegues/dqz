// @flow

import Immutable from 'immutable';
import type { RecordFactory } from 'immutable';
import type {
  BasketType,
  CategoriesTypes,
  CategoryBasketItem,
  People,
} from './types/types';
import { CategoriesArray } from './constants';
import { makeCategoryBasketItemRecord, makePeopleRecord } from './types/types';

const emptyItem: CategoryBasketItem = makeCategoryBasketItemRecord();

// TODO make sure the objects are deep copied (I want immutable...) (added Object.assign for good measure)
export const emptyBasket: BasketType = Immutable.Map(
  CategoriesArray.map(c => [c, emptyItem])
);

export const setQuantity = (
  basket: BasketType,
  category: CategoriesTypes,
  quantity: number
): BasketType => basket.setIn([category, 'volume', 'quantity'], quantity);

export const setQuantities = (
  basket: BasketType,
  pairs: Array<{ category: CategoriesTypes, quantity: number }>
): BasketType => {
  return basket.withMutations(bskt => {
    pairs.forEach(p => setQuantity(bskt, p.category, p.quantity));
  });
};

export const initPeople: People = makePeopleRecord({
  adults: 1,
  minors: 0,
});
