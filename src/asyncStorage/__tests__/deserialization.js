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
} from '../deserializers';

const input = (inputValue, deserializer) =>
  deserializer(JSON.parse(JSON.stringify(inputValue))).toString();

describe('Deserialization', () => {
  test('people', () => {
    expect(input(initPeople, deserializePeople)).toBe(initPeople.toString());
  });

  test('basket', () => {
    expect(input(emptyBasket, deserializeBasket)).toBe(emptyBasket.toString());
  });

  test('amounts', () => {
    expect(input(initAmounts, deserializeAmounts)).toBe(initAmounts.toString());
  });

  test('mainCategories', () => {
    const mains = Immutable.Set(['someCategory']);
    expect(input(mains, deserializeMainCategories)).toBe(mains.toString());
  });
});
