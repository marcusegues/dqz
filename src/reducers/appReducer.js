/* eslint-disable prefer-destructuring */
// @flow
import Immutable from 'immutable';
import {
  getInitialState,
  mainCategories,
  EmptyMainCategories,
} from '../types/reducers/appReducer';
import type {
  State,
  MainCategory,
  MainCategories,
  Settings,
} from '../types/reducers/appReducer';
import type { Action } from '../types/actions';
import type {
  Amounts,
  Basket,
  Category,
  People,
} from '../model/types/basketPeopleAmountsTypes';
import * as modelApi from '../model/configurationApi';
import type { Currency, CurrencyObject } from '../model/currencies';
import type { PaymentData } from '../types/generalTypes';

export const appState = (
  state: State = getInitialState(),
  action: Action
): State => {
  switch (action.type) {
    case 'UPDATE_CURRENCIES': {
      const currencyObject: CurrencyObject = action.currencyObject;
      const validCurrencies: boolean = action.validCurrencies;
      const currencyDate: Date = action.currencyDate;

      const s1 = state.set('currencyObject', currencyObject);
      const s2 = s1.set('currencyDate', currencyDate);
      return s2.set('validCurrencies', validCurrencies);
    }

    case 'BASKET_ADD_QUANTITY': {
      const category: Category = action.category;
      const date: string = action.date;
      const basket: Basket = state.get('basket');
      return state.setIn(
        ['basket'],
        modelApi.addQuantity(
          basket,
          category,
          action.quantity,
          date.length > 0 ? date : undefined
        )
      );
    }
    case 'SET_BASKET': {
      const basket: Basket = action.basket;
      return state.set('basket', basket);
    }

    case 'ADULTS_CHANGE_QUANTITY': {
      const people: People = state.get('people');
      const adults: number = people.get('adults');
      const quantity: number = adults + action.quantityChange;
      return state.set('people', modelApi.setAdultPeople(people, quantity));
    }
    case 'MINORS_CHANGE_QUANTITY': {
      const people: People = state.get('people');
      const minors: number = people.get('minors');
      const quantity: number = minors + action.quantityChange;
      return state.set('people', modelApi.setMinorPeople(people, quantity));
    }
    case 'ADULTS_SET_QUANTITY': {
      const people: People = state.get('people');
      const quantity: number = action.quantity;
      return state.set('people', modelApi.setAdultPeople(people, quantity));
    }
    case 'MINORS_SET_QUANTITY': {
      const people: People = state.get('people');
      const quantity: number = action.quantity;
      return state.set('people', modelApi.setMinorPeople(people, quantity));
    }
    case 'SET_PEOPLE': {
      return state.set('people', action.people);
    }

    case 'SET_AMOUNTS': {
      const amounts: Amounts = action.amounts;
      return state.set('amounts', amounts);
    }
    case 'ADD_AMOUNT': {
      const currency: Currency = action.currency;
      const amounts: Amounts = state.get('amounts');
      const amount: number = action.amount;
      return state.set(
        'amounts',
        modelApi.addAmount(amounts, currency, amount)
      );
    }
    case 'ADD_LARGE_AMOUNT': {
      const currency: Currency = action.currency;
      const largeAmount: number = action.largeAmount;
      const amounts: Amounts = state.get('amounts');
      return state.set(
        'amounts',
        modelApi.addLargeAmount(amounts, currency, largeAmount)
      );
    }
    case 'RESET_LARGE_AMOUNTS': {
      const amounts: Amounts = state.get('amounts');
      const currency: Currency = action.currency;
      return state.set(
        'amounts',
        modelApi.resetLargeAmounts(amounts, currency)
      );
    }
    case 'RESET_AMOUNTS': {
      const amounts: Amounts = state.get('amounts');
      const currency: Currency = action.currency;
      return state.set('amounts', modelApi.resetAmounts(amounts, currency));
    }

    case 'RESET_DECLARATION': {
      const peopleReset = state.set('people', modelApi.initPeople);
      const basketReset = peopleReset.set('basket', modelApi.emptyBasket);
      const mainCategoriesReset = basketReset.setIn(
        ['settings', 'mainCategories'],
        Immutable.Set()
      );
      return mainCategoriesReset.set('amounts', modelApi.initAmounts);
    }

    case 'ADD_MAIN_CATEGORY': {
      const mainCategory: MainCategory = action.mainCategory;
      const mainCategoriesAnswer = state.getIn(
        ['settings', 'mainCategories'],
        EmptyMainCategories
      );
      return state.setIn(
        ['settings', 'mainCategories'],
        mainCategoriesAnswer.add(mainCategory)
      );
    }
    case 'REMOVE_MAIN_CATEGORY': {
      const mainCategory: MainCategory = action.mainCategory;
      const mainCategoriesAnswer = state.getIn(
        ['settings', 'mainCategories'],
        EmptyMainCategories
      );
      return state.setIn(
        ['settings', 'mainCategories'],
        mainCategoriesAnswer.delete(mainCategory)
      );
    }
    case 'SET_MAIN_CATEGORIES': {
      const mainCategoriesAnswer: MainCategories = action.mainCategories;
      return state.setIn(['settings', 'mainCategories'], mainCategoriesAnswer);
    }

    case 'SET_PAYMENT_DATA': {
      const paymentData: PaymentData = action.paymentData;
      return state.set('paymentData', paymentData);
    }

    case 'SET_RECEIPT_ID': {
      const receiptId: string = action.receiptId;
      return state.set('receiptId', receiptId);
    }

    case 'SET_RECEIPT_ENTRY_TIME': {
      const receiptEntryTime: string = action.receiptEntryTime;
      return state.set('receiptEntryTime', receiptEntryTime);
    }

    default: {
      return state;
    }
  }
};

export const getBasket = (state: State): Basket => state.get('basket');

export const getPeople = (state: State): People => state.get('people');

export const getAmounts = (state: State): Amounts => state.get('amounts');

export const getMainCategories = (state: State): MainCategories =>
  state.getIn(['settings', 'mainCategories'], mainCategories);

export const getSettings = (state: State): Settings => state.get('settings');

export const getCurrenciesObject = (state: State): CurrencyObject =>
  state.get('currencyObject');

export const getCurrencyState = (state: State): boolean =>
  state.get('validCurrencies');

export const getCurrencyDate = (state: State): Date =>
  state.get('currencyDate');

export const getPaymentData = (state: State): PaymentData =>
  state.get('paymentData');

export const getReceiptId = (state: State): string => state.get('receiptId');

export const getReceiptEntryTime = (state: State): string =>
  state.get('receiptEntryTime');
