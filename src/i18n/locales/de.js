// @flow
import type { LocaleType } from '../types/locale';
import {
  makeLocaleRecord,
  makeGeneralNSRecord,
  makeOnBoardingNSRecord,
  makeLargeAmountInputNSRecord,
  makeQAFlowNSRecord,
} from '../types/locale';

export const de: LocaleType = makeLocaleRecord({
  general: makeGeneralNSRecord({
    declareGoods: 'Deklarieren',
    pleaseSelect: 'Bitte auswählen',
    receipts: 'Quittungen',
    calculator: 'Zollrechner',
    information: 'Wisenswertes',
  }),
  onBoarding: makeOnBoardingNSRecord({
    onBoardingMessage:
      'Wir haben Ihre Sprache basierend auf Ihren aktuellen Systemeinstellungen festgelegt',
    selectLanguage: 'Wählen Sie eine andere Sprache',
  }),
  largeAmountInput: makeLargeAmountInputNSRecord({
    pleaseInput: 'Bitte geben Sie die Menge ein',
    totalLargeAmount: 'Insgesamt grosse Mengen sind {{value}}.',
  }),
  qaFlow: makeQAFlowNSRecord({
    toOverview: 'Zur Übersicht',
  }),
});
