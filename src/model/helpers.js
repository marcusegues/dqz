// @flow

import Immutable from 'immutable';
import type { Set as ImmutableSetType } from 'immutable';
import type {
  BasketType,
  CategoriesTypes,
  CategoryBasketItem,
  People,
} from './types/types';
import { CategoriesArray } from './constants';
import { makeCategoryBasketItemRecord, makePeopleRecord } from './types/types';

const emptyItem: CategoryBasketItem = makeCategoryBasketItemRecord();

export const emptyBasket: BasketType = Immutable.Map(
  CategoriesArray.map(c => [c, emptyItem])
);

// QUANTITIES
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

export const getQuantity = (
  basket: BasketType,
  category: CategoriesTypes
): number => Immutable.getIn(basket, [category, 'volume', 'quantity'], 0);

export const addAmount = (
  basket: BasketType,
  category: CategoriesTypes,
  amount: number
): BasketType =>
  basket.updateIn([category, 'volume', 'amounts'], Immutable.Set(), amounts =>
    amounts.add(amount)
  );

export const resetAmounts = (
  basket: BasketType,
  category: CategoriesTypes
): BasketType => basket.setIn([category, 'volume', 'amounts'], Immutable.Set());

export const getAmounts = (
  basket: BasketType,
  category: CategoriesTypes
): ImmutableSetType<number> =>
  Immutable.getIn(basket, [category, 'volume', 'amounts'], Immutable.Set());

export const initPeople: People = makePeopleRecord({
  adults: 1,
  minors: 0,
});
