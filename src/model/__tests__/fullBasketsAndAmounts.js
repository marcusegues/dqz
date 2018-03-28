// @flow
import {
  addAmount,
  addLargeAmount,
  emptyBasket,
  addQuantity,
  initAmounts,
} from '../configurationApi';
import type { Amounts, Basket } from '../types/basketPeopleAmountsTypes';

// this is solely to trick jest.
test('', () => expect(true).toBeTruthy());

export const sampleBasket1: Basket = emptyBasket.withMutations(basket => {
  basket = addQuantity(basket, 'Butter', 23);
  basket = addQuantity(basket, 'Meat', 111);
  basket = addQuantity(basket, 'Tobacco', 3219);

  return basket;
});

export const sampleAmounts1: Amounts = initAmounts.withMutations(amounts => {
  amounts = addAmount(amounts, 'EUR', 12.34);
  amounts = addAmount(amounts, 'EUR', 125);
  amounts = addAmount(amounts, 'EUR', 525);
  amounts = addLargeAmount(amounts, 'EUR', 525);

  amounts = addAmount(amounts, 'USD', 12);
  amounts = addAmount(amounts, 'USD', 31);

  amounts = addAmount(amounts, 'CHF', 11);
  amounts = addAmount(amounts, 'CHF', 33);
  amounts = addAmount(amounts, 'CHF', 5555);
  amounts = addLargeAmount(amounts, 'CHF', 5555);

  return amounts;
});

export const sampleBasket2: Basket = emptyBasket.withMutations(basket => {
  basket = addQuantity(basket, 'Butter', 123);
  basket = addQuantity(basket, 'Meat', 111);
  basket = addQuantity(basket, 'Tobacco', 3219);

  return basket;
});

export const sampleAmounts2: Amounts = initAmounts.withMutations(amounts => {
  amounts = addAmount(amounts, 'EUR', 12.34);
  amounts = addAmount(amounts, 'EUR', 125);
  amounts = addAmount(amounts, 'EUR', 125);
  amounts = addAmount(amounts, 'EUR', 125);
  amounts = addAmount(amounts, 'EUR', 125);
  amounts = addAmount(amounts, 'EUR', 125);
  amounts = addAmount(amounts, 'EUR', 125);
  amounts = addAmount(amounts, 'EUR', 125);
  amounts = addAmount(amounts, 'EUR', 125);
  amounts = addAmount(amounts, 'EUR', 525);
  amounts = addLargeAmount(amounts, 'EUR', 525);

  amounts = addAmount(amounts, 'USD', 12);
  amounts = addAmount(amounts, 'USD', 31);

  amounts = addAmount(amounts, 'ZAR', 11);
  amounts = addAmount(amounts, 'ZAR', 33);
  amounts = addAmount(amounts, 'ZAR', 5555);
  amounts = addLargeAmount(amounts, 'ZAR', 5555);

  return amounts;
});

export const sampleAmounts3: Amounts = initAmounts.withMutations(amounts => {
  amounts = addAmount(amounts, 'EUR', 240);
  amounts = addAmount(amounts, 'USD', 20);
  amounts = addAmount(amounts, 'CHF', 30);
  amounts = addAmount(amounts, 'CHF', 450);
  return amounts;
});

export const sampleAmounts4: Amounts = initAmounts.withMutations(amounts => {
  amounts = addAmount(amounts, 'EUR', 40);
  amounts = addAmount(amounts, 'USD', 20);
  amounts = addAmount(amounts, 'USD', 350);
  amounts = addAmount(amounts, 'CHF', 50);
  amounts = addAmount(amounts, 'CHF', 200);
  return amounts;
});

export const sampleAmounts5: Amounts = initAmounts.withMutations(amounts => {
  amounts = addAmount(amounts, 'EUR', 1000);
  amounts = addLargeAmount(amounts, 'EUR', 5000);
  return amounts;
});

export const sampleBasket5: Basket = addQuantity(
  emptyBasket,
  'Cigarettes',
  100
);

export const sampleBasket6: Basket = emptyBasket.withMutations(basket => {
  basket = addQuantity(basket, 'Tobacco', 50);
  basket = addQuantity(basket, 'Cigarettes', 250);
  return basket;
});

export const sampleBasket7: Basket = emptyBasket.withMutations(basket => {
  basket = addQuantity(basket, 'Tobacco', 250);
  basket = addQuantity(basket, 'Cigarettes', 50);
  return basket;
});

export const sampleBasket8: Basket = emptyBasket.withMutations(basket => {
  basket = addQuantity(basket, 'Tobacco', 250);
  basket = addQuantity(basket, 'Cigarettes', 250);
  return basket;
});

export const sampleBasket9: Basket = emptyBasket.withMutations(basket => {
  basket = addQuantity(basket, 'Tobacco', 300);
  basket = addQuantity(basket, 'Cigarettes', 300);
  return basket;
});

export const roundingBasket1: Basket = emptyBasket.withMutations(basket => {
  basket = addQuantity(basket, 'Meat', 2.1);
  return basket;
});

export const roundingBasket2: Basket = emptyBasket.withMutations(basket => {
  basket = addQuantity(basket, 'Meat', 2.2);
  return basket;
});

// EZV baskets
// https://www.ezv.admin.ch/ezv/de/home/information-private/reisen-und-einkaufen--freimengen-und-wertfreigrenze/einfuhr-in-die-schweiz/warenwert-bis-chf-300--mehrwertsteuerfrei.html
export const ezvAmounts1: Amounts = initAmounts.withMutations(amounts => {
  amounts = addAmount(amounts, 'EUR', 100);
  amounts = addAmount(amounts, 'EUR', 100);
  amounts = addAmount(amounts, 'EUR', 100);
  return amounts;
});

export const ezvAmounts2: Amounts = initAmounts.withMutations(amounts => {
  amounts = addAmount(amounts, 'EUR', 100);
  amounts = addAmount(amounts, 'EUR', 100);
  amounts = addAmount(amounts, 'EUR', 100);
  amounts = addAmount(amounts, 'EUR', 100);
  return amounts;
});

export const ezvAmounts3: Amounts = initAmounts.withMutations(amounts => {
  amounts = addAmount(amounts, 'EUR', 100);
  amounts = addAmount(amounts, 'EUR', 100);
  amounts = addAmount(amounts, 'EUR', 100);
  amounts = addAmount(amounts, 'EUR', 100);
  amounts = addAmount(amounts, 'EUR', 100);
  amounts = addAmount(amounts, 'EUR', 100);
  return amounts;
});

export const ezvAmounts4: Amounts = initAmounts.withMutations(amounts => {
  amounts = addAmount(amounts, 'EUR', 100);
  amounts = addAmount(amounts, 'EUR', 100);
  amounts = addAmount(amounts, 'EUR', 100);
  amounts = addAmount(amounts, 'EUR', 100);
  amounts = addAmount(amounts, 'EUR', 100);
  amounts = addAmount(amounts, 'EUR', 100);
  amounts = addAmount(amounts, 'EUR', 100);
  amounts = addAmount(amounts, 'EUR', 100);
  amounts = addAmount(amounts, 'EUR', 100);
  return amounts;
});

export const ezvAmounts5: Amounts = initAmounts.withMutations(amounts => {
  amounts = addAmount(amounts, 'EUR', 400);
  amounts = addLargeAmount(amounts, 'EUR', 400);
  return amounts;
});

// https://www.ezv.admin.ch/ezv/de/home/information-private/reisen-und-einkaufen--freimengen-und-wertfreigrenze/einfuhr-in-die-schweiz/warenwert-bis-chf-300--mehrwertsteuerfrei/anwendungsbeispiele-der-wertfreigrenze-bei-mehreren-personen.html
export const ezvAmounts6: Amounts = initAmounts.withMutations(amounts => {
  amounts = addAmount(amounts, 'EUR', 320);
  amounts = addLargeAmount(amounts, 'EUR', 320);
  return amounts;
});

export const ezvAmounts7: Amounts = initAmounts.withMutations(amount => {
  amount = addAmount(amount, 'EUR', 220);
  amount = addAmount(amount, 'EUR', 220);
  return amount;
});

export const ezvAmounts8: Amounts = initAmounts.withMutations(amounts => {
  amounts = addAmount(amounts, 'EUR', 220);
  amounts = addAmount(amounts, 'EUR', 220);
  amounts = addAmount(amounts, 'EUR', 220);
  return amounts;
});

export const ezvAmounts9: Amounts = initAmounts.withMutations(amounts => {
  amounts = addAmount(amounts, 'EUR', 250);
  amounts = addAmount(amounts, 'EUR', 250);
  amounts = addAmount(amounts, 'EUR', 250);
  amounts = addAmount(amounts, 'EUR', 250);
  return amounts;
});

export const ezvAmounts10: Amounts = initAmounts.withMutations(amounts => {
  amounts = addAmount(amounts, 'EUR', 800);
  amounts = addLargeAmount(amounts, 'EUR', 800);
  return amounts;
});

export const ezvAmounts11: Amounts = initAmounts.withMutations(amounts => {
  amounts = addAmount(amounts, 'EUR', 200);
  amounts = addAmount(amounts, 'EUR', 200);
  amounts = addAmount(amounts, 'EUR', 200);
  amounts = addAmount(amounts, 'EUR', 200);
  amounts = addAmount(amounts, 'EUR', 200);
  return amounts;
});

export const ezvAmounts12: Amounts = initAmounts.withMutations(amounts => {
  amounts = addAmount(amounts, 'EUR', 200);
  amounts = addAmount(amounts, 'EUR', 200);
  amounts = addAmount(amounts, 'EUR', 500);
  amounts = addLargeAmount(amounts, 'EUR', 500);
  return amounts;
});

export const ezvAmounts13: Amounts = initAmounts.withMutations(amounts => {
  amounts = addAmount(amounts, 'EUR', 200);
  amounts = addAmount(amounts, 'EUR', 200);
  amounts = addAmount(amounts, 'EUR', 200);
  amounts = addAmount(amounts, 'EUR', 200);
  amounts = addAmount(amounts, 'EUR', 200);
  amounts = addAmount(amounts, 'EUR', 500);
  amounts = addLargeAmount(amounts, 'EUR', 500);
  return amounts;
});

export const maerkiExamples1: Amounts = initAmounts.withMutations(amounts => {
  amounts = addAmount(amounts, 'EUR', 250.15);
  amounts = addAmount(amounts, 'EUR', 45.67);
  amounts = addAmount(amounts, 'EUR', 156.21);
  amounts = addAmount(amounts, 'USD', 129.28);
  amounts = addAmount(amounts, 'USD', 87.99);
  amounts = addAmount(amounts, 'USD', 12.34);
  return amounts;
});

export const maerkiExamples2: Amounts = initAmounts.withMutations(amounts => {
  amounts = addAmount(amounts, 'EUR', 114.45);
  amounts = addAmount(amounts, 'EUR', 87.48);
  amounts = addAmount(amounts, 'EUR', 450.56);
  amounts = addAmount(amounts, 'EUR', 879.43);
  amounts = addAmount(amounts, 'EUR', 340.21);
  amounts = addLargeAmount(amounts, 'EUR', 450.56);
  amounts = addLargeAmount(amounts, 'EUR', 879.43);
  amounts = addLargeAmount(amounts, 'EUR', 340.21);
  amounts = addAmount(amounts, 'USD', 88.54);
  amounts = addAmount(amounts, 'USD', 659.77);
  amounts = addAmount(amounts, 'USD', 911.23);
  amounts = addLargeAmount(amounts, 'USD', 659.77);
  amounts = addLargeAmount(amounts, 'USD', 911.23);
  return amounts;
});

export const maerkiExamples3: Amounts = initAmounts.withMutations(amounts => {
  amounts = addAmount(amounts, 'EUR', 114.45);
  amounts = addAmount(amounts, 'EUR', 87.48);
  amounts = addAmount(amounts, 'EUR', 450.56);
  amounts = addAmount(amounts, 'EUR', 879.43);
  amounts = addAmount(amounts, 'EUR', 340.21);
  amounts = addLargeAmount(amounts, 'EUR', 450.56);
  amounts = addLargeAmount(amounts, 'EUR', 879.43);
  amounts = addLargeAmount(amounts, 'EUR', 340.21);
  amounts = addAmount(amounts, 'USD', 88.54);
  amounts = addAmount(amounts, 'USD', 659.77);
  amounts = addAmount(amounts, 'USD', 911.23);
  amounts = addLargeAmount(amounts, 'USD', 659.77);
  amounts = addLargeAmount(amounts, 'USD', 911.23);
  return amounts;
});
