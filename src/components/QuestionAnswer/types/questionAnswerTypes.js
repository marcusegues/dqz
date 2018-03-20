// @flow
export type QuestionState = 'expanded' | 'hidden' | 'collapsed' | 'warning';
export type QuestionType =
  | 'peopleInput'
  | 'mainCategories'
  | 'quantityInput'
  | 'amounts'
  | 'largeAmounts'
  | 'none';
export type QuestionStates = { [QuestionType]: QuestionState };
export type QuestionFlag = 'complete' | 'incomplete';
export type QAState = {
  questionStates: QuestionStates,
  questionFlag: { [QuestionType]: QuestionFlag },
};
