// @flow
import Immutable from 'immutable';
import type {
  QAStateEnriched,
  QuestionFlag,
  QuestionType,
} from '../QuestionAnswerContainer';
import { getTotalPeople } from '../../../model/configurationApi';
import type { Basket } from '../../../model/types/basketPeopleAmountsTypes';

export const anyQuantitiesInBasket = (basket: Basket): boolean =>
  basket
    .valueSeq()
    .some(
      categoryBasketItem =>
        !!categoryBasketItem.getIn(['volume', 'quantities'], Immutable.List())
          .size
    );

const flagRules = (
  question: QuestionType,
  qaState: QAStateEnriched
): QuestionFlag => {
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
