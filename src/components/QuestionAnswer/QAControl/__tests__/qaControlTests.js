/* global expect, test, describe */
import Immutable from 'immutable';
import {
  collapseAllExistingExceptOne,
  setInitStates,
  setQuestionStates,
} from '../controlQuestionStates';
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
    peopleInput: 'collapsed',
    mainCategories: 'collapsed',
    quantityInput: 'collapsed',
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

  test('after people input on blank state', () => {
    const newState = setQuestionStates('peopleInput', blankState)
      .questionStates;
    expect(newState.peopleInput).toBe('collapsed');
    expect(newState.mainCategories).toBe('expanded');
    expect(newState.quantityInput).toBe('hidden');
  });

  test('after people input with main categories already present', () => {
    const newState = setQuestionStates('peopleInput', stateWithMainCategories)
      .questionStates;
    expect(newState.peopleInput).toBe('collapsed');
    expect(newState.mainCategories).toBe('collapsed');
    expect(newState.quantityInput).toBe('collapsed');
  });

  test('after main categories', () => {
    const newState = setQuestionStates(
      'mainCategories',
      stateWithMainCategories
    ).questionStates;
    expect(newState.peopleInput).toBe('collapsed');
    expect(newState.mainCategories).toBe('collapsed');
    expect(newState.quantityInput).toBe('expanded');
  });

  test('after quantity input', () => {
    const newState = setQuestionStates('quantityInput', stateWithMainCategories)
      .questionStates;
    expect(newState.peopleInput).toBe('collapsed');
    expect(newState.mainCategories).toBe('collapsed');
    expect(newState.quantityInput).toBe('collapsed');
  });

  test('collapsing all but people input on blank', () => {
    const newState = collapseAllExistingExceptOne('peopleInput', blankState)
      .questionStates;
    expect(newState.peopleInput).toBe('expanded');
    expect(newState.mainCategories).toBe('hidden');
    expect(newState.quantityInput).toBe('hidden');
  });

  test('collapsing all but people input with main categories', () => {
    const newState = collapseAllExistingExceptOne(
      'peopleInput',
      stateWithMainCategories
    ).questionStates;
    expect(newState.peopleInput).toBe('expanded');
    expect(newState.mainCategories).toBe('collapsed');
    expect(newState.quantityInput).toBe('collapsed');
  });

  test('collapsing all but main categories', () => {
    const newState = collapseAllExistingExceptOne(
      'mainCategories',
      stateWithMainCategories
    ).questionStates;
    expect(newState.peopleInput).toBe('collapsed');
    expect(newState.mainCategories).toBe('expanded');
    expect(newState.quantityInput).toBe('collapsed');
  });

  test('collapsing all but quantity input', () => {
    const newState = collapseAllExistingExceptOne(
      'quantityInput',
      stateWithMainCategories
    ).questionStates;
    expect(newState.peopleInput).toBe('collapsed');
    expect(newState.mainCategories).toBe('collapsed');
    expect(newState.quantityInput).toBe('expanded');
  });
});
