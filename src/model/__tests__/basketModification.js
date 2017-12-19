// @flow
/* global expect, test, describe */
import Immutable from 'immutable';
import type { Basket } from '../types/basketPeopleTypes';
import {
  addAdult,
  addAmount,
  addLargeAmount,
  addMinor,
  emptyBasket,
  getAdultPeople,
  getAmounts,
  getLargeAmounts,
  getMinorPeople,
  getTotalQuantity,
  getTotalPeople,
  initPeople,
  resetAmounts,
  resetLargeAmounts,
  setAdultPeople,
  setMinorPeople,
  setPeople,
  addQuantities,
  addQuantity,
  subtractAdult,
  subtractMinor,
  getQuantities,
  deleteQuantity,
} from '../configurationApi';
import { CategoriesArray } from '../constants';

const basket1: Basket = emptyBasket;

const quantityBasket1: Basket = addQuantity(basket1, 'Butter', 1234);
const quantityBasket2: Basket = addQuantities(basket1, [
  { category: 'Meat', quantity: 123 },
  { category: 'Butter', quantity: 321 },
]);
const quantityBasket3: Basket = basket1;

const amountBasket1: Basket = addAmount(basket1, 'Butter', 12.34);
const amountBasket2: Basket = addAmount(amountBasket1, 'Butter', 34.56);

const largeAmountBasket1: Basket = addLargeAmount(basket1, 'Tobacco', 1234);
const largeAmountBasket2: Basket = addLargeAmount(
  largeAmountBasket1,
  'Tobacco',
  1234
);

const twoAdultsNoMinor = addAdult(initPeople);
const noAdultsNoMinor = subtractAdult(initPeople);
const oneAdultOneMinor = addMinor(initPeople);

describe('The basket / quantites: ', () => {
  test('defaults to 0 quantity', () => {
    CategoriesArray.forEach(c =>
      expect(getTotalQuantity(emptyBasket, c)).toBe(0)
    );
  });
  test('has individually set quantities: ', () => {
    expect(getTotalQuantity(quantityBasket1, 'Butter')).toBe(1234);
  });
  test('leaves other quantities untouched: ', () => {
    expect(getTotalQuantity(quantityBasket1, 'Meat')).toBe(0);
  });
  test('has sync set quantities: ', () => {
    expect(getTotalQuantity(quantityBasket2, 'Butter')).toBe(321);
    expect(getTotalQuantity(quantityBasket2, 'Meat')).toBe(123);
  });
  test('is immutable', () => {
    CategoriesArray.forEach(c =>
      expect(getTotalQuantity(quantityBasket3, c)).toBe(0)
    );
  });
  test('can add multiple quantites in one category', () => {
    const b1 = addQuantity(emptyBasket, 'Meat', 123);
    const b2 = addQuantity(b1, 'Meat', 123);
    const b3 = addQuantity(b2, 'Meat', 123);
    expect(getTotalQuantity(b3, 'Meat')).toBe(369);
    expect(getQuantities(b3, 'Meat').size).toBe(3);
  });

  test('can delete quantites in a category', () => {
    const b1 = addQuantity(emptyBasket, 'Meat', 123);
    const b2 = addQuantity(b1, 'Meat', 12);
    const b3 = addQuantity(b2, 'Meat', 1);
    const b4 = deleteQuantity(b3, 'Meat', 2);
    expect(getTotalQuantity(b4, 'Meat')).toBe(135);
    expect(getQuantities(b4, 'Meat').size).toBe(2);
  });

  test('deleting with too high an index has no effect', () => {
    const b1 = addQuantity(emptyBasket, 'Meat', 123);
    const b2 = addQuantity(b1, 'Meat', 123);
    const b3 = addQuantity(b2, 'Meat', 123);
    const b4 = deleteQuantity(b3, 'Meat', 3);
    const b5 = deleteQuantity(b4, 'Meat', 33333);
    expect(getTotalQuantity(b5, 'Meat')).toBe(369);
    expect(getQuantities(b5, 'Meat').size).toBe(3);
  });
  test('adding quantity of zero has no effect', () => {
    const b1 = addQuantity(emptyBasket, 'Meat', 0);

    expect(getQuantities(b1, 'Meat').size).toBe(0);
  });
  test('adding negative quantity has no effect', () => {
    const b1 = addQuantity(emptyBasket, 'Meat', -123);

    expect(getQuantities(b1, 'Meat').size).toBe(0);
  });
});

describe('The basket / amounts: ', () => {
  test('defaults to empty set of amounts', () => {
    CategoriesArray.forEach(c =>
      expect(getAmounts(emptyBasket, c)).toBe(Immutable.List())
    );
  });
  test('adds amounts: ', () => {
    expect(getAmounts(amountBasket1, 'Butter').toString()).toBe(
      Immutable.List([12.34]).toString()
    );
  });
  test('adds another amount: ', () => {
    expect(getAmounts(amountBasket2, 'Butter').toString()).toBe(
      Immutable.List([12.34, 34.56]).toString()
    );
  });
  test('leaves other amounts untouched: ', () => {
    expect(getAmounts(amountBasket1, 'Meat')).toBe(Immutable.List());
  });
  test('resets amounts: ', () => {
    const resetted: Basket = resetAmounts(amountBasket1, 'Butter');
    expect(getAmounts(resetted, 'Butter')).toBe(Immutable.List());
  });
});

describe('The basket / large amounts: ', () => {
  test('defaults to empty set of amounts', () => {
    CategoriesArray.forEach(c =>
      expect(getLargeAmounts(emptyBasket, c)).toBe(Immutable.List())
    );
  });
  test('adds large amounts: ', () => {
    expect(getLargeAmounts(largeAmountBasket1, 'Tobacco').toString()).toBe(
      Immutable.List([1234]).toString()
    );
  });
  test('adds another large amount: ', () => {
    expect(getLargeAmounts(largeAmountBasket2, 'Tobacco').toString()).toBe(
      Immutable.List([1234, 1234]).toString()
    );
  });
  test('leaves other large amounts untouched: ', () => {
    expect(getLargeAmounts(amountBasket1, 'Meat')).toBe(Immutable.List());
  });
  test('resets large amounts: ', () => {
    const resetted: Basket = resetLargeAmounts(amountBasket1, 'Tobacco');
    expect(getLargeAmounts(resetted, 'Tobacco')).toBe(Immutable.List());
  });
});

describe('Party configuration', () => {
  test('inits with 1 adult and no minors', () => {
    expect(getAdultPeople(initPeople)).toBe(1);
    expect(getMinorPeople(initPeople)).toBe(0);
  });
  test('adds adults', () => {
    expect(getAdultPeople(twoAdultsNoMinor)).toBe(2);
  });
  test('subtracts adults', () => {
    expect(getAdultPeople(noAdultsNoMinor)).toBe(0);
  });
  test('subtracts adults (non-negative', () => {
    expect(getAdultPeople(subtractAdult(noAdultsNoMinor))).toBe(0);
  });

  test('adds minor', () => {
    expect(getMinorPeople(oneAdultOneMinor)).toBe(1);
  });
  test('subtracts minor', () => {
    expect(getMinorPeople(subtractMinor(oneAdultOneMinor))).toBe(0);
  });
  test('subtracts minor (non-negative)', () => {
    expect(getMinorPeople(subtractMinor(noAdultsNoMinor))).toBe(0);
  });
  test('set 11 adults', () => {
    expect(getAdultPeople(setAdultPeople(initPeople, 11))).toBe(11);
  });
  test('set 11 adults on init -> still no minors', () => {
    expect(getMinorPeople(setAdultPeople(initPeople, 11))).toBe(0);
  });
  test('set 11 minor', () => {
    expect(getMinorPeople(setMinorPeople(initPeople, 11))).toBe(11);
  });
  test('set 11 adults on init -> still no minors', () => {
    expect(getAdultPeople(setMinorPeople(initPeople, 11))).toBe(1);
  });
  test('set -11 adults', () => {
    expect(getAdultPeople(setAdultPeople(initPeople, -11))).toBe(0);
  });
  test('set -11 minor', () => {
    expect(getMinorPeople(setMinorPeople(initPeople, -11))).toBe(0);
  });

  test('set 6 adults and 3 minor in one go', () => {
    const myParty = setPeople(initPeople, 6, 3);
    expect(getAdultPeople(myParty)).toBe(6);
    expect(getMinorPeople(myParty)).toBe(3);
  });
  test('set -6 adults and -3 minor in one go', () => {
    const myParty = setPeople(initPeople, -6, -3);
    expect(getAdultPeople(myParty)).toBe(0);
    expect(getMinorPeople(myParty)).toBe(0);
  });

  test('get number of people in party', () => {
    const myParty1 = setPeople(initPeople, 6, 3);
    const myParty2 = setPeople(initPeople, -6, -3);
    expect(getTotalPeople(myParty1)).toBe(9);
    expect(getTotalPeople(myParty2)).toBe(0);
  });
});
