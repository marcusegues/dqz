// @flow
import type { LocaleType } from '../types/locale';
import {
  makeLocaleRecord,
  makeGeneralNSRecord,
  makeOnBoardingNSRecord,
  makeModalNSRecord,
  makeCategoriesNSRecord,
  makeQAFlowNSRecord,
  makeMainCategoriesNSRecord,
  makeMainCategoriesInputNSRecord,
  makeQuantityInputNSRecord,
  makePeopleInputNSRecord,
  makePaymentNSRecord,
} from '../types/locale';

export const fr: LocaleType = makeLocaleRecord({
  categories: makeCategoriesNSRecord({}),
  mainCategories: makeMainCategoriesNSRecord({}),
  general: makeGeneralNSRecord({
    declareGoods: 'Déclarer',
    pleaseSelect: 'Veuillez sélectionner',
    receipts: 'Reçus',
    guideline: 'Guide',
    information: 'Information',
    navbarFirst: 'Voyage',
    navbarSecond: 'Paiement',
    navbarThird: 'Reçu',
  }),
  onBoarding: makeOnBoardingNSRecord({
    welcome: 'Bienvenue à',
    onBoardingMessage:
      'Nous avons défini votre langue en fonction de vos paramètres système actuels',
    selectLanguage: 'Choisissez une autre langue',
  }),
  peopleInput: makePeopleInputNSRecord({}),
  mainCategoriesInput: makeMainCategoriesInputNSRecord({}),
  quantityInput: makeQuantityInputNSRecord({}),
  qaFlow: makeQAFlowNSRecord({}),
  modal: makeModalNSRecord({
    confirmPicker: 'Confirmer {{value}}',
    standardCategoryPicker: 'Standard',
    individualCategoryPicker: 'Exact',
    currencyPickerTitle: "Ramassez l'objet avec plus de 300.00 CHF",
    currencyPickerSubTitle:
      "Enregistrer la valeur nette de l'article dans sa devise d'origine:",
    currencyPickerCourse: 'bien sûr de',
  }),
  payment: makePaymentNSRecord({}),
});
