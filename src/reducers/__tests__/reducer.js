// @flow
import Immutable from 'immutable';
import { getInitialState } from '../../types/reducers/appReducer';
import type { State } from '../../types/reducers/appReducer';
import {
  appState,
  getBasket,
  getCurrenciesObject,
  getCurrencyDate,
  getCurrencyState,
  getMainCategories,
  getPeople,
  getSettings,
  getAmounts,
} from '../appReducer';
import { currencyExample } from '../../model/currencies';
import {
  addAdult,
  addAmount,
  addLargeAmount,
  addMinor,
  addQuantity,
  emptyBasket,
  initAmounts,
  initPeople,
} from '../../model/configurationApi';
import type {
  Amounts,
  Basket,
} from '../../model/types/basketPeopleAmountsTypes';

jest.mock('uuid', () => ({
  v4: jest.fn(() => 1),
}));

const initState: State = getInitialState();

const sampleBasket1: Basket = emptyBasket.withMutations(basket => {
  basket = addQuantity(basket, 'Butter', 23);
  basket = addQuantity(basket, 'Meat', 111);
  basket = addQuantity(basket, 'Tobacco', 3219);

  return basket;
});

const sampleAmounts1: Amounts = initAmounts.withMutations(amounts => {
  amounts = addAmount(amounts, 'EUR', 12.34);
  amounts = addAmount(amounts, 'EUR', 125);
  amounts = addLargeAmount(amounts, 'EUR', 525);

  amounts = addAmount(amounts, 'USD', 12);
  amounts = addAmount(amounts, 'USD', 31);

  amounts = addAmount(amounts, 'CHF', 11);
  amounts = addAmount(amounts, 'CHF', 33);
  amounts = addLargeAmount(amounts, 'CHF', 5555);

  return amounts;
});

describe('Invalid Action...', () => {
  test('...just returns state', () => {
    // $FlowFixMe - deliberately passing a bad action
    expect(appState(initState, { type: 'foo' })).toBe(initState);
  });
});

describe('Currencies...', () => {
  test('UPDATE_CURRENCIES', () => {
    expect(
      appState(initState, {
        type: 'UPDATE_CURRENCIES',
        currencyObject: currencyExample,
        validCurrencies: true,
        currencyDate: new Date('2000/01/01'),
        // $FlowFixMe - overriding the date
      }).set('currencyDate', '')
    ).toMatchSnapshot();
  });
});

describe('Basket...', () => {
  test('BASKET_ADD_QUANTITY', () => {
    expect(
      appState(initState, {
        type: 'BASKET_ADD_QUANTITY',
        category: 'Meat',
        quantity: 123,
      })
    ).toMatchSnapshot();
  });

  test('SET_BASKET', () => {
    expect(
      appState(initState, {
        type: 'SET_BASKET',
        basket: sampleBasket1,
      })
    ).toMatchSnapshot();
  });
});

describe('People...', () => {
  test('ADULTS_CHANGE_QUANTITY', () => {
    expect(
      appState(initState, {
        type: 'ADULTS_CHANGE_QUANTITY',
        quantityChange: 55,
      })
    ).toMatchSnapshot();
  });
  test('MINORS_CHANGE_QUANTITY', () => {
    expect(
      appState(initState, {
        type: 'MINORS_CHANGE_QUANTITY',
        quantityChange: 123,
      })
    ).toMatchSnapshot();
  });
  test('ADULTS_SET_QUANTITY', () => {
    expect(
      appState(initState, {
        type: 'ADULTS_SET_QUANTITY',
        quantity: 55,
      })
    ).toMatchSnapshot();
  });
  test('MINORS_SET_QUANTITY', () => {
    expect(
      appState(initState, {
        type: 'MINORS_SET_QUANTITY',
        quantity: 123,
      })
    ).toMatchSnapshot();
  });
  test('SET_PEOPLE', () => {
    expect(
      appState(initState, {
        type: 'SET_PEOPLE',
        people: addAdult(addMinor(initPeople)),
      })
    ).toMatchSnapshot();
  });
});

describe('Amounts...', () => {
  test('SET_AMOUNTS', () => {
    expect(
      appState(initState, {
        type: 'SET_AMOUNTS',
        amounts: addAmount(initAmounts, 'EUR', 123),
      })
    ).toMatchSnapshot();
  });
  test('ADD_AMOUNT', () => {
    expect(
      appState(initState, {
        type: 'ADD_AMOUNT',
        currency: 'EUR',
        amount: 123456,
      })
    ).toMatchSnapshot();
  });
  test('ADD_LARGE_AMOUNT', () => {
    expect(
      appState(initState, {
        type: 'ADD_LARGE_AMOUNT',
        currency: 'EUR',
        largeAmount: 123456,
      })
    ).toMatchSnapshot();
  });
  test('RESET_AMOUNTS', () => {
    expect(
      appState(initState.set('amounts', sampleAmounts1), {
        type: 'RESET_AMOUNTS',
        currency: 'EUR',
      })
    ).toMatchSnapshot();
  });
  test('RESET_LARGE_AMOUNTS', () => {
    expect(
      appState(initState.set('amounts', sampleAmounts1), {
        type: 'RESET_LARGE_AMOUNTS',
        currency: 'EUR',
      })
    ).toMatchSnapshot();
  });
});

describe('Main Categories...', () => {
  test('ADD_MAIN_CATEGORY', () => {
    expect(
      appState(initState, {
        type: 'ADD_MAIN_CATEGORY',
        mainCategory: 'Foods',
      })
    ).toMatchSnapshot();
  });
  test('REMOVE_MAIN_CATEGORY', () => {
    expect(
      appState(initState, {
        type: 'REMOVE_MAIN_CATEGORY',
        mainCategory: 'Foods',
      })
    ).toMatchSnapshot();
  });
  test('ADD and REMOVE_MAIN_CATEGORY', () => {
    expect(
      appState(
        appState(initState, {
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
      appState(initState, {
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
