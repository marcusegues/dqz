import Immutable from 'immutable';
import {
  collapseAllExistingExceptOne,
  setInitStates,
  setQuestionStates,
} from '../controlQuestionStates';
import {
  addAdult,
  addAmount,
  emptyBasket,
  initAmounts,
  initPeople,
} from '../../../../model/configurationApi';
import { makeSettingsRecord } from '../../../../types/reducers/declaration';
import { currencyExample } from '../../../../model/currencies';
import { initialQAState } from '../../QuestionAnswerContainer';

const blankState = {
  basket: emptyBasket,
  people: initPeople,
  amounts: initAmounts,
  settings: makeSettingsRecord(),
  ...initialQAState,
};

const stateWithMainCategories = {
  basket: emptyBasket,
  people: initPeople,
  amounts: initAmounts,
  settings: makeSettingsRecord().set(
    'mainCategories',
    Immutable.Set(['Meat', 'Butter'])
  ),
  questionStates: {
    peopleInput: 'collapsed',
    mainCategories: 'collapsed',
    quantityInput: 'collapsed',
    amounts: 'collapsed',
  },
  questionFlag: {
    peopleInput: 'complete',
    mainCategories: 'incomplete',
    quantityInput: 'incomplete',
    amounts: 'incomplete',
  },
};

const stateWithSingleOtherGoodsMainCategory = {
  basket: emptyBasket,
  people: initPeople,
  amounts: initAmounts,
  settings: makeSettingsRecord().set(
    'mainCategories',
    Immutable.Set(['OtherGoods'])
  ),
  questionStates: {
    peopleInput: 'collapsed',
    mainCategories: 'collapsed',
    quantityInput: 'collapsed',
    amounts: 'collapsed',
    largeAmounts: 'collapsed',
  },
  questionFlag: {
    peopleInput: 'complete',
    mainCategories: 'incomplete',
    quantityInput: 'incomplete',
    amounts: 'incomplete',
    largeAmounts: 'incomplete',
  },
};

const stateWithSingleOtherGoodsMainCategoryAndHasLargeAmount = {
  basket: emptyBasket,
  people: addAdult(initPeople),
  amounts: addAmount(initAmounts, 'CHF', 1000),
  currencies: currencyExample,
  settings: makeSettingsRecord().set(
    'mainCategories',
    Immutable.Set(['OtherGoods'])
  ),
  questionStates: {
    peopleInput: 'collapsed',
    mainCategories: 'collapsed',
    quantityInput: 'collapsed',
    amounts: 'collapsed',
    largeAmounts: 'collapsed',
  },
  questionFlag: {
    peopleInput: 'complete',
    mainCategories: 'incomplete',
    quantityInput: 'incomplete',
    amounts: 'incomplete',
    largeAmounts: 'incomplete',
  },
};

const stateWithOtherGoodsAndOtherMainCategories = {
  basket: emptyBasket,
  people: initPeople,
  amounts: initAmounts,
  settings: makeSettingsRecord().set(
    'mainCategories',
    Immutable.Set(['OtherGoods', 'Tobacco'])
  ),
  questionStates: {
    peopleInput: 'collapsed',
    mainCategories: 'collapsed',
    quantityInput: 'collapsed',
    amounts: 'collapsed',
  },
  questionFlag: {
    peopleInput: 'complete',
    mainCategories: 'incomplete',
    quantityInput: 'incomplete',
    amounts: 'incomplete',
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

  test('init states from state with single OtherGoods main category', () => {
    const newState = setInitStates(stateWithSingleOtherGoodsMainCategory)
      .questionStates;
    expect(newState.peopleInput).toBe('collapsed');
    expect(newState.mainCategories).toBe('collapsed');
    expect(newState.quantityInput).toBe('hidden');
    expect(newState.amounts).toBe('collapsed');
    expect(newState.largeAmounts).toBe('hidden');
  });

  test('init states from state with single OtherGoods main category and has large amount', () => {
    const newState = setInitStates(
      stateWithSingleOtherGoodsMainCategoryAndHasLargeAmount
    ).questionStates;
    expect(newState.peopleInput).toBe('collapsed');
    expect(newState.mainCategories).toBe('collapsed');
    expect(newState.quantityInput).toBe('hidden');
    expect(newState.amounts).toBe('collapsed');
    expect(newState.largeAmounts).toBe('collapsed');
  });

  test('after people input FORWARD on blank state', () => {
    const newState = setQuestionStates('peopleInput', 'forward', {}, blankState)
      .questionStates;
    expect(newState.peopleInput).toBe('collapsed');
    expect(newState.mainCategories).toBe('expanded');
    expect(newState.quantityInput).toBe('hidden');
  });

  test('after people input BACK on blank state', () => {
    const spy = jest.fn();
    const mockNav = { dispatch: spy };
    const newState = setQuestionStates(
      'peopleInput',
      'back',
      mockNav,
      blankState
    ).questionStates;
    expect(newState.peopleInput).toBe('expanded');
    expect(newState.mainCategories).toBe('hidden');
    expect(newState.quantityInput).toBe('hidden');
    expect(spy).toBeCalled();
  });

  test('after people input with main categories FORWARD already present', () => {
    const newState = setQuestionStates(
      'peopleInput',
      'forward',
      {},
      stateWithMainCategories
    ).questionStates;
    expect(newState.peopleInput).toBe('collapsed');
    expect(newState.mainCategories).toBe('expanded');
    expect(newState.quantityInput).toBe('hidden');
  });

  test('after people input with main categories BACK already present', () => {
    const spy = jest.fn();
    const mockNav = { dispatch: spy };
    const newState = setQuestionStates(
      'peopleInput',
      'back',
      mockNav,
      stateWithMainCategories
    ).questionStates;
    expect(newState.peopleInput).toBe('expanded');
    expect(newState.mainCategories).toBe('collapsed');
    expect(newState.quantityInput).toBe('hidden');
    expect(spy).toBeCalled();
  });

  test('after main categories BACK', () => {
    const newState = setQuestionStates(
      'mainCategories',
      'back',
      {},
      stateWithMainCategories
    ).questionStates;
    expect(newState.peopleInput).toBe('expanded');
    expect(newState.mainCategories).toBe('collapsed');
    expect(newState.quantityInput).toBe('hidden');
  });

  test('after main categories (multiple main categories) FORWARD', () => {
    const newState = setQuestionStates(
      'mainCategories',
      'forward',
      {},
      stateWithMainCategories
    ).questionStates;
    expect(newState.peopleInput).toBe('collapsed');
    expect(newState.mainCategories).toBe('collapsed');
    expect(newState.quantityInput).toBe('expanded');
    expect(newState.amounts).toBe('hidden');
  });

  test('after main categories (single OtherGoods main category) FORWARD', () => {
    const newState = setQuestionStates(
      'mainCategories',
      'forward',
      {},
      stateWithSingleOtherGoodsMainCategory
    ).questionStates;
    expect(newState.peopleInput).toBe('collapsed');
    expect(newState.mainCategories).toBe('collapsed');
    expect(newState.quantityInput).toBe('hidden');
    expect(newState.amounts).toBe('expanded');
  });

  test('after main categories (multiple main categories including OtherGoods) UPDATE', () => {
    const newState = setQuestionStates(
      'mainCategories',
      'update',
      {},
      stateWithOtherGoodsAndOtherMainCategories
    ).questionStates;
    expect(newState.peopleInput).toBe('collapsed');
    expect(newState.mainCategories).toBe('expanded');
    expect(newState.quantityInput).toBe('hidden');
    expect(newState.amounts).toBe('hidden');
  });

  test('after amounts input (single OtherGoods main category) BACK', () => {
    const newState = setQuestionStates(
      'amounts',
      'back',
      {},
      stateWithSingleOtherGoodsMainCategory
    ).questionStates;
    expect(newState.peopleInput).toBe('collapsed');
    expect(newState.mainCategories).toBe('expanded');
    expect(newState.quantityInput).toBe('hidden');
    expect(newState.amounts).toBe('hidden');
  });

  test('after quantity input BACK', () => {
    const newState = setQuestionStates(
      'quantityInput',
      'back',
      {},
      stateWithMainCategories
    ).questionStates;
    expect(newState.peopleInput).toBe('collapsed');
    expect(newState.mainCategories).toBe('expanded');
    expect(newState.quantityInput).toBe('hidden');
  });

  test('after large amounts input (single OtherGoods main category) BACK', () => {
    const newState = setQuestionStates(
      'largeAmounts',
      'back',
      {},
      stateWithSingleOtherGoodsMainCategoryAndHasLargeAmount
    ).questionStates;
    expect(newState.peopleInput).toBe('collapsed');
    expect(newState.mainCategories).toBe('collapsed');
    expect(newState.quantityInput).toBe('hidden');
    expect(newState.amounts).toBe('expanded');
    expect(newState.largeAmounts).toBe('collapsed');
  });

  // TODO add amount input navigation (back/forth) in presence of large amounts or not

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
    expect(newState.quantityInput).toBe('hidden');
  });

  test('collapsing all but main categories', () => {
    const newState = collapseAllExistingExceptOne(
      'mainCategories',
      stateWithMainCategories
    ).questionStates;
    expect(newState.peopleInput).toBe('collapsed');
    expect(newState.mainCategories).toBe('expanded');
    expect(newState.quantityInput).toBe('hidden');
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
