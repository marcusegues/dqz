// @flow

import type {
  DirectionType,
  QAStateEnriched,
  QuestionState,
  QuestionType,
} from '../QuestionAnswerContainer';
import { getTotalPeople } from '../../../model/configurationApi';
import { hasLargeAmount } from '../../../model/utils';
import type { Navigation } from '../../../types/generalTypes';
import type { MainCategories } from '../../../types/reducers/declaration';
import { anyQuantitiesInBasket, flagRules } from './controlQuestionFlag';

const singleOtherGoodsMainCategory = (
  mainCategories: MainCategories
): boolean => mainCategories.size === 1 && mainCategories.has('OtherGoods');

const showLargeAmountsQuestion = (qaState: QAStateEnriched) => {
  const { people, amounts } = qaState;
  return (
    hasLargeAmount(amounts, qaState.currencies) && getTotalPeople(people) > 1
  );
};

const setQuestionState = (
  qaState: QAStateEnriched,
  questionStates: { [QuestionType]: QuestionState }
): QAStateEnriched => Object.assign({}, qaState, { questionStates });

export const setInitStates = (qaState: QAStateEnriched): QAStateEnriched => {
  const { settings } = qaState;
  const main = settings.get('mainCategories');
  return setQuestionState(qaState, {
    peopleInput: main.size ? 'collapsed' : 'expanded',
    mainCategories: main.size ? 'collapsed' : 'hidden',
    quantityInput:
      main.size && !singleOtherGoodsMainCategory(main) ? 'collapsed' : 'hidden',
    amounts: main.size ? 'collapsed' : 'hidden',
    largeAmounts: showLargeAmountsQuestion(qaState) ? 'collapsed' : 'hidden',
  });
};

const fwdNav = (direction: DirectionType): QuestionState =>
  direction === 'forward' ? 'expanded' : 'collapsed';

const backNav = (direction: DirectionType): QuestionState =>
  direction === 'back' ? 'expanded' : 'collapsed';

export const setQuestionStates = (
  justAnswered: QuestionType,
  direction: DirectionType,
  navigation: Navigation,
  qaState: QAStateEnriched
): QAStateEnriched => {
  const { settings } = qaState;
  const mainCategories = settings.get('mainCategories');
  // do case analysis
  const newQuestionStates = {
    peopleInput:
      flagRules('peopleInput', qaState) === 'complete' ? 'collapsed' : 'hidden',
    mainCategories:
      flagRules('mainCategories', qaState) === 'complete'
        ? 'collapsed'
        : 'hidden',
    quantityInput:
      flagRules('quantityInput', qaState) === 'complete'
        ? 'collapsed'
        : 'hidden',
    amounts:
      flagRules('amounts', qaState) === 'complete' ? 'collapsed' : 'hidden',
    largeAmounts:
      flagRules('largeAmounts', qaState) === 'complete'
        ? 'collapsed'
        : 'hidden',
  };

  switch (direction) {
    case 'back': {
      switch (justAnswered) {
        case 'peopleInput': {
          navigation.dispatch({ type: 'GO_BACK' });
          break;
        }
        case 'mainCategories': {
          newQuestionStates.peopleInput = 'expanded';
          break;
        }
        case 'quantityInput': {
          newQuestionStates.mainCategories = 'expanded';
          break;
        }
        case 'amounts': {
          amounts = qaState.amounts.size ? 'collapsed' : 'hidden';
          if (singleOtherGoodsMainCategory(mainCategories)) {
            newQuestionStates.mainCategories = 'expanded';
          } else {
            newQuestionStates.quantityInput = 'expanded';
          }
          break;
        }
        case 'largeAmounts': {
          newQuestionStates.amounts = 'expanded';
          break;
        }
        default:
      }
      break;
    }
    case 'forward': {
      switch (justAnswered) {
        case 'peopleInput': {
          newQuestionStates.mainCategories = 'expanded';
          break;
        }
        case 'mainCategories': {
          if (singleOtherGoodsMainCategory(mainCategories)) {
            newQuestionStates.amounts = 'expanded';
          } else {
            newQuestionStates.quantityInput = 'expanded';
          }
          break;
        }
        case 'quantityInput': {
          newQuestionStates.amounts = 'expanded';
          break;
        }
        case 'amounts': {
          if (showLargeAmountsQuestion(qaState)) {
            newQuestionStates.largeAmounts = 'expanded';
          } else {
            navigation.dispatch({ type: 'NAVIGATE', screen: 'Payment' });
          }
          break;
        }
        case 'largeAmounts': {
          navigation.dispatch({ type: 'NAVIGATE', screen: 'Payment' });
          break;
        }
        default:
      }
      break;
    }
    case 'update': {
      switch (justAnswered) {
        case 'peopleInput': {
          newQuestionStates.peopleInput = 'expanded';
          break;
        }
        case 'mainCategories': {
          newQuestionStates.mainCategories = 'expanded';
          break;
        }
        case 'quantityInput': {
          newQuestionStates.quantityInput = 'expanded';
          break;
        }
        case 'amounts': {
          newQuestionStates.amounts = 'expanded';
          break;
        }
        case 'largeAmounts': {
          newQuestionStates.largeAmounts = 'expanded';
          break;
        }
        default:
      }
      break;
    }
    default:
  }

  return setQuestionState(qaState, newQuestionStates);
};

export const collapseAllExistingExceptOne = (
  expand: QuestionType,
  qaState: QAStateEnriched
): QAStateEnriched => {
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
    amounts: getQuestionState('amounts'),
    largeAmounts: getQuestionState('largeAmounts'),
  });
};

export const collapseQuestion = (
  question: QuestionType,
  qaState: QAStateEnriched
): QAStateEnriched =>
  setQuestionState(qaState, {
    ...qaState.questionStates,
    [question]: 'collapsed',
  });
