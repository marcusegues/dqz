import Immutable from 'immutable';
import {
  emptyBasket,
  initAmounts,
  initPeople,
} from '../../model/configurationApi';
import {
  deserializeAmounts,
  deserializeBasket,
  deserializeMainCategories,
  deserializePeople,
  deserializeReceipts,
} from '../deserializers';
import {
  sampleAmounts1,
  sampleBasket1,
} from '../../model/__tests__/fullBasketsAndAmounts';
import { currencyExample } from '../../model/currencies';

const input = (inputValue, deserializer) =>
  deserializer(JSON.parse(JSON.stringify(inputValue))).toString();

describe('Deserialization', () => {
  test('people', () => {
    expect(input(initPeople, deserializePeople)).toBe(initPeople.toString());
  });

  test('basket', () => {
    expect(input(emptyBasket, deserializeBasket)).toBe(emptyBasket.toString());
    expect(input(sampleBasket1, deserializeBasket)).toBe(
      sampleBasket1.toString()
    );
  });

  test('amounts', () => {
    expect(input(initAmounts, deserializeAmounts)).toBe(initAmounts.toString());
    expect(input(sampleAmounts1, deserializeAmounts)).toBe(
      sampleAmounts1.toString()
    );
  });

  test('mainCategories', () => {
    const mains = Immutable.Set(['someCategory']);
    expect(input(mains, deserializeMainCategories)).toBe(mains.toString());
  });

  test('receipts in a list', () => {
    const emptyList = Immutable.List();
    expect(input(emptyList, deserializeReceipts)).toBe(emptyList.toString());

    const someFakeReceipt = {
      receiptId: 'fake',
      amounts: sampleAmounts1,
      people: initPeople,
      basket: sampleBasket1,
      currencies: currencyExample,
      paymentData: {},
    };
    const fakeList = Immutable.List([someFakeReceipt, someFakeReceipt]);
    expect(input(fakeList, deserializeReceipts)).toBe(fakeList.toString());
  });
});
