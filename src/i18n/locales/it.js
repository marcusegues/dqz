// @flow
import type { LocaleType } from '../types/locale';
import {
  makeLocaleRecord,
  makeGeneralNSRecord,
  makeOnBoardingNSRecord,
  makeLargeAmountInputNSRecord,
} from '../types/locale';

export const it: LocaleType = makeLocaleRecord({
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
});
