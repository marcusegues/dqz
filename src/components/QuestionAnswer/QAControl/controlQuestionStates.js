// @flow

import type {
  DirectionType,
  QAStateEnriched,
  QuestionState,
  QuestionType,
} from '../QuestionAnswerContainer';
import { getTotalPeople } from '../../../model/configurationApi';
import { hasLargeAmount } from '../../../model/utils';
import type { Navigation } from '../../../types/generalTypes';
import type { MainCategories } from '../../../types/reducers/declaration';

const singleOtherGoodsMainCategory = (
  mainCategories: MainCategories
): boolean => mainCategories.size === 1 && mainCategories.has('OtherGoods');

const showLargeAmountsQuestion = (qaState: QAStateEnriched) => {
  const { people, amounts } = qaState;
  return (
    hasLargeAmount(amounts, qaState.currencies) && getTotalPeople(people) > 1
  );
};

const setQuestionState = (
  qaState: QAStateEnriched,
  questionStates: { [QuestionType]: QuestionState }
): QAStateEnriched => Object.assign({}, qaState, { questionStates });

export const setInitStates = (qaState: QAStateEnriched): QAStateEnriched => {
  const { settings } = qaState;
  const main = settings.get('mainCategories');
  return setQuestionState(qaState, {
    peopleInput: main.size ? 'collapsed' : 'expanded',
    mainCategories: main.size ? 'collapsed' : 'hidden',
    quantityInput:
      main.size && !singleOtherGoodsMainCategory(main) ? 'collapsed' : 'hidden',
    amounts: main.size ? 'collapsed' : 'hidden',
    largeAmounts: showLargeAmountsQuestion(qaState) ? 'collapsed' : 'hidden',
  });
};

const fwdNav = (direction: DirectionType): QuestionState =>
  direction === 'forward' ? 'expanded' : 'collapsed';

const backNav = (direction: DirectionType): QuestionState =>
  direction === 'back' ? 'expanded' : 'collapsed';

export const setQuestionStates = (
  justAnswered: QuestionType,
  direction: DirectionType,
  navigation: Navigation,
  qaState: QAStateEnriched
): QAStateEnriched => {
  const { settings } = qaState;
  const mainCategories = settings.get('mainCategories');
  // do case analysis
  let peopleInputState: QuestionState = 'collapsed';
  let mainCategoriesState: QuestionState = 'collapsed';
  let quantityInputState: QuestionState = 'collapsed';
  let amountsState: QuestionState = 'collapsed';
  let largeAmountsState: QuestionState = showLargeAmountsQuestion(qaState)
    ? 'collapsed'
    : 'hidden';
  switch (justAnswered) {
    case 'peopleInput': {
      if (direction === 'back') {
        navigation.dispatch({ type: 'GO_BACK' });
      }
      if (singleOtherGoodsMainCategory(mainCategories)) {
        quantityInputState = 'hidden';
      }
      mainCategoriesState = fwdNav(direction);
      if (!mainCategories.size) {
        quantityInputState = 'hidden';
      }
      break;
    }
    case 'mainCategories': {
      if (direction === 'update') {
        mainCategoriesState = 'expanded';
        if (singleOtherGoodsMainCategory(mainCategories)) {
          quantityInputState = 'hidden';
        }
        break;
      }
      peopleInputState = backNav(direction);
      if (singleOtherGoodsMainCategory(mainCategories)) {
        quantityInputState = 'hidden';
        amountsState = fwdNav(direction);
        break;
      }
      if (mainCategories.size) {
        quantityInputState = fwdNav(direction);
      }
      break;
    }
    case 'quantityInput': {
      mainCategoriesState = backNav(direction);
      amountsState = fwdNav(direction);
      break;
    }
    case 'amounts': {
      if (singleOtherGoodsMainCategory(mainCategories)) {
        mainCategoriesState = backNav(direction);
        quantityInputState = 'hidden';
      } else {
        quantityInputState = backNav(direction);
      }

      if (showLargeAmountsQuestion(qaState)) {
        largeAmountsState = fwdNav(direction);
      } else {
        if (direction === 'forward') {
          navigation.dispatch({ type: 'NAVIGATE', screen: 'Payment' });
        }
        largeAmountsState = 'hidden';
      }
      break;
    }
    case 'largeAmounts': {
      if (singleOtherGoodsMainCategory(mainCategories)) {
        quantityInputState = 'hidden';
      }
      amountsState = backNav(direction);
      if (direction === 'forward') {
        navigation.dispatch({ type: 'NAVIGATE', screen: 'Payment' });
      }
      break;
    }
    default:
  }
  return setQuestionState(qaState, {
    peopleInput: peopleInputState,
    mainCategories: mainCategoriesState,
    quantityInput: quantityInputState,
    amounts: amountsState,
    largeAmounts: largeAmountsState,
  });
};

export const collapseAllExistingExceptOne = (
  expand: QuestionType,
  qaState: QAStateEnriched
): QAStateEnriched => {
  const { questionStates } = qaState;

  const getQuestionState = (type: QuestionType) => {
    if (questionStates[type] === 'hidden') {
      return 'hidden';
    }
    return type === expand ? 'expanded' : 'collapsed';
  };

  return setQuestionState(qaState, {
    peopleInput: getQuestionState('peopleInput'),
    mainCategories: getQuestionState('mainCategories'),
    quantityInput: getQuestionState('quantityInput'),
    amounts: getQuestionState('amounts'),
    largeAmounts: getQuestionState('largeAmounts'),
  });
};

export const collapseQuestion = (
  question: QuestionType,
  qaState: QAStateEnriched
): QAStateEnriched => setQuestionState(qaState, {
    ...qaState.questionStates,
    [question]: 'collapsed',
  });
