/* global expect, test, describe */
import Immutable from 'immutable';
import { setInitStates } from '../controlQuestionStates';
import { emptyBasket, initPeople } from '../../../../model/configurationApi';
import { makeSettingsRecord } from '../../../../types/reducers/declaration';

const blankState = {
  basket: emptyBasket,
  people: initPeople,
  settings: makeSettingsRecord(),
  questionStates: {
    peopleInput: 'expanded',
    mainCategories: 'hidden',
    quantityInput: 'hidden',
  },
};

const stateWithMainCategories = {
  basket: emptyBasket,
  people: initPeople,
  settings: makeSettingsRecord().set('mainCategories', Immutable.Set('Foo')),
  questionStates: {
    peopleInput: 'expanded',
    mainCategories: 'hidden',
    quantityInput: 'hidden',
  },
};

describe('Test qa control flow', () => {
  test('init states from blank state (empty main categories)', () => {
    const newState = setInitStates(blankState).questionStates;
    expect(newState.peopleInput).toBe('expanded');
    expect(newState.mainCategories).toBe('hidden');
    expect(newState.quantityInput).toBe('hidden');
  });

  test('init states from state with main categories', () => {
    const newState = setInitStates(stateWithMainCategories).questionStates;
    expect(newState.peopleInput).toBe('collapsed');
    expect(newState.mainCategories).toBe('collapsed');
    expect(newState.quantityInput).toBe('collapsed');
  });
});
