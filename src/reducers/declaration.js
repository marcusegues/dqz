// @flow
import { getInitialState } from '../types/reducers/declaration';
import type { State } from '../types/reducers/declaration';
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
      const people: People = state.get('people');
      const adults: number = people.get('adults');
      const quantity: number = adults + action.quantityChange;
      return state.setIn(
        ['people'],
        fromModelApi.setAdultPeople(people, quantity)
      );
    }
    case 'DECLARATION_MINORS_CHANGE_QUANTITY': {
      const people: People = state.get('people');
      const minors: number = people.get('minors');
      const quantity: number = minors + action.quantityChange;
      return state.setIn(
        ['people'],
        fromModelApi.setMinorPeople(people, quantity)
      );
    }
    case 'DECLARATION_ADULTS_SET_QUANTITY': {
      const people: People = state.get('people');
      const quantity: number = action.quantity;
      return state.setIn(
        ['people'],
        fromModelApi.setAdultPeople(people, quantity)
      );
    }
    case 'DECLARATION_MINORS_SET_QUANTITY': {
      const people: People = state.get('people');
      const quantity: number = action.quantity;
      return state.setIn(
        ['people'],
        fromModelApi.setMinorPeople(people, quantity)
      );
    }
    default: {
      return state;
    }
  }
};

export default declaration;
