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

const setQuestionFlagInState = (
  qaState: QAState,
  questionFlag: { [QuestionType]: QuestionFlag }
): QAState => Object.assign({}, qaState, { questionFlag });

export const setInitFlags = (qaState: QAState): QAState => {
  const { settings } = qaState;
  const main = settings.get('mainCategories');
  return setQuestionFlagInState(qaState, {
    peopleInput: getTotalPeople(qaState.people) ? 'complete' : 'incomplete',
    mainCategories: main.size ? 'complete' : 'incomplete',
    quantityInput:
      main.size && anyQuantitiesInBasket(qaState.basket)
        ? 'complete'
        : 'incomplete',
  });
};

export const setQuestionFlag = (
  justUpdated: QuestionType,
  qaState: QAState
): QAState => {
  let updatedFlag;
  switch (justUpdated) {
    case 'peopleInput': {
      updatedFlag = getTotalPeople(qaState.people) ? 'complete' : 'incomplete';
      break;
    }
    case 'mainCategories': {
      updatedFlag = qaState.settings.get('mainCategories').size
        ? 'complete'
        : 'incomplete';
      break;
    }
    case 'quantityInput': {
      updatedFlag =
        qaState.settings.get('mainCategories').size &&
        anyQuantitiesInBasket(qaState.basket)
          ? 'complete'
          : 'incomplete';
      break;
    }
    default:
  }
  return {
    ...qaState,
    questionFlag: {
      ...qaState.questionFlag,
      [justUpdated]: updatedFlag,
    },
  };
};
