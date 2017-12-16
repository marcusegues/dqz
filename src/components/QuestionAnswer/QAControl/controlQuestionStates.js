// @flow

import type {
  QAState,
  questionState,
  questionType,
} from '../QuestionAnswerContainer';

const setQuestionState = (
  qaState: QAState,
  questionStates: { [questionType]: questionState }
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
  justAnswered: questionType,
  qaState: QAState
): QAState => {
  const { settings } = qaState;
  const mainCategories = settings.get('mainCategories');
  // do case analysis
  const peopleInputState: questionState = 'collapsed';
  let mainCategoriesState: questionState = 'collapsed';
  let quantityInputState: questionState = 'collapsed';

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
  expand: questionType,
  qaState: QAState
): QAState => {
  const { questionStates } = qaState;

  const getQuestionState = (type: questionType) => {
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
