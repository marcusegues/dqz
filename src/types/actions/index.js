// @flow

import type {
  Category,
  Basket,
  People,
  Amounts,
} from '../../model/types/basketPeopleAmountsTypes';
import type { MainCategory, MainCategories } from '../reducers/declaration';
import type { Currency, CurrencyObject } from '../../model/currencies';

export type Action =
  // declaration
  | {
    type: 'UPDATE_CURRENCIES',
    currencyObject: CurrencyObject,
    validCurrencies: boolean,
    currencyDate: Date,
  }
  | {
    type: 'BASKET_ADD_QUANTITY',
    category: Category,
    quantity: number,
  }
  | {
    type: 'SET_BASKET',
    basket: Basket,
  }
  | {
    type: 'ADD_AMOUNT',
    currency: Currency,
    amount: number,
  }
  | {
  type: 'SET_AMOUNTS',
  amounts: Amounts,
}
  | {
    type: 'ADD_LARGE_AMOUNT',
    currency: Currency,
    largeAmount: number,
  }
  | {
    type: 'ADULTS_CHANGE_QUANTITY',
    category: Category,
    quantityChange: number,
  }
  | {
    type: 'ADULTS_SET_QUANTITY',
    category: Category,
    quantity: number,
  }
  | {
    type: 'MINORS_CHANGE_QUANTITY',
    category: Category,
    quantityChange: number,
  }
  | {
    type: 'MINORS_SET_QUANTITY',
    category: Category,
    quantity: number,
  }
  | {
    type: 'ADD_MAIN_CATEGORY',
    mainCategory: MainCategory,
  }
  | {
    type: 'REMOVE_MAIN_CATEGORY',
    mainCategory: MainCategory,
  }
  | {
    type: 'SET_MAIN_CATEGORIES',
    mainCategories: MainCategories,
  }
  | {
    type: 'RESET_LARGE_AMOUNTS',
    currency: Currency,
  }
  | {
    type: 'SET_PEOPLE',
    people: People,
  }
  | {
    type: 'SET_AMOUNTS_ENTERED_TRUE',
  }
  | {
    type: 'RESET_AMOUNTS',
    currency: Currency,
  };
