// @flow

import Immutable from 'immutable';
import { v4 } from 'uuid';
import type { List as ImmutableListType } from 'immutable';
import type {
  Amounts,
  AmountWithId,
  Basket,
  Category,
  CategoryBasketItem,
  People,
  Quantity,
} from './types/basketPeopleAmountsTypes';
import { categoriesArray } from './constants';
import {
  makeAmountsOfCurrencyRecord,
  makeCategoryBasketItemRecord,
  makePeopleRecord,
} from './types/basketPeopleAmountsTypes';
import type { Currency } from './currencies';
import { flatAllAmounts, getConvertedLocalTimeToSwiss } from './utils';
import type { FlatAmount } from './utils';

const emptyItem: CategoryBasketItem = makeCategoryBasketItemRecord();

/**
 * Empty Basket
 * @type Basket
 */
export const emptyBasket: Basket = Immutable.Map(
  categoriesArray.map(c => [c, emptyItem])
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
): Basket => {
  if (quantity <= 0) {
    return basket;
  }
  return basket.updateIn([category, 'volume', 'quantities'], q =>
    q.push({
      number: quantity,
      date: getConvertedLocalTimeToSwiss().toString(),
    })
  );
};

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
 * Reset all quantites in a basket for a given category.
 * @param basket
 * @param category
 * @returns Basket
 */
export const resetQuantities = (basket: Basket, category: Category): Basket =>
  basket.setIn([category, 'volume', 'quantities'], Immutable.List());

/**
 * Reset all quantites in a basket for a given category.
 * @param basket
 * @param categories (array of category)
 * @returns Basket
 */
export const resetQuantitiesMultipleCategories = (
  basket: Basket,
  categories: Array<Category>
): Basket =>
  basket.withMutations(bskt => {
    categories.forEach(category => {
      bskt.setIn([category, 'volume', 'quantities'], Immutable.List());
    });
    return bskt;
  });

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
 * @returns List of quantities (object)
 */
export const getQuantities = (
  basket: Basket,
  category: Category
): ImmutableListType<Quantity> =>
  basket.getIn([category, 'volume', 'quantities'], Immutable.List());

/**
 * Helper to get the quantity number from a quantity
 * @param quantity
 * @returns {number}
 */
export const getQuantityNumber = (quantity: Quantity): number =>
  quantity.number || 0;

/**
 * Helper to get the quantity date (string) from a quantity
 * @param quantity
 * @returns {*}
 */
export const getQuantityDate = (quantity: Quantity): string => quantity.date;

/**
 * Gets the total quantity for the basket's category
 * @param basket
 * @param category
 * @returns number
 */
export const getTotalQuantity = (
  basket: Basket,
  category: Category
): number => basket
    .getIn([category, 'volume', 'quantities'], Immutable.List())
    .reduce((a, v) => a + getQuantityNumber(v), 0);

// AMOUNTS
export const initAmounts: Amounts = Immutable.Map();

/**
 * Helper to create currency section if not present
 */
const addCurrencyIfNeeded = (amounts: Amounts, currency: Currency): Amounts => {
  if (amounts.has(currency)) {
    return amounts;
  }
  return amounts.set(currency, makeAmountsOfCurrencyRecord());
};

/**
 * Adds an amount in a given category of a basket
 * @param amounts
 * @param currency
 * @param amount
 * @returns Amounts type
 */
export const addAmount = (
  amounts: Amounts,
  currency: Currency,
  amount: number
): Amounts =>
  addCurrencyIfNeeded(amounts, currency).updateIn(
    [currency, 'amounts'],
    Immutable.List(),
    list => list.push({ amount, id: v4() })
  );

/**
 * Resets the amounts in a basket's category
 * @param amounts
 * @param currency
 * @returns Amounts type
 */
export const resetAmounts = (amounts: Amounts, currency: Currency): Amounts =>
  addCurrencyIfNeeded(amounts, currency).setIn(
    [currency, 'amounts'],
    Immutable.List()
  );

/**
 * Deletes amount with a given ID
 * @param amounts
 * @param id
 * @returns {Amounts}
 */
export const deleteAmount = (amounts: Amounts, id: string): Amounts => {
  const flat = flatAllAmounts(amounts);
  const element: ?FlatAmount = flat.find(a => a.id === id);
  if (!element) {
    return amounts;
  }
  const amountsKey = element.large ? 'largeAmounts' : 'amounts';
  const amts = amounts.getIn([element.currency, amountsKey], Immutable.List());
  const listIdx = amts.findIndex(v => v.id === id);
  const newAmounts = amts.delete(listIdx);
  return amounts.setIn([element.currency, amountsKey], newAmounts);
};

/**
 * Gets amount at index
 * @param amounts
 * @param id
 * @returns The amount (type FlatAmount) or undefined
 */
export const getAmount = (amounts: Amounts, id: string): FlatAmount => {
  const flat = flatAllAmounts(amounts);
  const el = flat.find(a => a.id === id);
  if (el) {
    return el;
  }
  return { amount: 0, currency: 'CHF', large: false, id: 'N/A' };
};

/**
 * Gets the amounts of a basket's category
 * @param amounts
 * @param currency
 * @returns ImmutableListType<number>
 */
export const getAmounts = (
  amounts: Amounts,
  currency: Currency
): ImmutableListType<AmountWithId> =>
  amounts.getIn([currency, 'amounts'], Immutable.List());

// AMOUNTS LARGE
/**
 * Adds a large amount in a given category of a basket
 * @param amounts
 * @param currency
 * @param amountLarge
 * @returns Amount type
 */
export const addLargeAmount = (
  amounts: Amounts,
  currency: Currency,
  amountLarge: number
): Amounts =>
  addCurrencyIfNeeded(amounts, currency).updateIn(
    [currency, 'largeAmounts'],
    Immutable.List(),
    list => list.push({ amount: amountLarge, id: v4() })
  );

/**
 * Resets the large amounts in a basket's category
 * @param amounts
 * @param currency
 * @returns Basket
 */
export const resetLargeAmounts = (
  amounts: Amounts,
  currency: Currency
): Amounts =>
  addCurrencyIfNeeded(amounts, currency).setIn(
    [currency, 'largeAmounts'],
    Immutable.List()
  );

/**
 * Gets the large amounts of a basket's category
 * @param amounts
 * @param currency
 * @returns ImmutableListType<AmountWithId>
 */
export const getLargeAmounts = (
  amounts: Amounts,
  currency: Currency
): ImmutableListType<AmountWithId> =>
  amounts.getIn([currency, 'largeAmounts'], Immutable.List());

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
