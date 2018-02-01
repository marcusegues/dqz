// @flow

import type {
  Category,
  Basket,
  People,
  Amounts,
} from '../../model/types/basketPeopleAmountsTypes';
import type { MainCategory, MainCategories } from '../reducers/appReducer';
import type { Currency, CurrencyObject } from '../../model/currencies';
import type { PaymentData } from '../../types/generalTypes';

export type Action =
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
      quantityChange: number,
    }
  | {
      type: 'ADULTS_SET_QUANTITY',
      quantity: number,
    }
  | {
      type: 'MINORS_CHANGE_QUANTITY',
      quantityChange: number,
    }
  | {
      type: 'MINORS_SET_QUANTITY',
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
    }
  | {
      type: 'SET_PAYMENT_DATA',
      paymentData: PaymentData,
    }
  | { type: 'SET_RECEIPT_ID', receiptId: string }
  | { type: 'SET_RECEIPT_ENTRY_TIME', receiptEntryTime: string };
