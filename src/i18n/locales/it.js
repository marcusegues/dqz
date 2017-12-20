// @flow
import type { LocaleType } from '../types/locale';
import {
  makeLocaleRecord,
  makeGeneralNSRecord,
  makeOnBoardingNSRecord,
  makeLargeAmountInputNSRecord,
  makeModalNSRecord,
  makeCategoriesNSRecord,
} from '../types/locale';

export const it: LocaleType = makeLocaleRecord({
  categories: makeCategoriesNSRecord({
    Meat: 'Meat',
    Butter: 'Butter',
    Oils: 'Oils',
    OtherFood: 'Other Foods',
    AlcSoft: 'Alcohol <18%',
    AlcHard: 'Alcohol >18%',
    Cigarettes: 'Cigarettes',
    Tobacco: 'Tobacco',
    Med: 'Medicine',
    Books: 'Books',
    Magazines: 'Magazines',
    Flowers: 'Flowers',
    AnimalFeed: 'Animal Feed',
    Fertilizer: 'Fertilizer',
    Other: 'Other Goods',
  }),
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
  modal: makeModalNSRecord({
    confirmPicker: '💰 {{value}}',
    standardCategoryPicker: '🏟️',
    individualCategoryPicker: '🔀',
  }),
});
