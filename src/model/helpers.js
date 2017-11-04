// @flow

import Immutable from 'immutable';
import type { List as ImmutableListType } from 'immutable';
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

// AMOUNTS
export const addAmount = (
  basket: BasketType,
  category: CategoriesTypes,
  amount: number
): BasketType =>
  basket.updateIn([category, 'volume', 'amounts'], Immutable.List(), amounts =>
    amounts.push(amount)
  );

export const resetAmounts = (
  basket: BasketType,
  category: CategoriesTypes
): BasketType =>
  basket.setIn([category, 'volume', 'amounts'], Immutable.List());

export const getAmounts = (
  basket: BasketType,
  category: CategoriesTypes
): ImmutableListType<number> =>
  Immutable.getIn(basket, [category, 'volume', 'amounts'], Immutable.List());

// AMOUNTS LARGE
export const addLargeAmount = (
  basket: BasketType,
  category: CategoriesTypes,
  amountLarge: number
): BasketType =>
  basket.updateIn(
    [category, 'volume', 'amountsLarge'],
    Immutable.List(),
    amountsLarge => amountsLarge.push(amountLarge)
  );

export const resetLargeAmounts = (
  basket: BasketType,
  category: CategoriesTypes
): BasketType =>
  basket.setIn([category, 'volume', 'amountsLarge'], Immutable.List());

export const getLargeAmounts = (
  basket: BasketType,
  category: CategoriesTypes
): ImmutableListType<number> =>
  Immutable.getIn(
    basket,
    [category, 'volume', 'amountsLarge'],
    Immutable.List()
  );

export const initPeople: People = makePeopleRecord({
  adults: 1,
  minors: 0,
});

export const getAdultPeople = (party: People): number => party.get('adults');
export const getMinorPeople = (party: People): number => party.get('minors');

export const addAdult = (party: People): People =>
  party.update('adults', a => a + 1);

export const subtractAdult = (party: People): People =>
  party.update('adults', a => Math.max(a - 1, 0));

export const addMinor = (party: People): People =>
  party.update('minors', m => m + 1);

export const subtractMinor = (party: People): People =>
  party.update('minors', m => Math.max(m - 1, 0));
