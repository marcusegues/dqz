/* global expect, test, describe */
import Immutable from 'immutable';
import {
  collapseAllExistingExceptOne,
  setInitStates,
  setQuestionStates,
} from '../controlQuestionStates';
import {
  emptyBasket,
  initAmounts,
  initPeople,
} from '../../../../model/configurationApi';
import { makeSettingsRecord } from '../../../../types/reducers/declaration';

const blankState = {
  basket: emptyBasket,
  people: initPeople,
  amounts: initAmounts,
  settings: makeSettingsRecord(),
  questionStates: {
    peopleInput: 'expanded',
    mainCategories: 'hidden',
    quantityInput: 'hidden',
  },
  questionFlag: {
    peopleInput: 'complete',
    mainCategories: 'incomplete',
    quantityInput: 'incomplete',
  },
};

const stateWithMainCategories = {
  basket: emptyBasket,
  people: initPeople,
  amounts: initAmounts,
  settings: makeSettingsRecord().set('mainCategories', Immutable.Set('Foo')),
  questionStates: {
    peopleInput: 'collapsed',
    mainCategories: 'collapsed',
    quantityInput: 'collapsed',
  },
  questionFlag: {
    peopleInput: 'complete',
    mainCategories: 'incomplete',
    quantityInput: 'incomplete',
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

  test('after people input FORWARD on blank state', () => {
    const newState = setQuestionStates('peopleInput', 'forward', blankState)
      .questionStates;
    expect(newState.peopleInput).toBe('collapsed');
    expect(newState.mainCategories).toBe('expanded');
    expect(newState.quantityInput).toBe('hidden');
  });

  test('after people input BACK on blank state', () => {
    const newState = setQuestionStates('peopleInput', 'back', blankState)
      .questionStates;
    expect(newState.peopleInput).toBe('collapsed');
    expect(newState.mainCategories).toBe('collapsed');
    expect(newState.quantityInput).toBe('hidden');
  });

  test('after people input with main categories FORWARD already present', () => {
    const newState = setQuestionStates(
      'peopleInput',
      'forward',
      stateWithMainCategories
    ).questionStates;
    expect(newState.peopleInput).toBe('collapsed');
    expect(newState.mainCategories).toBe('expanded');
    expect(newState.quantityInput).toBe('collapsed');
  });

  test('after people input with main categories BACK already present', () => {
    const newState = setQuestionStates(
      'peopleInput',
      'back',
      stateWithMainCategories
    ).questionStates;
    expect(newState.peopleInput).toBe('collapsed');
    expect(newState.mainCategories).toBe('collapsed');
    expect(newState.quantityInput).toBe('collapsed');
  });

  test('after main categories FORWARD', () => {
    const newState = setQuestionStates(
      'mainCategories',
      'forward',
      stateWithMainCategories
    ).questionStates;
    expect(newState.peopleInput).toBe('collapsed');
    expect(newState.mainCategories).toBe('collapsed');
    expect(newState.quantityInput).toBe('expanded');
  });

  test('after main categories BACK', () => {
    const newState = setQuestionStates(
      'mainCategories',
      'back',
      stateWithMainCategories
    ).questionStates;
    expect(newState.peopleInput).toBe('expanded');
    expect(newState.mainCategories).toBe('collapsed');
    expect(newState.quantityInput).toBe('collapsed');
  });

  test('after quantity input FORWARD', () => {
    const newState = setQuestionStates(
      'quantityInput',
      'forward',
      stateWithMainCategories
    ).questionStates;
    expect(newState.peopleInput).toBe('collapsed');
    expect(newState.mainCategories).toBe('collapsed');
    expect(newState.quantityInput).toBe('collapsed');
  });

  test('after quantity input BACK', () => {
    const newState = setQuestionStates(
      'quantityInput',
      'back',
      stateWithMainCategories
    ).questionStates;
    expect(newState.peopleInput).toBe('collapsed');
    expect(newState.mainCategories).toBe('expanded');
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
