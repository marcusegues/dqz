// @flow
import Immutable from 'immutable';
import type { QAStateEnriched } from '../QuestionAnswerContainer';
import { getTotalPeople } from '../../../model/configurationApi';
import type { Basket } from '../../../model/types/basketPeopleAmountsTypes';
import { showLargeAmountsQuestion } from './controlQuestionStates';
import type { QuestionFlag, QuestionType } from '../types/questionAnswerTypes';
import { flatNormalAmounts } from '../../../model/utils';

export const anyQuantitiesInBasket = (basket: Basket): boolean =>
  basket
    .valueSeq()
    .some(
      categoryBasketItem =>
        !!categoryBasketItem.getIn(['volume', 'quantities'], Immutable.List())
          .size
    );

export const flagRules = (
  question: QuestionType,
  qaState: QAStateEnriched
): QuestionFlag => {
  // debugger;
  const { settings } = qaState;
  const main = settings.get('mainCategories');
  switch (question) {
    case 'peopleInput': {
      return getTotalPeople(qaState.people) ? 'complete' : 'incomplete';
    }
    case 'mainCategories': {
      return main.size ? 'complete' : 'incomplete';
    }
    case 'quantityInput': {
      return main.size && anyQuantitiesInBasket(qaState.basket)
        ? 'complete'
        : 'incomplete';
    }
    case 'amounts': {
      return flatNormalAmounts(qaState.amounts).length !== 0
        ? 'complete'
        : 'incomplete';
    }
    case 'largeAmounts': {
      return showLargeAmountsQuestion(qaState) &&
        flatNormalAmounts(qaState.amounts).length !== 0
        ? 'complete'
        : 'incomplete';
    }
    default: {
      return 'incomplete';
    }
  }
};

const setQuestionFlagInState = (
  qaState: QAStateEnriched,
  questionFlag: { [QuestionType]: QuestionFlag }
): QAStateEnriched => Object.assign({}, qaState, { questionFlag });

export const setInitFlags = (qaState: QAStateEnriched): QAStateEnriched =>
  setQuestionFlagInState(qaState, {
    peopleInput: flagRules('peopleInput', qaState),
    mainCategories: flagRules('mainCategories', qaState),
    quantityInput: flagRules('quantityInput', qaState),
    amounts: flagRules('amounts', qaState),
    largeAmounts: flagRules('largeAmounts', qaState),
  });

export const setQuestionFlag = (
  justUpdated: QuestionType,
  qaState: QAStateEnriched
): QAStateEnriched => ({
  ...qaState,
  questionFlag: {
    ...qaState.questionFlag,
    [justUpdated]: flagRules(justUpdated, qaState),
  },
});
