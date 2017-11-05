// @flow
import {
  addAmount,
  addLargeAmount,
  emptyBasket,
  setQuantity,
} from '../configurationApi';
import type { Basket } from '../types/basketPeopleTypes';

// this is solely to trick jest.
test('', () => expect(true).toBeTruthy());

export const sampleBasket1: Basket = emptyBasket.withMutations(basket => {
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

export const sampleBasket2: Basket = emptyBasket.withMutations(basket => {
  basket = addAmount(basket, 'Butter', 12.34);
  basket = addAmount(basket, 'Butter', 125);
  basket = addAmount(basket, 'Butter', 125);
  basket = addAmount(basket, 'Butter', 125);
  basket = addAmount(basket, 'Butter', 125);
  basket = addAmount(basket, 'Butter', 125);
  basket = addAmount(basket, 'Butter', 125);
  basket = addAmount(basket, 'Butter', 125);
  basket = addAmount(basket, 'Butter', 125);
  basket = addLargeAmount(basket, 'Butter', 525);
  basket = setQuantity(basket, 'Butter', 123);

  basket = addAmount(basket, 'Meat', 12);
  basket = addAmount(basket, 'Meat', 31);
  basket = setQuantity(basket, 'Meat', 111);

  basket = addAmount(basket, 'Tobacco', 11);
  basket = addAmount(basket, 'Tobacco', 33);
  basket = addLargeAmount(basket, 'Tobacco', 5555);
  basket = setQuantity(basket, 'Tobacco', 3219);

  return basket;
});

const exchangeRate3 = 1.19;
export const sampleBasket3: Basket = emptyBasket.withMutations(basket => {
  basket = addAmount(basket, 'Meat', 240 * exchangeRate3);
  basket = addAmount(basket, 'Butter', 20 * exchangeRate3);
  basket = addAmount(basket, 'AlcSoft', 30 * exchangeRate3);
  basket = addAmount(basket, 'AlcHard', 450 * exchangeRate3);
  return basket;
});

const exchangeRate4 = 1.19;
export const sampleBasket4: Basket = emptyBasket.withMutations(basket => {
  basket = addAmount(basket, 'Meat', 40 * exchangeRate4);
  basket = addAmount(basket, 'Butter', 20 * exchangeRate4);
  basket = addAmount(basket, 'OtherFood', 350 * exchangeRate4);
  basket = addAmount(basket, 'AlcHard', 50 * exchangeRate4);
  basket = addAmount(basket, 'Other', 200 * exchangeRate4);
  return basket;
});

// EZV baskets
// https://www.ezv.admin.ch/ezv/de/home/information-private/reisen-und-einkaufen--freimengen-und-wertfreigrenze/einfuhr-in-die-schweiz/warenwert-bis-chf-300--mehrwertsteuerfrei.html
export const ezvBasket1: Basket = emptyBasket.withMutations(basket => {
  basket = addAmount(basket, 'Meat', 100);
  basket = addAmount(basket, 'Meat', 100);
  basket = addAmount(basket, 'Meat', 100);
  return basket;
});

export const ezvBasket2: Basket = emptyBasket.withMutations(basket => {
  basket = addAmount(basket, 'Meat', 100);
  basket = addAmount(basket, 'Meat', 100);
  basket = addAmount(basket, 'Meat', 100);
  basket = addAmount(basket, 'Meat', 100);
  return basket;
});

export const ezvBasket3: Basket = emptyBasket.withMutations(basket => {
  basket = addAmount(basket, 'Meat', 100);
  basket = addAmount(basket, 'Meat', 100);
  basket = addAmount(basket, 'Meat', 100);
  basket = addAmount(basket, 'Meat', 100);
  basket = addAmount(basket, 'Meat', 100);
  basket = addAmount(basket, 'Meat', 100);
  return basket;
});

export const ezvBasket4: Basket = emptyBasket.withMutations(basket => {
  basket = addAmount(basket, 'Meat', 100);
  basket = addAmount(basket, 'Meat', 100);
  basket = addAmount(basket, 'Meat', 100);
  basket = addAmount(basket, 'Meat', 100);
  basket = addAmount(basket, 'Meat', 100);
  basket = addAmount(basket, 'Meat', 100);
  basket = addAmount(basket, 'Meat', 100);
  basket = addAmount(basket, 'Meat', 100);
  basket = addAmount(basket, 'Meat', 100);
  return basket;
});

export const ezvBasket5: Basket = emptyBasket.withMutations(basket => {
  basket = addLargeAmount(basket, 'Meat', 400);
  return basket;
});

// https://www.ezv.admin.ch/ezv/de/home/information-private/reisen-und-einkaufen--freimengen-und-wertfreigrenze/einfuhr-in-die-schweiz/warenwert-bis-chf-300--mehrwertsteuerfrei/anwendungsbeispiele-der-wertfreigrenze-bei-mehreren-personen.html
export const ezvBasket6: Basket = emptyBasket.withMutations(basket => {
  basket = addLargeAmount(basket, 'Meat', 320);
  return basket;
});

export const ezvBasket7: Basket = emptyBasket.withMutations(basket => {
  basket = addAmount(basket, 'Meat', 220);
  basket = addAmount(basket, 'Meat', 220);
  return basket;
});

export const ezvBasket8: Basket = emptyBasket.withMutations(basket => {
  basket = addAmount(basket, 'Meat', 220);
  basket = addAmount(basket, 'Meat', 220);
  basket = addAmount(basket, 'Meat', 220);
  return basket;
});

export const ezvBasket9: Basket = emptyBasket.withMutations(basket => {
  basket = addAmount(basket, 'Meat', 250);
  basket = addAmount(basket, 'Meat', 250);
  basket = addAmount(basket, 'Meat', 250);
  basket = addAmount(basket, 'Meat', 250);
  return basket;
});

export const ezvBasket10: Basket = emptyBasket.withMutations(basket => {
  basket = addLargeAmount(basket, 'Meat', 800);
  return basket;
});

export const ezvBasket11: Basket = emptyBasket.withMutations(basket => {
  basket = addAmount(basket, 'Meat', 200);
  basket = addAmount(basket, 'Meat', 200);
  basket = addAmount(basket, 'Meat', 200);
  basket = addAmount(basket, 'Meat', 200);
  basket = addAmount(basket, 'Meat', 200);
  return basket;
});

export const ezvBasket12: Basket = emptyBasket.withMutations(basket => {
  basket = addAmount(basket, 'Meat', 200);
  basket = addAmount(basket, 'Meat', 200);
  basket = addLargeAmount(basket, 'Meat', 500);
  return basket;
});

export const ezvBasket13: Basket = emptyBasket.withMutations(basket => {
  basket = addAmount(basket, 'Meat', 200);
  basket = addAmount(basket, 'Meat', 200);
  basket = addAmount(basket, 'Meat', 200);
  basket = addAmount(basket, 'Meat', 200);
  basket = addAmount(basket, 'Meat', 200);
  basket = addLargeAmount(basket, 'Meat', 500);
  return basket;
});
