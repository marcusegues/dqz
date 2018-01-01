/* eslint-disable prefer-destructuring */
// @flow
import {
  getInitialState,
  mainCategories,
  EmptyMainCategories,
} from '../types/reducers/declaration';
import type {
  State,
  MainCategory,
  MainCategories,
  Settings,
} from '../types/reducers/declaration';
import type { Action } from '../types/actions';
import type {
  Amounts,
  Basket,
  Category,
  People,
} from '../model/types/basketPeopleAmountsTypes';
import * as modelApi from '../model/configurationApi';
import type { Currency, CurrencyObject } from '../model/currencies';

const declaration = (
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
    case 'DECLARATION_BASKET_ADD_QUANTITY': {
      const category: Category = action.category;
      const basket: Basket = state.get('basket');
      return state.setIn(
        ['basket'],
        modelApi.addQuantity(basket, category, action.quantity)
      );
    }
    case 'DECLARATION_SET_BASKET': {
      const basket: Basket = action.basket;
      return state.set('basket', basket);
    }
    case 'DECLARATION_ADULTS_CHANGE_QUANTITY': {
      const people: People = state.get('people');
      const adults: number = people.get('adults');
      const quantity: number = adults + action.quantityChange;
      return state.set('people', modelApi.setAdultPeople(people, quantity));
    }
    case 'DECLARATION_MINORS_CHANGE_QUANTITY': {
      const people: People = state.get('people');
      const minors: number = people.get('minors');
      const quantity: number = minors + action.quantityChange;
      return state.set('people', modelApi.setMinorPeople(people, quantity));
    }
    case 'DECLARATION_ADULTS_SET_QUANTITY': {
      const people: People = state.get('people');
      const quantity: number = action.quantity;
      return state.set('people', modelApi.setAdultPeople(people, quantity));
    }
    case 'DECLARATION_MINORS_SET_QUANTITY': {
      const people: People = state.get('people');
      const quantity: number = action.quantity;
      return state.set('people', modelApi.setMinorPeople(people, quantity));
    }
    case 'DECLARATION_SET_PEOPLE': {
      return state.set('people', action.people);
    }
    case 'DECLARATION_ADD_AMOUNT': {
      const currency: Currency = action.currency;
      const amounts: Amounts = state.get('amounts');
      const amount: number = action.amount;
      return state.set(
        'amounts',
        modelApi.addAmount(amounts, currency, amount)
      );
    }
    case 'DECLARATION_ADD_LARGE_AMOUNT': {
      const currency: Currency = action.currency;
      const largeAmount: number = action.largeAmount;
      const amounts: Amounts = state.get('amounts');
      return state.set(
        'amounts',
        modelApi.addLargeAmount(amounts, currency, largeAmount)
      );
    }
    case 'DECLARATION_RESET_LARGE_AMOUNTS': {
      const amounts: Amounts = state.get('amounts');
      const currency: Currency = action.currency;
      return state.set(
        'amounts',
        modelApi.resetLargeAmounts(amounts, currency)
      );
    }
    case 'DECLARATION_RESET_AMOUNTS': {
      const amounts: Amounts = state.get('amounts');
      const currency: Currency = action.currency;
      return state.set('amounts', modelApi.resetAmounts(amounts, currency));
    }
    case 'DECLARATION_ADD_MAIN_CATEGORY': {
      const mainCategory: MainCategory = action.mainCategory;
      const mainCategoriesAnswer = state.getIn(
        ['settings', 'mainCategories'],
        EmptyMainCategories
      );
      if (mainCategoriesAnswer !== 'notAnswered') {
        return state.setIn(
          ['settings', 'mainCategories'],
          mainCategoriesAnswer.add(mainCategory)
        );
      }
      return state;
    }
    case 'DECLARATION_REMOVE_MAIN_CATEGORY': {
      const mainCategory: MainCategory = action.mainCategory;
      const mainCategoriesAnswer = state.getIn(
        ['settings', 'mainCategories'],
        EmptyMainCategories
      );
      if (mainCategoriesAnswer !== 'notAnswered') {
        return state.setIn(
          ['settings', 'mainCategories'],
          mainCategoriesAnswer.delete(mainCategory)
        );
      }
      return state;
    }
    case 'DECLARATION_SET_MAIN_CATEGORIES': {
      const mainCategoriesAnswer: MainCategories = action.mainCategories;
      return state.setIn(['settings', 'mainCategories'], mainCategoriesAnswer);
    }
    default: {
      return state;
    }
  }
};

export default declaration;

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
