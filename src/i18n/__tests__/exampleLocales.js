// @flow
/* global expect, test, describe */
import type { LocaleType } from '../types/locale';
import {
  makeLocaleRecord,
  makeGeneralNSRecord,
  makeOnBoardingNSRecord,
  makeLargeAmountInputNSRecord,
} from '../types/locale';

// this is solely to trick jest.
test('', () => expect(true).toBeTruthy());

export const en1: LocaleType = makeLocaleRecord({
  general: makeGeneralNSRecord({
    declareGoods: 'Declare Goods',
    pleaseSelect: 'Please Select',
  }),
  onBoarding: makeOnBoardingNSRecord({
    onBoardingMessage:
      'We’ve set your language based on your current system settings:',
    selectLanguage: 'Select a different language',
  }),
  largeAmountInput: makeLargeAmountInputNSRecord({
    pleaseInput: 'Please input the values',
    totalLargeAmount: 'Total value of large items is {{value}}.',
  }),
});

export const de1: LocaleType = makeLocaleRecord({
  general: makeGeneralNSRecord({
    declareGoods: 'Waren Deklarieren',
    pleaseSelect: 'Bitte auswählen',
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
});

export const fr1: LocaleType = makeLocaleRecord({
  general: makeGeneralNSRecord({
    declareGoods: 'Déclarer les marchandises',
    pleaseSelect: 'Veuillez sélectionner',
  }),
  onBoarding: makeOnBoardingNSRecord({
    onBoardingMessage:
      'Nous avons défini votre langue en fonction de vos paramètres système actuels',
    selectLanguage: 'Choisissez une autre langue',
  }),
  largeAmountInput: makeLargeAmountInputNSRecord({
    pleaseInput: 'Veuillez entrer les valeurs',
    totalLargeAmount: 'La valeur totale des gros articles est {{value}}.',
  }),
});

export const it1: LocaleType = makeLocaleRecord({
  general: makeGeneralNSRecord({
    declareGoods: 'Dichiarare le merci',
    pleaseSelect: 'Per favore seleziona',
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

export const en2: LocaleType = makeLocaleRecord({
  general: makeGeneralNSRecord({
    declareGoods: 'Declare Goods',
    pleaseSelect: 'Please Select',
    extraKey: 'extraKey',
  }),
  onBoarding: makeOnBoardingNSRecord({
    onBoardingMessage:
      'We’ve set your language based on your current system settings:',
    selectLanguage: 'Select a different language',
  }),
  largeAmountInput: makeLargeAmountInputNSRecord({
    pleaseInput: 'Please input the values',
    totalLargeAmount: 'Total value of large items is {{value}}.',
  }),
});

export const en3: LocaleType = makeLocaleRecord({
  general: makeGeneralNSRecord({
    declareGoods: 'Declare Goods',
    pleaseSelect: 'Please Select',
    extraKey: 'extraKey',
  }),
  onBoarding: makeOnBoardingNSRecord({
    onBoardingMessage:
      'We’ve set your language based on your current system settings:',
    selectLanguage: 'Select a different language',
  }),
  largeAmountInput: makeLargeAmountInputNSRecord({
    pleaseInput: 'Please input the values',
    totalLargeAmount: 'Total value of large items is {{value}}.',
  }),
  extraKey: 'extraKey',
});
