/* eslint-disable prefer-destructuring */
// @flow
import Immutable from 'immutable';
import {
  mainCategories,
  emptyMainCategories,
  getInitialDeclarationState,
} from '../types/reducers/declaration';
import type {
  MainCategory,
  MainCategories,
  Settings,
  DeclarationState,
} from '../types/reducers/declaration';
import type { DeclarationAction } from '../types/actions/declaration';
import type {
  Amounts,
  Basket,
  Category,
  People,
} from '../model/types/basketPeopleAmountsTypes';
import * as modelApi from '../model/configurationApi';
import type { Currency } from '../model/currencies';
import type { PaymentData } from '../types/generalTypes';
import { makePaymentDataRecord } from '../types/generalTypes';
import type { QAState } from '../components/QuestionAnswer/QuestionAnswerContainer';

export const declaration = (
  state: DeclarationState = getInitialDeclarationState(),
  action: DeclarationAction
): DeclarationState => {
  switch (action.type) {
    case 'RESET_DECLARATION': {
      const peopleReset = state.set('people', modelApi.initPeople);
      const basketReset = peopleReset.set('basket', modelApi.emptyBasket);
      const mainCategoriesReset = basketReset.setIn(
        ['settings', 'mainCategories'],
        Immutable.Set()
      );
      const amountsReset = mainCategoriesReset.set(
        'amounts',
        modelApi.initAmounts
      );
      return amountsReset.set('receiptEntryTime', '');
    }
    case 'BASKET_ADD_QUANTITY': {
      const category: Category = action.category;
      const basket: Basket = state.get('basket');
      return state.setIn(
        ['basket'],
        modelApi.addQuantity(basket, category, action.quantity)
      );
    }

    case 'BASKET_RESET_CATEGORY_QUANTITIES': {
      const category: Category = action.category;
      const basket: Basket = state.get('basket');
      return state.setIn(
        ['basket'],
        modelApi.resetQuantities(basket, category)
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
    case 'DELETE_AMOUNT': {
      return state.set(
        'amounts',
        modelApi.deleteAmount(state.get('amounts'), action.id)
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

    case 'ADD_MAIN_CATEGORY': {
      const mainCategory: MainCategory = action.mainCategory;
      const mainCategoriesAnswer = state.getIn(
        ['settings', 'mainCategories'],
        emptyMainCategories
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
        emptyMainCategories
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
    case 'RESET_PAYMENT_DATA': {
      return state.set('paymentData', makePaymentDataRecord());
    }
    case 'SET_PAYMENT_DATA': {
      const paymentData: PaymentData = action.paymentData;
      return state.set('paymentData', paymentData);
    }
    case 'SET_RECEIPT_ENTRY_TIME': {
      const receiptEntryTime: string = action.receiptEntryTime;
      return state.set('receiptEntryTime', receiptEntryTime);
    }
    case 'SET_QA_STATE': {
      const qaState: QAState = action.qaState;
      return state.set('qaState', qaState);
    }
    default: {
      return state;
    }
  }
};

export const getBasket = (state: DeclarationState): Basket =>
  state.get('basket');

export const getPeople = (state: DeclarationState): People =>
  state.get('people');

export const getAmounts = (state: DeclarationState): Amounts =>
  state.get('amounts');

export const getMainCategories = (state: DeclarationState): MainCategories =>
  state.getIn(['settings', 'mainCategories'], mainCategories);

export const getSettings = (state: DeclarationState): Settings =>
  state.get('settings');

export const getPaymentData = (state: DeclarationState): PaymentData =>
  state.get('paymentData');

export const getReceiptEntryTime = (state: DeclarationState): string =>
  state.get('receiptEntryTime');

export const getQAState = (state: DeclarationState): QAState =>
  state.get('qaState');
