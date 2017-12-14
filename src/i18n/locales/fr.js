// @flow
import type { LocaleType } from '../types/locale';
import {
  makeLocaleRecord,
  makeGeneralNSRecord,
  makeOnBoardingNSRecord,
  makeLargeAmountInputNSRecord,
} from '../types/locale';

export const fr: LocaleType = makeLocaleRecord({
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
