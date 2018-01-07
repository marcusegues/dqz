/* global describe, test, expect */
import Immutable from 'immutable';
import { anyQuantitiesInBasket, setQuestionFlag } from '../controlQuestionFlag';
import {
  addQuantity,
  emptyBasket,
  initPeople,
  subtractAdult,
} from '../../../../model/configurationApi';
import { makeSettingsRecord } from '../../../../types/reducers/appReducer';

const blankState = {
  basket: emptyBasket,
  people: initPeople,
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

const noPeopleState = {
  basket: emptyBasket,
  people: subtractAdult(initPeople),
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

const withMainCategoriesState = {
  basket: emptyBasket,
  people: initPeople,
  settings: makeSettingsRecord().set('mainCategories', Immutable.Set('Foo')),
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

const withMainCategoriesStateAndQuantities = {
  basket: addQuantity(emptyBasket, 'Butter', 123),
  people: initPeople,
  settings: makeSettingsRecord().set('mainCategories', Immutable.Set('Foo')),
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

describe('Any quantities in basket', () => {
  test('returns false if empty basket', () => {
    const result = anyQuantitiesInBasket(emptyBasket);
    expect(result).toBe(false);
  });

  test('returns true when we add a positive quantity to an empty basket', () => {
    const b = addQuantity(emptyBasket, 'Meat', 1);
    const result = anyQuantitiesInBasket(b);
    expect(result).toBe(true);
  });
});

describe('Question flags (complete, incomplete)', () => {
  test('People...', () => {
    expect(
      setQuestionFlag('peopleInput', blankState).questionFlag.peopleInput
    ).toBe('complete');
    expect(
      setQuestionFlag('peopleInput', noPeopleState).questionFlag.peopleInput
    ).toBe('incomplete');
  });

  test('Main Categories...', () => {
    expect(
      setQuestionFlag('mainCategories', blankState).questionFlag.mainCategories
    ).toBe('incomplete');
    expect(
      setQuestionFlag('mainCategories', withMainCategoriesState).questionFlag
        .mainCategories
    ).toBe('complete');
  });

  test('Quantity Input...', () => {
    expect(
      setQuestionFlag('quantityInput', blankState).questionFlag.quantityInput
    ).toBe('incomplete');
    expect(
      setQuestionFlag('quantityInput', withMainCategoriesState).questionFlag
        .quantityInput
    ).toBe('incomplete');
    expect(
      setQuestionFlag('quantityInput', withMainCategoriesStateAndQuantities)
        .questionFlag.quantityInput
    ).toBe('complete');
  });
});
