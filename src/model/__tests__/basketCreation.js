// @flow
import type { BasketType } from '../types/types';
import {
  emptyBasket,
  getQuantity,
  setQuantities,
  setQuantity,
} from '../helpers';
import { CategoriesArray } from '../constants';

const basket1: BasketType = emptyBasket;

const b1: BasketType = setQuantity(basket1, 'Butter', 1234);
const b2: BasketType = setQuantities(basket1, [
  { category: 'Meat', quantity: 123 },
  { category: 'Butter', quantity: 321 },
]);

describe('The basket: ', () => {
  test('defaults to 0 quantity', () => {
    CategoriesArray.forEach(c => expect(getQuantity(emptyBasket, c)).toBe(0));
  });
  test('has individually set quantities: ', () => {
    expect(getQuantity(b1, 'Butter')).toBe(1234);
  });
  test('leaves other quantities untouched: ', () => {
    expect(getQuantity(b1, 'Meat')).toBe(0);
  });
  test('has sync set quantities: ', () => {
    expect(getQuantity(b2, 'Butter')).toBe(321);
    expect(getQuantity(b2, 'Meat')).toBe(123);
  });
});
