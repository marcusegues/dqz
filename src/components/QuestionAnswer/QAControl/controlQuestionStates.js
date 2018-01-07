// @flow

import type {
  DirectionType,
  QAStateEnriched,
  QuestionState,
  QuestionType,
} from '../QuestionAnswerContainer';
import { getTotalPeople } from '../../../model/configurationApi';
import { flatLargeAmounts } from '../../../model/utils';
import type { FlatAmount } from '../../../model/utils';

const showLargeAmountsQuestion = (qaState: QAStateEnriched) => {
  const { people, amounts } = qaState;
  const largeAmounts: Array<FlatAmount> = flatLargeAmounts(amounts);
  const hasLargeAmounts: boolean =
    largeAmounts.reduce((a, v) => a + v.amount, 0) > 0;

  // TODO important check if large amounts present!
  return hasLargeAmounts || getTotalPeople(people) > 1;
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
    quantityInput: main.size ? 'collapsed' : 'hidden',
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
      mainCategoriesState = fwdNav(direction);
      if (!mainCategories.size) {
        quantityInputState = 'hidden';
      }
      break;
    }
    case 'mainCategories': {
      peopleInputState = backNav(direction);
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
      quantityInputState = backNav(direction);
      largeAmountsState = showLargeAmountsQuestion(qaState)
        ? 'expanded'
        : 'hidden';
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
