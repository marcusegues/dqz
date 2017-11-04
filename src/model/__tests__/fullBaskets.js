// @flow
import {
  addAmount,
  addLargeAmount,
  emptyBasket,
  setQuantity,
} from '../configurationApi';
import type { BasketType } from '../types/basketPeopleTypes';

// this is solely to trick jest.
test('', () => expect(true).toBeTruthy());

export const sampleBasket1: BasketType = emptyBasket.withMutations(basket => {
  basket = addAmount(basket, 'Butter', 12.34);
  basket = addAmount(basket, 'Butter', 125);
  basket = addLargeAmount(basket, 'Butter', 525);
  basket = setQuantity(basket, 'Butter', 23);

  basket = addAmount(basket, 'Meat', 12);
  basket = addAmount(basket, 'Meat', 31);
  basket = setQuantity(basket, 'Meat', 111);

  basket = addAmount(basket, 'Tobacco', 11);
  basket = addAmount(basket, 'Tobacco', 33);
  basket = addLargeAmount(basket, 'Tobacco', 5555);
  basket = setQuantity(basket, 'Tobacco', 3219);

  return basket;
});
