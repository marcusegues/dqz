// @flow
import type {QAStateEnriched, QuestionSeen, QuestionType} from '../QuestionAnswerContainer';

export const setQuestionSeenInState = (
  qaState: QAStateEnriched,
  questionSeen: { [QuestionType]: QuestionSeen }
): QAStateEnriched =>
  Object.assign({}, qaState, {
    questionSeen: { ...qaState.questionSeen, ...questionSeen },
  });

export const setInitSeen = (qaState: QAStateEnriched): QAStateEnriched =>
  setQuestionSeenInState(qaState, {
    peopleInput: true,
    mainCategories: false,
    quantityInput: false,
    amounts: false,
    largeAmounts: false,
  });

export const setQuestionSeen = (
  questionJustSeen: QuestionType,
  qaState: QAStateEnriched
): QAStateEnriched => ({
  ...qaState,
  questionSeen: {
    ...qaState.questionSeen,
    [questionJustSeen]: true,
  },
});

export const setQuestionNotSeen = (
  questionJustSeen: QuestionType,
  qaState: QAStateEnriched
): QAStateEnriched => ({
  ...qaState,
  questionSeen: {
    ...qaState.questionSeen,
    [questionJustSeen]: false,
  },
});
