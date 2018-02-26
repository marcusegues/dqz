// @flow
import Immutable from 'immutable';
import { getInitialDeclarationState } from '../../types/reducers/declaration';
import type { DeclarationState } from '../../types/reducers/declaration';
import {
  declaration,
  getBasket,
  getMainCategories,
  getPeople,
  getSettings,
  getAmounts,
} from '../declaration';
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

jest.mock('luxon', () => ({
  DateTime: {
    local: () => ({
      setZone: () => 'FakeDate',
    }),
  },
}));

const initDeclarationState: DeclarationState = getInitialDeclarationState();

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

describe('Invalid DeclarationAction...', () => {
  test('...just returns state', () => {
    // $FlowFixMe - deliberately passing a bad action
    expect(declaration(initDeclarationState, { type: 'foo' })).toBe(
      initDeclarationState
    );
  });
});

describe('Basket...', () => {
  test('BASKET_ADD_QUANTITY', () => {
    expect(
      declaration(initDeclarationState, {
        type: 'BASKET_ADD_QUANTITY',
        category: 'Meat',
        quantity: 123,
        date: '2018-02-21T17:41:40.394+01:00',
      })
    ).toMatchSnapshot();
  });

  test('SET_BASKET', () => {
    expect(
      declaration(initDeclarationState, {
        type: 'SET_BASKET',
        basket: sampleBasket1,
      })
    ).toMatchSnapshot();
  });
});

describe('People...', () => {
  test('ADULTS_CHANGE_QUANTITY', () => {
    expect(
      declaration(initDeclarationState, {
        type: 'ADULTS_CHANGE_QUANTITY',
        quantityChange: 55,
      })
    ).toMatchSnapshot();
  });
  test('MINORS_CHANGE_QUANTITY', () => {
    expect(
      declaration(initDeclarationState, {
        type: 'MINORS_CHANGE_QUANTITY',
        quantityChange: 123,
      })
    ).toMatchSnapshot();
  });
  test('ADULTS_SET_QUANTITY', () => {
    expect(
      declaration(initDeclarationState, {
        type: 'ADULTS_SET_QUANTITY',
        quantity: 55,
      })
    ).toMatchSnapshot();
  });
  test('MINORS_SET_QUANTITY', () => {
    expect(
      declaration(initDeclarationState, {
        type: 'MINORS_SET_QUANTITY',
        quantity: 123,
      })
    ).toMatchSnapshot();
  });
  test('SET_PEOPLE', () => {
    expect(
      declaration(initDeclarationState, {
        type: 'SET_PEOPLE',
        people: addAdult(addMinor(initPeople)),
      })
    ).toMatchSnapshot();
  });
});

describe('Amounts...', () => {
  test('SET_AMOUNTS', () => {
    expect(
      declaration(initDeclarationState, {
        type: 'SET_AMOUNTS',
        amounts: addAmount(initAmounts, 'EUR', 123),
      })
    ).toMatchSnapshot();
  });
  test('ADD_AMOUNT', () => {
    expect(
      declaration(initDeclarationState, {
        type: 'ADD_AMOUNT',
        currency: 'EUR',
        amount: 123456,
      })
    ).toMatchSnapshot();
  });
  test('ADD_LARGE_AMOUNT', () => {
    expect(
      declaration(initDeclarationState, {
        type: 'ADD_LARGE_AMOUNT',
        currency: 'EUR',
        largeAmount: 123456,
      })
    ).toMatchSnapshot();
  });
  test('RESET_AMOUNTS', () => {
    expect(
      declaration(initDeclarationState.set('amounts', sampleAmounts1), {
        type: 'RESET_AMOUNTS',
        currency: 'EUR',
      })
    ).toMatchSnapshot();
  });
  test('RESET_LARGE_AMOUNTS', () => {
    expect(
      declaration(initDeclarationState.set('amounts', sampleAmounts1), {
        type: 'RESET_LARGE_AMOUNTS',
        currency: 'EUR',
      })
    ).toMatchSnapshot();
  });
});

describe('Main Categories...', () => {
  test('ADD_MAIN_CATEGORY', () => {
    expect(
      declaration(initDeclarationState, {
        type: 'ADD_MAIN_CATEGORY',
        mainCategory: 'Meat',
      })
    ).toMatchSnapshot();
  });
  test('REMOVE_MAIN_CATEGORY', () => {
    expect(
      declaration(initDeclarationState, {
        type: 'REMOVE_MAIN_CATEGORY',
        mainCategory: 'Meat',
      })
    ).toMatchSnapshot();
  });
  test('ADD and REMOVE_MAIN_CATEGORY', () => {
    expect(
      declaration(
        declaration(initDeclarationState, {
          type: 'ADD_MAIN_CATEGORY',
          mainCategory: 'Meat',
        }),
        {
          type: 'REMOVE_MAIN_CATEGORY',
          mainCategory: 'Meat',
        }
      )
    ).toMatchSnapshot();
  });
  test('SET_MAIN_CATEGORIES', () => {
    expect(
      declaration(initDeclarationState, {
        type: 'SET_MAIN_CATEGORIES',
        mainCategories: Immutable.Set(['Meat', 'Alcohol']),
      })
    ).toMatchSnapshot();
  });
});

describe('API', () => {
  test('getBasket', () => {
    expect(getBasket(initDeclarationState)).toBe(
      initDeclarationState.get('basket')
    );
  });
  test('getPeople', () => {
    expect(getPeople(initDeclarationState)).toBe(
      initDeclarationState.get('people')
    );
  });
  test('getAmounts', () => {
    expect(getAmounts(initDeclarationState)).toBe(
      initDeclarationState.get('amounts')
    );
  });
  test('getMainCategories', () => {
    expect(getMainCategories(initDeclarationState)).toBe(
      initDeclarationState.getIn(['settings', 'mainCategories'])
    );
  });
  test('getSettings', () => {
    expect(getSettings(initDeclarationState)).toBe(
      initDeclarationState.get('settings')
    );
  });
});
