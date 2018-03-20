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
import { anyQuantitiesInBasket } from './controlQuestionFlag';

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
  let peopleInputState: QuestionState = qaState.questionStates.peopleInput;
  let mainCategoriesState: QuestionState =
    qaState.questionStates.mainCategories;
  let quantityInputState: QuestionState = qaState.questionStates.quantityInput;
  let amountsState: QuestionState = qaState.questionStates.amounts;
  let largeAmountsState: QuestionState = qaState.questionStates.largeAmounts;

  switch (direction) {
    case 'back': {
      switch (justAnswered) {
        case 'peopleInput': {
          navigation.dispatch({ type: 'GO_BACK' });
          break;
        }
        case 'mainCategories': {
          peopleInputState = 'expanded';
          mainCategoriesState = mainCategories.size ? 'collapsed' : 'hidden';
          break;
        }
        case 'quantityInput': {
          mainCategoriesState = 'expanded';
          quantityInputState = anyQuantitiesInBasket(qaState.basket)
            ? 'collapsed'
            : 'hidden';
          break;
        }
        case 'amounts': {
          amountsState = qaState.amounts.size ? 'collapsed' : 'hidden';
          if (singleOtherGoodsMainCategory(mainCategories)) {
            mainCategoriesState = 'expanded';
          } else {
            quantityInputState = 'expanded';
          }
          break;
        }
        case 'largeAmounts': {
          largeAmountsState = 'collapsed';
          amountsState = 'expanded';
          break;
        }
        default:
      }
      break;
    }
    case 'forward': {
      switch (justAnswered) {
        case 'peopleInput': {
          peopleInputState = 'collapsed';
          mainCategoriesState = 'expanded';
          break;
        }
        case 'mainCategories': {
          mainCategoriesState = 'collapsed';
          if (singleOtherGoodsMainCategory(mainCategories)) {
            amountsState = 'expanded';
          } else {
            quantityInputState = 'expanded';
          }
          break;
        }
        case 'quantityInput': {
          quantityInputState = 'collapsed';
          amountsState = 'expanded';
          break;
        }
        case 'amounts': {
          if (showLargeAmountsQuestion(qaState)) {
            amountsState = 'collapsed';
            largeAmountsState = 'expanded';
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
          break;
        }
        case 'mainCategories': {
          break;
        }
        case 'quantityInput': {
          break;
        }
        case 'amounts': {
          break;
        }
        case 'largeAmounts': {
          break;
        }
        default:
      }
      break;
    }
    default:
  }

  return setQuestionState(qaState, {
    peopleInput: peopleInputState,
    mainCategories: mainCategoriesState,
    quantityInput: quantityInputState,
    amounts: amountsState,
    largeAmounts: largeAmountsState,
  });
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
): QAStateEnriched => setQuestionState(qaState, {
    ...qaState.questionStates,
    [question]: 'collapsed',
  });
