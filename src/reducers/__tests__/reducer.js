// @flow
/* global describe, test, expect */
import Immutable from 'immutable';
import { getInitialState } from '../../types/reducers/declaration';
import type { State } from '../../types/reducers/declaration';
import declaration, {
  getBasket,
  getCurrenciesObject,
  getCurrencyDate,
  getCurrencyState,
  getMainCategories,
  getPeople,
  getSettings,
  getAmounts,
} from '../declaration';
import { currencyExample } from '../../model/currencies';
import {
  addAdult,
  addMinor,
  addQuantity,
  emptyBasket,
  initPeople,
} from '../../model/configurationApi';
import type { Basket } from '../../model/types/basketPeopleAmountsTypes';

const initState: State = getInitialState();

const sampleBasket1: Basket = emptyBasket.withMutations(basket => {
  basket = addQuantity(basket, 'Butter', 23);
  basket = addQuantity(basket, 'Meat', 111);
  basket = addQuantity(basket, 'Tobacco', 3219);

  return basket;
});

describe('Invalid Action...', () => {
  test('...just returns state', () => {
    // $FlowFixMe - deliberately passing a bad action
    expect(declaration(initState, { type: 'foo' })).toBe(initState);
  });
});

describe('Currencies...', () => {
  test('UPDATE_CURRENCIES', () => {
    expect(
      declaration(initState, {
        type: 'UPDATE_CURRENCIES',
        currencyObject: currencyExample,
        validCurrencies: true,
        currencyDate: new Date('2000/01/01'),
      })
    ).toMatchSnapshot();
  });
});

describe('Basket...', () => {
  test('BASKET_ADD_QUANTITY', () => {
    expect(
      declaration(initState, {
        type: 'BASKET_ADD_QUANTITY',
        category: 'Meat',
        quantity: 123,
      })
    ).toMatchSnapshot();
  });

  test('SET_BASKET', () => {
    expect(
      declaration(initState, {
        type: 'SET_BASKET',
        basket: sampleBasket1,
      })
    ).toMatchSnapshot();
  });
});

describe('People...', () => {
  test('ADULTS_CHANGE_QUANTITY', () => {
    expect(
      declaration(initState, {
        type: 'ADULTS_CHANGE_QUANTITY',
        quantityChange: 55,
      })
    ).toMatchSnapshot();
  });
  test('MINORS_CHANGE_QUANTITY', () => {
    expect(
      declaration(initState, {
        type: 'MINORS_CHANGE_QUANTITY',
        quantityChange: 123,
      })
    ).toMatchSnapshot();
  });
  test('ADULTS_SET_QUANTITY', () => {
    expect(
      declaration(initState, {
        type: 'ADULTS_SET_QUANTITY',
        quantity: 55,
      })
    ).toMatchSnapshot();
  });
  test('MINORS_SET_QUANTITY', () => {
    expect(
      declaration(initState, {
        type: 'MINORS_SET_QUANTITY',
        quantity: 123,
      })
    ).toMatchSnapshot();
  });
  test('SET_PEOPLE', () => {
    expect(
      declaration(initState, {
        type: 'SET_PEOPLE',
        people: addAdult(addMinor(initPeople)),
      })
    ).toMatchSnapshot();
  });
});

/* TODO once DAZIT-127 is merged
describe('Amounts...', () => {
  test('ADD_AMOUNT', () => {
    expect(
      declaration(initState, {
        type: 'ADD_AMOUNT',
        currency: 'EUR',
        amount: 123456,
      })
    ).toMatchSnapshot();
  });
});
*/

describe('Main Categories...', () => {
  test('ADD_MAIN_CATEGORY', () => {
    expect(
      declaration(initState, {
        type: 'ADD_MAIN_CATEGORY',
        mainCategory: 'Foods',
      })
    ).toMatchSnapshot();
  });
  test('REMOVE_MAIN_CATEGORY', () => {
    expect(
      declaration(initState, {
        type: 'REMOVE_MAIN_CATEGORY',
        mainCategory: 'Foods',
      })
    ).toMatchSnapshot();
  });
  test('ADD and REMOVE_MAIN_CATEGORY', () => {
    expect(
      declaration(
        declaration(initState, {
          type: 'ADD_MAIN_CATEGORY',
          mainCategory: 'Foods',
        }),
        {
          type: 'REMOVE_MAIN_CATEGORY',
          mainCategory: 'Foods',
        }
      )
    ).toMatchSnapshot();
  });
  test('SET_MAIN_CATEGORIES', () => {
    expect(
      declaration(initState, {
        type: 'SET_MAIN_CATEGORIES',
        mainCategories: Immutable.Set(['Foods', 'Alcohol']),
      })
    ).toMatchSnapshot();
  });
});

describe('API', () => {
  test('getBasket', () => {
    expect(getBasket(initState)).toBe(initState.get('basket'));
  });
  test('getPeople', () => {
    expect(getPeople(initState)).toBe(initState.get('people'));
  });
  test('getAmounts', () => {
    expect(getAmounts(initState)).toBe(initState.get('amounts'));
  });
  test('getMainCategories', () => {
    expect(getMainCategories(initState)).toBe(
      initState.getIn(['settings', 'mainCategories'])
    );
  });
  test('getSettings', () => {
    expect(getSettings(initState)).toBe(initState.get('settings'));
  });
  test('getCurrenciesObject', () => {
    expect(getCurrenciesObject(initState)).toBe(
      initState.get('currencyObject')
    );
  });
  test('getCurrencyState', () => {
    expect(getCurrencyState(initState)).toBe(initState.get('validCurrencies'));
  });
  test('getCurrencyDate', () => {
    expect(getCurrencyDate(initState)).toBe(initState.get('currencyDate'));
  });
});
