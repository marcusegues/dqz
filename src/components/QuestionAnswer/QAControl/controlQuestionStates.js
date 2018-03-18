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
import { setQuestionSeen } from './controlQuestionSeen';

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
  const { settings, questionSeen } = qaState;
  const mainCategories = settings.get('mainCategories');
  // do case analysis
  let peopleInputState: QuestionState = 'hidden';
  let mainCategoriesState: QuestionState = 'hidden';
  let quantityInputState: QuestionState = 'hidden';
  let amountsState: QuestionState = 'hidden';
  let largeAmountsState: QuestionState = 'hidden';

  switch (justAnswered) {
    case 'peopleInput': {
      if (direction === 'back') {
        navigation.dispatch({ type: 'GO_BACK' });
      }
      peopleInputState = 'collapsed';
      mainCategoriesState = fwdNav(direction);
      if (
        !singleOtherGoodsMainCategory(mainCategories) &&
        mainCategories.size &&
        questionSeen.mainCategories
      ) {
        quantityInputState = 'collapsed';
      }

      if (mainCategories.size && questionSeen.amounts) {
        amountsState = 'collapsed';
      }
      if (showLargeAmountsQuestion(qaState) && questionSeen.largeAmounts) {
        largeAmountsState = 'collapsed';
      }

      break;
    }
    case 'mainCategories': {
      peopleInputState = backNav(direction);
      if (direction === 'update') {
        mainCategoriesState = 'expanded';
        if (
          !singleOtherGoodsMainCategory(mainCategories) &&
          questionSeen.quantityInput
        ) {
          quantityInputState = 'collapsed';
        }
        amountsState = questionSeen.amounts ? 'collapsed' : 'hidden';
        largeAmountsState =
          questionSeen.largeAmounts && showLargeAmountsQuestion(qaState)
            ? 'collapsed'
            : 'hidden';
        break;
      } else {
        mainCategoriesState = 'collapsed';
      }
      if (singleOtherGoodsMainCategory(mainCategories)) {
        quantityInputState = 'hidden';
        amountsState = fwdNav(direction);
        break;
      }
      if (mainCategories.size) {
        quantityInputState = fwdNav(direction);
      } else {
        amountsState = fwdNav(direction);
      }
      if (showLargeAmountsQuestion(qaState) && questionSeen.largeAmounts) {
        largeAmountsState = 'collapsed';
      }
      break;
    }
    case 'quantityInput': {
      peopleInputState = 'collapsed';
      mainCategoriesState = backNav(direction);
      quantityInputState = 'collapsed';
      amountsState = fwdNav(direction);
      if (showLargeAmountsQuestion(qaState) && questionSeen.largeAmounts) {
        largeAmountsState = 'collapsed';
      }
      break;
    }
    case 'amounts': {
      peopleInputState = 'collapsed';

      if (singleOtherGoodsMainCategory(mainCategories)) {
        mainCategoriesState = backNav(direction);
        quantityInputState = 'hidden';
      } else {
        mainCategoriesState = 'collapsed';
        quantityInputState = backNav(direction);
      }
      amountsState = 'collapsed';
      if (showLargeAmountsQuestion(qaState)) {
        largeAmountsState = fwdNav(direction);
      } else {
        largeAmountsState = 'hidden';
        if (direction === 'forward') {
          navigation.dispatch({ type: 'NAVIGATE', screen: 'Payment' });
        }
      }
      break;
    }
    case 'largeAmounts': {
      peopleInputState = 'collapsed';
      mainCategoriesState = 'collapsed';
      if (singleOtherGoodsMainCategory(mainCategories)) {
        quantityInputState = 'hidden';
      }
      amountsState = backNav(direction);
      if (direction === 'forward') {
        navigation.dispatch({ type: 'NAVIGATE', screen: 'Payment' });
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
