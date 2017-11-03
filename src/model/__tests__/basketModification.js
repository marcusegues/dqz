// @flow
import type { BasketType } from '../types/types';
import {
  addAmount,
  emptyBasket,
  getAmounts,
  getQuantity,
  resetAmounts,
  setQuantities,
  setQuantity,
} from '../helpers';
import { CategoriesArray } from '../constants';
import Immutable from 'immutable';

const basket1: BasketType = emptyBasket;

const quantityBasket1: BasketType = setQuantity(basket1, 'Butter', 1234);
const quantityBasket2: BasketType = setQuantities(basket1, [
  { category: 'Meat', quantity: 123 },
  { category: 'Butter', quantity: 321 },
]);
const quantityBasket3: BasketType = basket1;

const amountBasket1: BasketType = addAmount(basket1, 'Butter', 1234);

describe('The basket / quantites: ', () => {
  test('defaults to 0 quantity', () => {
    CategoriesArray.forEach(c => expect(getQuantity(emptyBasket, c)).toBe(0));
  });
  test('has individually set quantities: ', () => {
    expect(getQuantity(quantityBasket1, 'Butter')).toBe(1234);
  });
  test('leaves other quantities untouched: ', () => {
    expect(getQuantity(quantityBasket1, 'Meat')).toBe(0);
  });
  test('has sync set quantities: ', () => {
    expect(getQuantity(quantityBasket2, 'Butter')).toBe(321);
    expect(getQuantity(quantityBasket2, 'Meat')).toBe(123);
  });
  test('is immutable', () => {
    CategoriesArray.forEach(c =>
      expect(getQuantity(quantityBasket3, c)).toBe(0)
    );
  });
});

describe('The basket / amounts: ', () => {
  test('defaults to empty set of amounts', () => {
    CategoriesArray.forEach(c =>
      expect(getAmounts(emptyBasket, c)).toBe(Immutable.Set())
    );
  });
  test('adds amounts: ', () => {
    expect(getAmounts(amountBasket1, 'Butter').toString()).toBe(
      Immutable.Set.of(1234).toString()
    );
  });
  test('leaves other amounts untouched: ', () => {
    expect(getAmounts(amountBasket1, 'Meat')).toBe(Immutable.Set());
  });
  test('resets amuonts: ', () => {
    const resetted: BasketType = resetAmounts(amountBasket1, 'Butter');
    expect(getAmounts(resetted, 'Butter')).toBe(Immutable.Set());
  });
});
