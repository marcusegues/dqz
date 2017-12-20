// @flow
import type { LocaleType } from '../types/locale';
import {
  makeLocaleRecord,
  makeGeneralNSRecord,
  makeOnBoardingNSRecord,
  makeLargeAmountInputNSRecord,
  makeModalNSRecord,
  makeCategoriesNSRecord,
  makeQAFlowNSRecord,
  makeMainCategoriesNSRecord,
} from '../types/locale';

export const it: LocaleType = makeLocaleRecord({
  categories: makeCategoriesNSRecord({}),
  mainCategories: makeMainCategoriesNSRecord({}),
  general: makeGeneralNSRecord({
    declareGoods: '🛃️',
    pleaseSelect: '',
    receipts: '🦄',
    guideline: '😸',
    information: '🏎',
    navbarFirst: '✈️',
    navbarSecond: '💸',
    navbarThird: '📇',
  }),
  onBoarding: makeOnBoardingNSRecord({
    onBoardingMessage:
      'Abbiamo impostato la tua lingua in base alle tue attuali impostazioni di sistema',
    selectLanguage: 'Seleziona una lingua diversa',
  }),
  largeAmountInput: makeLargeAmountInputNSRecord({
    pleaseInput: 'Si prega di inserire i valori',
    totalLargeAmount:
      'il valore totale degli oggetti di grandi dimensioni è {{value}}.',
  }),
  qaFlow: makeQAFlowNSRecord({}),
  modal: makeModalNSRecord({
    confirmPicker: '💰 {{value}}',
    standardCategoryPicker: '🏟️',
    individualCategoryPicker: '🔀',
  }),
});
