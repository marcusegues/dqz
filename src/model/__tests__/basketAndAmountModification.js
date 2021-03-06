// @flow
import Immutable from 'immutable';
import type { Amounts, Basket } from '../types/basketPeopleAmountsTypes';
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
  initAmounts,
  resetQuantities,
  resetQuantitiesMultipleCategories,
  deleteAmount,
  updateQuantity,
  updateAmount,
} from '../configurationApi';
import { categoriesArray } from '../constants';
import { currenciesArray } from '../currencies';

jest.mock('luxon', () => ({
  DateTime: {
    local: () => 'FakeDate',
  },
}));

const basket1: Basket = emptyBasket;

const quantityBasket1: Basket = addQuantity(basket1, 'Butter', 1234);
const quantityBasket2: Basket = addQuantities(basket1, [
  { category: 'Meat', quantity: 123 },
  { category: 'Butter', quantity: 321 },
]);
const quantityBasket3: Basket = basket1;
const quantityBasket4: Basket = addQuantities(basket1, [
  { category: 'Meat', quantity: 333 },
  { category: 'Butter', quantity: 444 },
]);

const amounts1: Amounts = addAmount(initAmounts, 'EUR', 12.34);
const amounts2: Amounts = addAmount(amounts1, 'EUR', 34.56);
const amounts3: Amounts = addAmount(amounts2, 'USD', 77.11);

const largeAmounts1: Amounts = addLargeAmount(amounts1, 'EUR', 1234);
const largeAmounts2: Amounts = addLargeAmount(largeAmounts1, 'EUR', 1234);

const largeAmounts3: Amounts = addLargeAmount(initAmounts, 'EUR', 1234);
const largeAmounts4: Amounts = addLargeAmount(largeAmounts3, 'EUR', 1234);

const amountsAndLargeAmounts1: Amounts = addLargeAmount(amounts3, 'EUR', 444);
const amountsAndLargeAmounts2: Amounts = addLargeAmount(
  amountsAndLargeAmounts1,
  'EUR',
  333
);

const twoAdultsNoMinor = addAdult(initPeople);
const noAdultsNoMinor = subtractAdult(initPeople);
const oneAdultOneMinor = addMinor(initPeople);

const resetter: Basket = emptyBasket.withMutations(basket => {
  basket = addQuantity(basket, 'Butter', 23);
  basket = addQuantity(basket, 'Butter', 23);
  basket = addQuantity(basket, 'Butter', 23);
  basket = addQuantity(basket, 'Meat', 111);
  basket = addQuantity(basket, 'Meat', 111);
  basket = addQuantity(basket, 'Meat', 111);
  basket = addQuantity(basket, 'Tobacco', 3219);
  basket = addQuantity(basket, 'Tobacco', 3219);
  basket = addQuantity(basket, 'Tobacco', 3219);

  return basket;
});

describe('The basket / quantites: ', () => {
  test('defaults to 0 quantity', () => {
    categoriesArray.forEach(c =>
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
    categoriesArray.forEach(c =>
      expect(getTotalQuantity(quantityBasket3, c)).toBe(0)
    );
  });
  test('can add multiple quantities in one category', () => {
    const b1 = addQuantity(emptyBasket, 'Meat', 123);
    const b2 = addQuantity(b1, 'Meat', 123);
    const b3 = addQuantity(b2, 'Meat', 123);
    expect(getTotalQuantity(b3, 'Meat')).toBe(369);
    expect(getQuantities(b3, 'Meat').size).toBe(3);
  });

  test('can update quantities in one category', () => {
    const b2 = addQuantity(quantityBasket4, 'Meat', 123);
    const b3 = addQuantity(b2, 'Meat', 444);
    const resultBasket = updateQuantity(b3, 'Meat', 1, 777);
    expect(getTotalQuantity(resultBasket, 'Meat')).toBe(1554);
    expect(getQuantities(resultBasket, 'Meat').size).toBe(3);
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

  test('can reset the quantites of a category', () => {
    expect(resetQuantities(resetter, 'Meat')).toMatchSnapshot();
  });

  test('can reset the quantites of multiple categorie', () => {
    expect(
      resetQuantitiesMultipleCategories(resetter, ['Meat', 'Butter'])
    ).toMatchSnapshot();
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

describe('The Amounts: ', () => {
  test('defaults to empty set of amounts', () => {
    currenciesArray.forEach(c =>
      expect(getAmounts(initAmounts, c)).toBe(Immutable.List())
    );
  });
  test('adds amounts: ', () => {
    expect(
      getAmounts(amounts1, 'EUR')
        .map(a => a.amount)
        .toString()
    ).toBe(Immutable.List([12.34]).toString());
  });
  test('adds another amount: ', () => {
    expect(
      getAmounts(amounts2, 'EUR')
        .map(a => a.amount)
        .toString()
    ).toBe(Immutable.List([12.34, 34.56]).toString());
  });

  test('update amounts', () => {
    const testAmount1 = 99.22;
    const testAmount2 = 11.11;
    const amounts = getAmounts(amountsAndLargeAmounts2, 'EUR');
    // $FlowFixMe
    const amountId1 = amounts.get(0).id;
    // $FlowFixMe
    const amountId2 = amounts.get(1).id;
    const amountsResult1 = updateAmount(
      amountsAndLargeAmounts2,
      amountId1,
      'EUR',
      testAmount1
    );
    const amountsResult2 = updateAmount(
      amountsAndLargeAmounts2,
      amountId2,
      'USD',
      testAmount2
    );
    // $FlowFixMe
    expect(getAmounts(amountsResult1, 'EUR').get(0).amount).toBe(testAmount1);
    expect(getAmounts(amountsResult1, 'EUR').size).toBe(2);
    expect(getAmounts(amountsResult1, 'USD').size).toBe(1);
    // $FlowFixMe
    expect(getAmounts(amountsResult2, 'USD').get(1).amount).toBe(testAmount2);
    expect(getAmounts(amountsResult2, 'EUR').size).toBe(1);
    expect(getAmounts(amountsResult2, 'USD').size).toBe(2);
  });

  test('leaves other amounts untouched: ', () => {
    expect(getAmounts(amounts1, 'USD')).toBe(Immutable.List());
  });
  test('resets amounts: ', () => {
    const resetted: Amounts = resetAmounts(amounts1, 'EUR');
    expect(getAmounts(resetted, 'EUR')).toBe(Immutable.List());
  });
  test('deletes a single amount (or not, if id fake): ', () => {
    let i = 0;
    const amounts = amounts2.withMutations(a => {
      a.updateIn(['EUR', 'amounts'], list =>
        // eslint-disable-next-line no-plusplus
        list.map(aa => Object.assign(aa, { id: `${i++}` }))
      );
      return a;
    });
    expect(amounts).toMatchSnapshot();
    expect(deleteAmount(amounts, '0')).toMatchSnapshot();
    expect(deleteAmount(amounts, '1')).toMatchSnapshot();
    expect(deleteAmount(amounts, '123')).toMatchSnapshot();
  });
});

describe('The large amounts: ', () => {
  test('defaults to empty set of amounts', () => {
    currenciesArray.forEach(c =>
      expect(getLargeAmounts(initAmounts, c)).toBe(Immutable.List())
    );
  });
  test('adds large amounts: ', () => {
    expect(
      getLargeAmounts(largeAmounts1, 'EUR')
        .map(a => a.amount)
        .toString()
    ).toBe(Immutable.List([1234]).toString());
  });
  test('adds another large amount: ', () => {
    expect(
      getLargeAmounts(largeAmounts2, 'EUR')
        .map(a => a.amount)
        .toString()
    ).toBe(Immutable.List([1234, 1234]).toString());
  });

  test('update large amounts', () => {
    const testLargeAmount1 = 353.36;
    const testLargeAmount2 = 965.58;
    const largeAmounts = getLargeAmounts(amountsAndLargeAmounts2, 'EUR');
    // $FlowFixMe
    const amountId1 = largeAmounts.get(0).id;
    // $FlowFixMe
    const amountId2 = largeAmounts.get(1).id;
    const largeAmountsResult1 = updateAmount(
      amountsAndLargeAmounts2,
      amountId1,
      'EUR',
      testLargeAmount1
    );
    const largeAmountsResult2 = updateAmount(
      amountsAndLargeAmounts2,
      amountId2,
      'USD',
      testLargeAmount2
    );
    // $FlowFixMe
    expect(getLargeAmounts(largeAmountsResult1, 'EUR').get(0).amount).toBe(
      testLargeAmount1
    );
    expect(getLargeAmounts(largeAmountsResult1, 'EUR').size).toBe(2);
    expect(getLargeAmounts(largeAmountsResult1, 'USD').size).toBe(0);
    // $FlowFixMe
    expect(getLargeAmounts(largeAmountsResult2, 'USD').get(0).amount).toBe(
      testLargeAmount2
    );
    expect(getLargeAmounts(largeAmountsResult2, 'EUR').size).toBe(1);
    expect(getLargeAmounts(largeAmountsResult2, 'USD').size).toBe(1);
  });

  test('leaves other large amounts untouched: ', () => {
    expect(getLargeAmounts(amounts1, 'USD')).toBe(Immutable.List());
  });
  test('resets large amounts: ', () => {
    const resetted: Amounts = resetLargeAmounts(amounts1, 'EUR');
    expect(getLargeAmounts(resetted, 'EUR')).toBe(Immutable.List());
  });
  test('deletes a single large amount (or not, if id fake): ', () => {
    let i = 0;
    const amounts = largeAmounts4.withMutations(a => {
      a.updateIn(['EUR', 'largeAmounts'], list =>
        // eslint-disable-next-line no-plusplus
        list.map(aa => Object.assign(aa, { id: `${i++}` }))
      );
      return a;
    });
    expect(amounts).toMatchSnapshot();
    expect(deleteAmount(amounts, '0')).toMatchSnapshot();
    expect(deleteAmount(amounts, '1')).toMatchSnapshot();
    expect(deleteAmount(amounts, '123')).toMatchSnapshot();
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
