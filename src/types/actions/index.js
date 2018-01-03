// @flow

import type {
  Category,
  Basket,
  People,
  Amounts,
} from '../../model/types/basketPeopleAmountsTypes';
import type {
  MainCategory,
  MainCategories,
  CurrentQuestion,
} from '../reducers/declaration';
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
    type: 'DECLARATION_BASKET_ADD_QUANTITY',
    category: Category,
    quantity: number,
  }
  | {
    type: 'DECLARATION_SET_BASKET',
    basket: Basket,
  }
  | {
    type: 'DECLARATION_SET_AMOUNTS',
    amounts: Amounts,
  }
  | {
    type: 'DECLARATION_ADD_AMOUNT',
    currency: Currency,
    amount: number,
  }
  | {
    type: 'DECLARATION_BASKET_ADD_LARGE_AMOUNT',
    currency: Currency,
    largeAmount: number,
  }
  | {
    type: 'DECLARATION_ADULTS_CHANGE_QUANTITY',
    category: Category,
    quantityChange: number,
  }
  | {
    type: 'DECLARATION_ADULTS_SET_QUANTITY',
    category: Category,
    quantity: number,
  }
  | {
    type: 'DECLARATION_MINORS_CHANGE_QUANTITY',
    category: Category,
    quantityChange: number,
  }
  | {
    type: 'DECLARATION_MINORS_SET_QUANTITY',
    category: Category,
    quantity: number,
  }
  | {
    type: 'DECLARATION_SET_OVER_ALLOWANCE_TRUE',
  }
  | {
    type: 'DECLARATION_SET_OVER_ALLOWANCE_FALSE',
  }
  | {
    type: 'DECLARATION_SET_LARGE_AMOUNTS_TRUE',
  }
  | {
    type: 'DECLARATION_SET_LARGE_AMOUNTS_FALSE',
  }
  | {
    type: 'DECLARATION_ADD_MAIN_CATEGORY',
    mainCategory: MainCategory,
  }
  | {
    type: 'DECLARATION_REMOVE_MAIN_CATEGORY',
    mainCategory: MainCategory,
  }
  | {
    type: 'DECLARATION_SET_MAIN_CATEGORIES',
    mainCategories: MainCategories,
  }
  | {
    type: 'DECLARATION_SET_CURRENT_QUESTION',
    currentQuestion: CurrentQuestion,
  }
  | {
    type: 'DECLARATION_SET_LARGE_AMOUNT_PRESENT_NOT_ANSWERED',
  }
  | {
    type: 'DECLARATION_RESET_LARGE_AMOUNTS',
    currency: Currency,
  }
  | {
    type: 'DECLARATION_SET_PEOPLE',
    people: People,
  }
  | {
    type: 'DECLARATION_SET_AMOUNTS_ENTERED_TRUE',
  }
  | {
    type: 'DECLARATION_CALCULATE_DUES',
  }
  | {
    type: 'DECLARATION_RESET_AMOUNTS',
    currency: Currency,
  }
  | {
    type: 'DECLARATION_SET_OVER_ALLOWANCE_NOT_ANSWERED',
  }
  | {
    type: 'DECLARATION_SET_LARGE_AMOUNT_PRESENT_TRUE',
  }
  | {
    type: 'DECLARATION_SET_LARGE_AMOUNT_PRESENT_FALSE',
  };
