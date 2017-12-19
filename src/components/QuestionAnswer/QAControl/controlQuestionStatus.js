// @flow
import type { QAState, questionType } from '../QuestionAnswerContainer';
import { getTotalPeople } from '../../../model/configurationApi';
import type { Basket } from '../../../model/types/basketPeopleTypes';

const anyQuantitiesInBasket = (basket: Basket): boolean => {
  return basket.valueSeq().some(categoryBasketItem => {
    if (categoryBasketItem.getIn(['volume', 'quantity'])) {
      return true;
    }
    return false;
  });
};

export const setQuestionStatus = (
  justUpdated: questionType,
  qaState: QAState
): QAState => {
  let updatedStatus;
  switch (justUpdated) {
    case 'peopleInput': {
      updatedStatus = getTotalPeople(qaState.people)
        ? 'complete'
        : 'incomplete';
      break;
    }
    case 'mainCategories': {
      updatedStatus = qaState.settings.get('mainCategories').size
        ? 'complete'
        : 'incomplete';
      break;
    }
    case 'quantityInput': {
      updatedStatus =
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
    questionStatus: {
      ...qaState.questionStatus,
      [justUpdated]: updatedStatus,
    },
  };
};
