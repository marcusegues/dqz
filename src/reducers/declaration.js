/* eslint-disable prefer-destructuring */
// @flow
import {
  getInitialState,
  MainCategories,
  InitList,
  EmptyMainCategories,
} from '../types/reducers/declaration';
import type {
  State,
  MainCategory,
  MainCategoriesType,
  OverAllowanceType,
  LargeAmountPresentType,
  Settings,
  InitListType,
  CurrentQuestionType,
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
    case 'DECLARATION_SET_OVER_ALLOWANCE_TRUE': {
      return state.setIn(['settings', 'overAllowance'], true);
    }
    case 'DECLARATION_SET_OVER_ALLOWANCE_FALSE': {
      return state.setIn(['settings', 'overAllowance'], false);
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

    case 'DECLARATION_BASKET_ADD_LARGE_AMOUNT': {
      // eslint-disable-next-line prefer-destructuring
      const currency: Currency = action.currency;
      // eslint-disable-next-line prefer-destructuring
      const largeAmount: number = action.largeAmount;
      const amounts: Amounts = state.get('amounts');
      return state.set(
        'amounts',
        modelApi.addLargeAmount(amounts, currency, largeAmount)
      );
    }
    case 'DECLARATION_SET_LARGE_AMOUNT_PRESENT_TRUE': {
      return state.setIn(['settings', 'largeAmountPresent'], true);
    }
    case 'DECLARATION_SET_LARGE_AMOUNT_PRESENT_FALSE': {
      return state.setIn(['settings', 'largeAmountPresent'], false);
    }
    case 'DECLARATION_SET_LARGE_AMOUNT_PRESENT_NOT_ANSWERED': {
      return state.setIn(['settings', 'largeAmountPresent'], 'notAnswered');
    }
    case 'DECLARATION_RESET_LARGE_AMOUNTS': {
      const amounts: Amounts = state.get('amounts');
      // eslint-disable-next-line prefer-destructuring
      const currency: Currency = action.currency;
      return state.set(
        'amounts',
        modelApi.resetLargeAmounts(amounts, currency)
      );
    }
    case 'DECLARATION_SET_OVER_ALLOWANCE_NOT_ANSWERED': {
      return state.setIn(['settings', 'overAllowance'], 'notAnswered');
    }
    case 'DECLARATION_RESET_AMOUNTS': {
      const amounts: Amounts = state.get('amounts');
      // eslint-disable-next-line prefer-destructuring
      const currency: Currency = action.currency;
      return state.set('amounts', modelApi.resetAmounts(amounts, currency));
    }
    case 'DECLARATION_ADD_MAIN_CATEGORY': {
      // eslint-disable-next-line prefer-destructuring
      const mainCategory: MainCategory = action.mainCategory; // why can't I omit the declaration and pass directly into add?
      const mainCategories = state.getIn(
        ['settings', 'mainCategories'],
        EmptyMainCategories
      );
      if (mainCategories !== 'notAnswered') {
        return state.setIn(
          ['settings', 'mainCategories'],
          mainCategories.add(mainCategory)
        );
      }
      return state; // should never reach this
    }
    case 'DECLARATION_REMOVE_MAIN_CATEGORY': {
      // eslint-disable-next-line prefer-destructuring
      const mainCategory: MainCategory = action.mainCategory; // why can't I omit the declaration and pass directly into add?
      const mainCategories = state.getIn(
        ['settings', 'mainCategories'],
        EmptyMainCategories
      );
      if (mainCategories !== 'notAnswered') {
        return state.setIn(
          ['settings', 'mainCategories'],
          mainCategories.delete(mainCategory)
        );
      }
      return state; // should never reach this
    }
    case 'DECLARATION_SET_MAIN_CATEGORIES': {
      // eslint-disable-next-line prefer-destructuring
      const mainCategories: MainCategoriesType = action.mainCategories;
      return state.setIn(['settings', 'mainCategories'], mainCategories);
    }
    default: {
      return state;
    }
  }
};

export default declaration;

export const getDeclarationBasket = (state: State): Basket =>
  state.get('basket');

export const getDeclarationPeople = (state: State): People =>
  state.get('people');

export const getDeclarationAmounts = (state: State): Amounts =>
  state.get('amounts');

export const getOverAllowance = (state: State): OverAllowanceType =>
  state.getIn(['settings', 'overAllowance'], 'notAnswered');

export const getLargeAmountPresent = (state: State): LargeAmountPresentType =>
  state.getIn(['settings', 'largeAmountPresent'], 'notAnswered');

export const getDeclarationMainCategories = (
  state: State
): MainCategoriesType =>
  state.getIn(['settings', 'mainCategories'], MainCategories);

export const getDeclarationCurrentQuestion = (
  state: State
): CurrentQuestionType =>
  state.getIn(['settings', 'currentQuestion'], 'finished');

export const getDeclarationSettings = (state: State): Settings =>
  state.get('settings');

export const getDeclarationInit = (state: State): boolean =>
  state.getIn(['settings', 'init'], true);

export const getDeclarationInitList = (state: State): InitListType =>
  state.getIn(['settings', 'initList'], InitList);

export const getCurrenciesObject = (state: State): CurrencyObject =>
  state.get('currencyObject');

export const getCurrencyState = (state: State): boolean =>
  state.get('validCurrencies');
