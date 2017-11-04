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

/**
 * Empty Basket
 * @type BasketType
 */
export const emptyBasket: BasketType = Immutable.Map(
  CategoriesArray.map(c => [c, emptyItem])
);

// QUANTITIES
/**
 * Sets a quantity in a basket for a given category
 * @param basket
 * @param category
 * @param quantity
 * @returns BasketType
 */
export const setQuantity = (
  basket: BasketType,
  category: CategoriesTypes,
  quantity: number
): BasketType => basket.setIn([category, 'volume', 'quantity'], quantity);

/**
 * Sets several quantites for the given basket
 * @param basket
 * @param pairs
 * @returns BasketType
 */
export const setQuantities = (
  basket: BasketType,
  pairs: Array<{ category: CategoriesTypes, quantity: number }>
): BasketType => {
  return basket.withMutations(bskt => {
    pairs.forEach(p => setQuantity(bskt, p.category, p.quantity));
  });
};

/**
 * Gets the quantity for the basket's category
 * @param basket
 * @param category
 * @returns number
 */
export const getQuantity = (
  basket: BasketType,
  category: CategoriesTypes
): number => Immutable.getIn(basket, [category, 'volume', 'quantity'], 0);

// AMOUNTS
/**
 * Adds an amount in a given category of a basket
 * @param basket
 * @param category
 * @param amount
 * @returns BasketType
 */
export const addAmount = (
  basket: BasketType,
  category: CategoriesTypes,
  amount: number
): BasketType =>
  basket.updateIn([category, 'volume', 'amounts'], Immutable.List(), amounts =>
    amounts.push(amount)
  );

/**
 * Resets the amounts in a basket's category
 * @param basket
 * @param category
 * @returns BasketType
 */
export const resetAmounts = (
  basket: BasketType,
  category: CategoriesTypes
): BasketType =>
  basket.setIn([category, 'volume', 'amounts'], Immutable.List());

/**
 * Gets the amounts of a basket's category
 * @param basket
 * @param category
 * @returns ImmutableListType<number>
 */
export const getAmounts = (
  basket: BasketType,
  category: CategoriesTypes
): ImmutableListType<number> =>
  Immutable.getIn(basket, [category, 'volume', 'amounts'], Immutable.List());

// TODO: remove single amounts (depends on the UI implementation)

// AMOUNTS LARGE
/**
 * Adds a large amount in a given category of a basket
 * @param basket
 * @param category
 * @param amountLarge
 * @returns BasketType
 */
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

/**
 * Resets the large amounts in a basket's category
 * @param basket
 * @param category
 * @returns BasketType
 */
export const resetLargeAmounts = (
  basket: BasketType,
  category: CategoriesTypes
): BasketType =>
  basket.setIn([category, 'volume', 'amountsLarge'], Immutable.List());

/**
 * Gets the large amounts of a basket's category
 * @param basket
 * @param category
 * @returns ImmutableListType<number>
 */
export const getLargeAmounts = (
  basket: BasketType,
  category: CategoriesTypes
): ImmutableListType<number> =>
  Immutable.getIn(
    basket,
    [category, 'volume', 'amountsLarge'],
    Immutable.List()
  );

// TODO: remove single large amounts (depends on the UI implementation)

/**
 * Returns an init people configuration (1 adult, no minor)
 */
export const initPeople: People = makePeopleRecord({
  adults: 1,
  minors: 0,
});

/**
 * Gets the adult people in the party
 * @param party
 * @returns number
 */
export const getAdultPeople = (party: People): number => party.get('adults');

/**
 * Gets the minor people in the party
 * @param party
 * @returns number
 */
export const getMinorPeople = (party: People): number => party.get('minors');

/**
 * Adds an adult to the party
 * @param party
 * @returns People Type
 */
export const addAdult = (party: People): People =>
  party.update('adults', a => a + 1);

/**
 * Subtracts an adult from the party (non-negative result)
 * @param party
 * @returns People Type
 */
export const subtractAdult = (party: People): People =>
  party.update('adults', a => Math.max(a - 1, 0));

/**
 * Adds a minor to the party
 * @param party
 * @returns People Type
 */
export const addMinor = (party: People): People =>
  party.update('minors', m => m + 1);

/**
 * Subtracts a minor from the party (non-negative result)
 * @param party
 * @returns People Type
 */
export const subtractMinor = (party: People): People =>
  party.update('minors', m => Math.max(m - 1, 0));
