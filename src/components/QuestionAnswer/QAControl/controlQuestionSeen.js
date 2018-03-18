import type { QuestionSeen, QuestionType } from '../QuestionAnswerContainer';

const setQuestionSeenInState = (
  qaState: QAStateEnriched,
  questionSeen: { [QuestionType]: QuestionSeen }
): QAStateEnriched => Object.assign({}, qaState, { questionSeen });

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
