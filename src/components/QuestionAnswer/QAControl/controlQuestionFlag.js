// @flow
import Immutable from 'immutable';
import type {
  QAState,
  QuestionFlag,
  QuestionType,
} from '../QuestionAnswerContainer';
import { getTotalPeople } from '../../../model/configurationApi';
import type { Basket } from '../../../model/types/basketPeopleTypes';

export const anyQuantitiesInBasket = (basket: Basket): boolean =>
  basket
    .valueSeq()
    .some(
      categoryBasketItem =>
        !!categoryBasketItem.getIn(['volume', 'quantities'], Immutable.List())
          .size
    );

const flagRules = (question: QuestionType, qaState: QAState): QuestionFlag => {
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
  qaState: QAState,
  questionFlag: { [QuestionType]: QuestionFlag }
): QAState => Object.assign({}, qaState, { questionFlag });

export const setInitFlags = (qaState: QAState): QAState =>
  setQuestionFlagInState(qaState, {
    peopleInput: flagRules('peopleInput', qaState),
    mainCategories: flagRules('mainCategories', qaState),
    quantityInput: flagRules('quantityInput', qaState),
  });

export const setQuestionFlag = (
  justUpdated: QuestionType,
  qaState: QAState
): QAState => ({
  ...qaState,
  questionFlag: {
    ...qaState.questionFlag,
    [justUpdated]: flagRules(justUpdated, qaState),
  },
});
