// @flow

import Immutable from 'immutable';
import type { List as ImmutableListType } from 'immutable';
import type {
  Basket,
  Category,
  CategoryBasketItem,
  People,
} from './types/basketPeopleTypes';
import { CategoriesArray } from './constants';
import {
  makeCategoryBasketItemRecord,
  makePeopleRecord,
} from './types/basketPeopleTypes';

const emptyItem: CategoryBasketItem = makeCategoryBasketItemRecord();

/**
 * Empty Basket
 * @type Basket
 */
export const emptyBasket: Basket = Immutable.Map(
  CategoriesArray.map(c => [c, emptyItem])
);

// QUANTITIES
/**
 * Adds a quantity in a basket for a given category
 * @param basket
 * @param category
 * @param quantity
 * @returns Basket
 */
export const addQuantity = (
  basket: Basket,
  category: Category,
  quantity: number
): Basket =>
  basket.updateIn([category, 'volume', 'quantities'], q => q.push(quantity));

/**
 * Deletes a quantity in a basket for a given category at index
 * Note: if index > size of quantities list, quantities won't change.
 * This exception should be handled elsewhere.
 * @param basket
 * @param category
 * @param index
 * @returns Basket
 */
export const deleteQuantity = (
  basket: Basket,
  category: Category,
  index: number
): Basket =>
  basket.updateIn([category, 'volume', 'quantities'], q => q.delete(index));

/**
 * Helper method, not to be used in the App.
 * Sets several quantites for the given basket in different categories
 * @param basket
 * @param pairs
 * @returns Basket
 */
export const addQuantities = (
  basket: Basket,
  pairs: Array<{ category: Category, quantity: number }>
): Basket =>
  basket.withMutations(bskt => {
    pairs.forEach(p => addQuantity(bskt, p.category, p.quantity));
  });

/**
 * Gets all quantities for the basket's category
 * @param basket
 * @param category
 * @returns List of quantities (number)
 */
export const getQuantities = (
  basket: Basket,
  category: Category
): ImmutableListType<number> =>
  basket.getIn([category, 'volume', 'quantities'], Immutable.List());

/**
 * Gets the total quantity for the basket's category
 * @param basket
 * @param category
 * @returns number
 */
export const getTotalQuantity = (basket: Basket, category: Category): number =>
  basket
    .getIn([category, 'volume', 'quantities'], Immutable.List())
    .reduce((a, v) => a + v, 0);

// AMOUNTS
/**
 * Adds an amount in a given category of a basket
 * @param basket
 * @param category
 * @param amount
 * @returns Basket
 */
export const addAmount = (
  basket: Basket,
  category: Category,
  amount: number
): Basket =>
  basket.updateIn([category, 'volume', 'amounts'], Immutable.List(), amounts =>
    amounts.push(amount)
  );

/**
 * Resets the amounts in a basket's category
 * @param basket
 * @param category
 * @returns Basket
 */
export const resetAmounts = (basket: Basket, category: Category): Basket =>
  basket.setIn([category, 'volume', 'amounts'], Immutable.List());

/**
 * Gets the amounts of a basket's category
 * @param basket
 * @param category
 * @returns ImmutableListType<number>
 */
export const getAmounts = (
  basket: Basket,
  category: Category
): ImmutableListType<number> =>
  basket.getIn([category, 'volume', 'amounts'], Immutable.List());

// TODO: remove single amounts (depends on the UI implementation)

// AMOUNTS LARGE
/**
 * Adds a large amount in a given category of a basket
 * @param basket
 * @param category
 * @param amountLarge
 * @returns Basket
 */
export const addLargeAmount = (
  basket: Basket,
  category: Category,
  amountLarge: number
): Basket =>
  basket.updateIn(
    [category, 'volume', 'amountsLarge'],
    Immutable.List(),
    amountsLarge => amountsLarge.push(amountLarge)
  );

/**
 * Resets the large amounts in a basket's category
 * @param basket
 * @param category
 * @returns Basket
 */
export const resetLargeAmounts = (basket: Basket, category: Category): Basket =>
  basket.setIn([category, 'volume', 'amountsLarge'], Immutable.List());

/**
 * Gets the large amounts of a basket's category
 * @param basket
 * @param category
 * @returns ImmutableListType<number>
 */
export const getLargeAmounts = (
  basket: Basket,
  category: Category
): ImmutableListType<number> =>
  basket.getIn([category, 'volume', 'amountsLarge'], Immutable.List());

// TODO: remove single large amounts (depends on the UI implementation)

/**
 * Returns an init people configuration (1 adult, no minor)
 */
export const initPeople: People = makePeopleRecord({
  adults: 1,
  minors: 0,
});

/**
 * Gets the people in the party (adult + minor)
 * @param party
 * @returns number
 */
export const getTotalPeople = (party: People): number =>
  party.get('adults') + party.get('minors');

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
 * Sets the number of adults in a party (non-neg)
 * @param party
 * @param n
 * @returns People Type
 */
export const setAdultPeople = (party: People, n: number): People =>
  party.set('adults', Math.max(0, n));

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
 * Sets the number of adults in a party (non-neg)
 * @param party
 * @param n
 * @returns People Type
 */
export const setMinorPeople = (party: People, n: number): People =>
  party.set('minors', Math.max(0, n));

/**
 * Subtracts a minor from the party (non-negative result)
 * @param party
 * @returns People Type
 */
export const subtractMinor = (party: People): People =>
  party.update('minors', m => Math.max(m - 1, 0));

/**
 * Set all people directly (non-negative)
 * @param party
 * @param adults
 * @param minors
 * @returns People Type
 */
export const setPeople = (
  party: People,
  adults: number,
  minors: number
): People => {
  const p1 = party.set('minors', Math.max(0, minors));
  return p1.set('adults', Math.max(0, adults));
};
