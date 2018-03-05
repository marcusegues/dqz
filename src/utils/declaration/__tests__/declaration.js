import { DateTime } from 'luxon';
import { isInitBasket } from '../declaration';
import {
  addAdult,
  addAmount,
  addLargeAmount,
  addMinor,
  addQuantity,
  emptyBasket,
  initAmounts,
  initPeople,
} from '../../../model/configurationApi';

import {
  emptyMainCategories,
  emptyReceiptEntryTime,
} from '../../../types/reducers/declaration';

const twoAdults = addAdult(initPeople);
const oneAdultOneMinor = addMinor(initPeople);

const basketWithMeat = addQuantity(emptyBasket, 'Meat', 1);

const amountsWithNormalAmount = addAmount(initAmounts, 'CHF', 5000);

const amountsWithLargeAmount = addLargeAmount(initAmounts, 'CHF', 500);

const nonEmptyReceiptEntryTime = DateTime.local(2018, 1, 1, 8, 30).toString();

describe('isInitBasket', () => {
  test('init values of declaration returns true', () => {
    expect(
      isInitBasket(
        initPeople,
        emptyBasket,
        emptyMainCategories,
        initAmounts,
        emptyReceiptEntryTime
      )
    ).toBe(true);
  });

  test('adding an adult to init values returns false', () => {
    expect(
      isInitBasket(
        twoAdults,
        emptyBasket,
        emptyMainCategories,
        initAmounts,
        emptyReceiptEntryTime
      )
    ).toBe(false);
  });
  test('adding minor to init values returns false', () => {
    expect(
      isInitBasket(
        oneAdultOneMinor,
        emptyBasket,
        emptyMainCategories,
        initAmounts,
        emptyReceiptEntryTime
      )
    ).toBe(false);
  });
  test('adding a quantity returns false', () => {
    expect(
      isInitBasket(
        initPeople,
        basketWithMeat,
        emptyMainCategories,
        initAmounts,
        emptyReceiptEntryTime
      )
    ).toBe(false);
  });
  test('adding normal amount returns false', () => {
    expect(
      isInitBasket(
        initPeople,
        emptyBasket,
        emptyMainCategories,
        amountsWithNormalAmount,
        emptyReceiptEntryTime
      )
    ).toBe(false);
  });
  test('adding large amount returns false', () => {
    expect(
      isInitBasket(
        initPeople,
        emptyBasket,
        emptyMainCategories,
        amountsWithLargeAmount,
        emptyReceiptEntryTime
      )
    ).toBe(false);
  });
  test('adding a non empty string to receiptEntryTime returns false', () => {
    expect(
      isInitBasket(
        initPeople,
        emptyBasket,
        emptyMainCategories,
        amountsWithLargeAmount,
        nonEmptyReceiptEntryTime
      )
    ).toBe(false);
  });
});
