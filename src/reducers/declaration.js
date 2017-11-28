// @flow
import {
  getInitialState,
  makeMainCategoriesSet,
} from '../types/reducers/declaration';
import type {
  State,
  MainCategory,
  MainCategoriesType,
} from '../types/reducers/declaration';
import type { Action } from '../types/actions';
import type {
  Basket,
  Category,
  People,
} from '../model/types/basketPeopleTypes';
import { makePeopleRecord } from '../model/types/basketPeopleTypes';
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
    case 'DECLARATION_ADULTS_CHANGE_QUANTITY': {
      const people: People = state.getIn(
        ['people']
        // makePeopleRecord() // why do I need to provide this argument?
      );
      const adults: number = people.get('adults');
      const quantity: number = adults + action.quantityChange;
      return state.setIn(
        ['people'],
        fromModelApi.setAdultPeople(people, quantity)
      );
    }
    case 'DECLARATION_MINORS_CHANGE_QUANTITY': {
      const people: People = state.getIn(['people'], makePeopleRecord());
      const minors: number = people.get('minors');
      const quantity: number = minors + action.quantityChange;
      return state.setIn(
        ['people'],
        fromModelApi.setMinorPeople(people, quantity)
      );
    }
    case 'DECLARATION_ADULTS_SET_QUANTITY': {
      const people: People = state.getIn(['people'], makePeopleRecord());
      // eslint-disable-next-line prefer-destructuring
      const quantity: number = action.quantity;
      return state.setIn(
        ['people'],
        fromModelApi.setAdultPeople(people, quantity)
      );
    }
    case 'DECLARATION_MINORS_SET_QUANTITY': {
      const people: People = state.getIn(['people'], makePeopleRecord());
      // eslint-disable-next-line prefer-destructuring
      const quantity: number = action.quantity;
      return state.setIn(
        ['people'],
        fromModelApi.setMinorPeople(people, quantity)
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
    default: {
      return state;
    }
  }
};

export default declaration;

export const getDeclarationPeople = (state: State): People =>
  state.getIn(['people'], makePeopleRecord());

export const getOverAllowance = (state: State): boolean =>
  state.getIn(['settings', 'overAllowance'], true);

export const getLargeAmountPresent = (state: State): boolean =>
  state.getIn(['settings', 'largeAmountPresent'], true);

export const getDeclarationMainCategories = (
  state: State
): MainCategoriesType =>
  state.getIn(['settings', 'mainCategories'], makeMainCategoriesSet());
