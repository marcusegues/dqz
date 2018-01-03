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
  makeInformationNSRecord,
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
    currencyPickerTitle: "Ramassez l'objet avec plus de CHF {{value}}",
    currencyPickerSubTitle:
      "Enregistrer la valeur nette de l'article dans sa devise d'origine:",
    currencyPickerRate: 'i18n',
  }),
  payment: makePaymentNSRecord({}),

  information: makeInformationNSRecord({
    proceedinAtTheCustoms: 'I18N',
    proceedinAtTheCustomsSubText: 'I18N',
    travelDocuments: 'I18N',
    travelDocumentsSubText: 'I18N',
    haveGoodsWithMe: 'I18N',
    haveGoodsWithMeSubText: 'I18N',
    haveAnimalsOrPlantsWithMe: 'I18N',
    haveAnimalsOrPlantsWithMeSubText: 'I18N',
    travelingWithVehicle: 'I18N',
    travelingWithVehicleSubText: 'I18N',
    entryByTrain: 'I18N',
    entryByTrainSubText: 'I18N',
  }),
});
