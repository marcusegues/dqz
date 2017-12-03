// @flow
import {
  getInitialState,
  MainCategories,
  InitList,
} from '../types/reducers/declaration';
import type {
  State,
  MainCategory,
  MainCategoriesType,
  OverAllowanceType,
  LargeAmountPresentType,
  SettingsType,
  CurrentQuestionType,
} from '../types/reducers/declaration';
import type { Action } from '../types/actions';
import type {
  Basket,
  Category,
  People,
} from '../model/types/basketPeopleTypes';
import * as fromModelApi from '../model/configurationApi';

const declaration = (
  state: State = getInitialState(),
  action: Action
): State => {
  switch (action.type) {
    case 'DECLARATION_BASKET_CHANGE_QUANTITY': {
      // eslint-disable-next-line prefer-destructuring
      const category: Category = action.category;
      const basket: Basket = state.get('basket');

      return state.setIn(
        ['basket'],
        fromModelApi.setQuantity(
          basket,
          category,
          fromModelApi.getQuantity(basket, category) + action.quantityChange
        )
      );
    }
    case 'DECLARATION_BASKET_ADD_AMOUNT': {
      // eslint-disable-next-line prefer-destructuring
      const category: Category = action.category;
      const basket: Basket = state.get('basket');
      // eslint-disable-next-line prefer-destructuring
      const amount: number = action.amount;
      return state.set(
        'basket',
        fromModelApi.addAmount(basket, category, amount)
      );
    }
    case 'DECLARATION_BASKET_ADD_LARGE_AMOUNT': {
      // eslint-disable-next-line prefer-destructuring
      const category: Category = action.category;
      // eslint-disable-next-line prefer-destructuring
      const largeAmount: number = action.largeAmount;
      const basket: Basket = state.get('basket');
      return state.set(
        'basket',
        fromModelApi.addLargeAmount(basket, category, largeAmount)
      );
    }
    case 'DECLARATION_ADULTS_CHANGE_QUANTITY': {
      const people: People = state.get('people');
      const adults: number = people.get('adults');
      const quantity: number = adults + action.quantityChange;
      return state.set('people', fromModelApi.setAdultPeople(people, quantity));
    }
    case 'DECLARATION_MINORS_CHANGE_QUANTITY': {
      const people: People = state.get('people');
      const minors: number = people.get('minors');
      const quantity: number = minors + action.quantityChange;
      return state.set('people', fromModelApi.setMinorPeople(people, quantity));
    }
    case 'DECLARATION_ADULTS_SET_QUANTITY': {
      const people: People = state.get('people');
      // eslint-disable-next-line prefer-destructuring
      const quantity: number = action.quantity;
      return state.set('people', fromModelApi.setAdultPeople(people, quantity));
    }
    case 'DECLARATION_MINORS_SET_QUANTITY': {
      const people: People = state.get('people');
      // eslint-disable-next-line prefer-destructuring
      const quantity: number = action.quantity;
      return state.set('people', fromModelApi.setMinorPeople(people, quantity));
    }
    case 'DECLARATION_SET_PEOPLE': {
      const people: People = state.get('people');
      // eslint-disable-next-line prefer-destructuring
      const adults: number = action.adults;
      // eslint-disable-next-line prefer-destructuring
      const minors: number = action.minors;
      return state.set(
        'people',
        fromModelApi.setPeople(people, adults, minors)
      );
    }
    case 'DECLARATION_SET_OVER_ALLOWANCE_TRUE': {
      return state.setIn(['settings', 'overAllowance'], true);
    }
    case 'DECLARATION_SET_OVER_ALLOWANCE_FALSE': {
      return state.setIn(['settings', 'overAllowance'], false);
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
      const basket: Basket = state.get('basket');
      // eslint-disable-next-line prefer-destructuring
      const category: Category = action.category;
      return state.set(
        'basket',
        fromModelApi.resetLargeAmounts(basket, category)
      );
    }
    case 'DECLARATION_SET_LARGE_AMOUNTS_ENTERED_TRUE': {
      return state.setIn(['settings', 'largeAmountsEntered'], true);
    }
    case 'DECLARATION_SET_LARGE_AMOUNTS_ENTERED_NOT_ANSWERED': {
      debugger;
      return state.setIn(['settings', 'largeAmountsEntered'], 'notAnswered');
    }
    case 'DECLARATION_SET_OVER_ALLOWANCE_NOT_ANSWERED': {
      return state.setIn(['settings', 'overAllowance'], 'notAnswered');
    }
    case 'DECLARATION_RESET_AMOUNTS': {
      const basket: Basket = state.get('basket');
      // eslint-disable-next-line prefer-destructuring
      const category: Category = action.category;
      return state.set('basket', fromModelApi.resetAmounts(basket, category));
    }
    case 'DECLARATION_ADD_MAIN_CATEGORY': {
      // eslint-disable-next-line prefer-destructuring
      const mainCategory: MainCategory = action.mainCategory; // why can't I omit the declaration and pass directly into add?
      return state.updateIn(['settings', 'mainCategories'], mainCategories =>
        mainCategories.add(mainCategory)
      );
    }
    case 'DECLARATION_REMOVE_MAIN_CATEGORY': {
      // eslint-disable-next-line prefer-destructuring
      const mainCategory: MainCategory = action.mainCategory;
      return state.updateIn(['settings', 'mainCategories'], mainCategories =>
        mainCategories.delete(mainCategory)
      );
    }
    case 'DECLARATION_SET_MAIN_CATEGORIES': {
      // eslint-disable-next-line prefer-destructuring
      const mainCategories: MainCategoriesType = action.mainCategories;
      return state.setIn(['settings', 'mainCategories'], mainCategories);
    }
    case 'DECLARATION_SET_CURRENT_QUESTION': {
      // eslint-disable-next-line prefer-destructuring
      const currentQuestion: CurrentQuestionType = action.currentQuestion;
      return state.setIn(['settings', 'currentQuestion'], currentQuestion);
    }
    case 'DECLARATION_ADD_TO_INIT_LIST': {
      const nextQuestion: CurrentQuestionType = action.nextQuestion;
      const newState = state.updateIn(['settings', 'initList'], list =>
        list.push(nextQuestion)
      );
      return newState;
    }
    case 'DECLARATION_SET_INIT_FALSE': {
      const newState = state.setIn(['settings', 'init'], false);
      return newState.setIn(['settings', 'initList'], InitList);
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

export const getDeclarationSettings = (state: State): SettingsType =>
  state.get('settings');

export const getDeclarationInit = (state: State): boolean =>
  state.getIn(['settings', 'init'], true);

export const getDeclarationInitList = (state: State): boolean =>
  state.getIn(['settings', 'initList'], true);
