// @flow
import { getInitialState, MainCategories } from '../types/reducers/declaration';
import type { State, MainCategory } from '../types/reducers/declaration';
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
        ['settings', 'people'],
        makePeopleRecord()
      );
      const adults: number = people.get('adults');
      const quantity: number = adults + action.quantityChange;
      return state.setIn(
        ['settings', 'people'],
        fromModelApi.setAdultPeople(people, quantity)
      );
    }
    case 'DECLARATION_MINORS_CHANGE_QUANTITY': {
      const people: People = state.getIn(
        ['settings', 'people'],
        makePeopleRecord()
      );
      const minors: number = people.get('minors');
      const quantity: number = minors + action.quantityChange;
      return state.setIn(
        ['settings', 'people'],
        fromModelApi.setMinorPeople(people, quantity)
      );
    }
    case 'DECLARATION_ADULTS_SET_QUANTITY': {
      const people: People = state.getIn(
        ['settings', 'people'],
        makePeopleRecord()
      );
      const quantity: number = action.quantity;
      return state.setIn(
        ['settings', 'people'],
        fromModelApi.setAdultPeople(people, quantity)
      );
    }
    case 'DECLARATION_MINORS_SET_QUANTITY': {
      const people: People = state.getIn(
        ['settings', 'people'],
        makePeopleRecord()
      );
      const quantity: number = action.quantity;
      return state.setIn(
        ['settings', 'people'],
        fromModelApi.setMinorPeople(people, quantity)
      );
    }
    case 'DECLARATION_SET_OVER_ALLOWANCE_TRUE': {
      return state.setIn(['settings', 'overAllowance'], true);
    }
    case 'DECLARATION_SET_OVER_ALLOWANCE_FALSE': {
      return state.setIn(['settings', 'overAllowance'], false);
    }
    case 'DECLARATION_SET_LARGE_AMOUNTS_TRUE': {
      return state.setIn(['settings', 'largeAmounts'], true);
    }
    case 'DECLARATION_SET_LARGE_AMOUNTS_FALSE': {
      return state.setIn(['settings', 'largeAmounts'], false);
    }
    case 'DECLARATION_ADD_MAIN_CATEGORY': {
      const category: MainCategory = action.category;
      return state.updateIn(['settings', 'mainCategories'], mainCategories =>
        mainCategories.add(category)
      );
    }
    case 'DECLARATION_REMOVE_MAIN_CATEGORY': {
      const category: MainCategory = action.category;
      return state.updateIn(['settings', 'mainCategories'], mainCategories =>
        mainCategories.delete(category)
      );
    }
    default: {
      return state;
    }
  }
};

export default declaration;

export const getDeclarationPeople = (state: State): People =>
  state.getIn(['settings', 'people'], makePeopleRecord());
