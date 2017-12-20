// @flow

import type {
  QAState,
  QuestionState,
  QuestionType,
} from '../QuestionAnswerContainer';

const setQuestionState = (
  qaState: QAState,
  questionStates: { [QuestionType]: QuestionState }
): QAState => Object.assign({}, qaState, { questionStates });

export const setInitStates = (qaState: QAState): QAState => {
  const { settings } = qaState;
  const main = settings.get('mainCategories');
  return setQuestionState(qaState, {
    peopleInput: main.size ? 'collapsed' : 'expanded',
    mainCategories: main.size ? 'collapsed' : 'hidden',
    quantityInput: main.size ? 'collapsed' : 'hidden',
  });
};

export const setQuestionStates = (
  justAnswered: QuestionType,
  qaState: QAState
): QAState => {
  const { settings } = qaState;
  const mainCategories = settings.get('mainCategories');
  // do case analysis
  const peopleInputState: QuestionState = 'collapsed';
  let mainCategoriesState: QuestionState = 'collapsed';
  let quantityInputState: QuestionState = 'collapsed';

  switch (justAnswered) {
    case 'peopleInput': {
      if (!mainCategories.size) {
        mainCategoriesState = 'expanded';
        quantityInputState = 'hidden';
      }
      break;
    }
    case 'mainCategories': {
      if (mainCategories.size) {
        quantityInputState = 'expanded';
      }
      break;
    }
    default:
  }
  return setQuestionState(qaState, {
    peopleInput: peopleInputState,
    mainCategories: mainCategoriesState,
    quantityInput: quantityInputState,
  });
};

export const collapseAllExistingExceptOne = (
  expand: QuestionType,
  qaState: QAState
): QAState => {
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
  });
};
