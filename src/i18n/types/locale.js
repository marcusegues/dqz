// @flow
import type { RecordOf, RecordFactory } from 'immutable';
import Immutable from 'immutable';

type MainCategoriesNS = {
  Foods: string,
  Alcohol: string,
  TobaccoProducts: string,
  OtherGoods: string,
};

export const makeMainCategoriesNSRecord: RecordFactory<
  MainCategoriesNS
> = Immutable.Record({
  Foods: 'i18n',
  Alcohol: 'i18n',
  TobaccoProducts: 'i18n',
  OtherGoods: 'i18n',
});

export type MainCategoriesNSType = RecordOf<MainCategoriesNS>;

type CategoriesNS = {
  Meat: string,
  Butter: string,
  Oils: string,
  OtherFood: string,
  AlcSoft: string,
  AlcHard: string,
  Cigarettes: string,
  Tobacco: string,
  Meds: string,
  Books: string,
  Magazines: string,
  Flowers: string,
  AnimalFeed: string,
  Fertilizer: string,
  Other: string,
};

export const makeCategoriesNSRecord: RecordFactory<
  CategoriesNS
> = Immutable.Record({
  Meat: 'i18n',
  Butter: 'i18n',
  Oils: 'i18n',
  OtherFood: 'i18n',
  AlcSoft: 'i18n',
  AlcHard: 'i18n',
  Cigarettes: 'i18n',
  Tobacco: 'i18n',
  Meds: 'i18n',
  Books: 'i18n',
  Magazines: 'i18n',
  Flowers: 'i18n',
  AnimalFeed: 'i18n',
  Fertilizer: 'i18n',
  Other: 'i18n',
});

export type CategoriesNSType = RecordOf<CategoriesNS>;

type GeneralNS = {
  declareGoods: string,
  pleaseSelect: string,
  guideline: string,
  receipts: string,
  information: string,
  navbarFirst: string,
  navbarSecond: string,
  navbarThird: string,
  customsDuty: string,
  customsVat: string,
  goodCategories: string,
  confirm: string,
  toPayment: string,
  buttonContinue: string,
  buttonBack: string,
};

export const makeGeneralNSRecord: RecordFactory<GeneralNS> = Immutable.Record({
  declareGoods: 'i18n',
  pleaseSelect: 'i18n',
  guideline: 'i18n',
  receipts: 'i18n',
  information: 'i18n',
  navbarFirst: 'i18n',
  navbarSecond: 'i18n',
  navbarThird: 'i18n',
  customsDuty: 'i18n',
  customsVat: 'i18n',
  goodCategories: 'i18n',
  confirm: 'i18n',
  toPayment: 'i18n',
  buttonContinue: 'i18n',
  buttonBack: 'i18n',
});

export type GeneralNSType = RecordOf<GeneralNS>;

type OnBoardingNS = {
  welcome: string,

  onBoardingMessage: string,
  selectLanguage: string,
  confirmationVat: string,
  confirmationVat2: string,
  vatInformation: string,
};

export const makeOnBoardingNSRecord: RecordFactory<
  OnBoardingNS
> = Immutable.Record({
  welcome: 'i18n',
  onBoardingMessage: 'i18n',
  selectLanguage: 'i18n',
  confirmationVat: 'i18n',
  confirmationVat2: 'i18n',
  vatInformation: 'i18n',
});

export type OnBoardingNSType = RecordOf<OnBoardingNS>;

type PeopleInputNS = {
  peopleInputQuestion: string,
};

export const makePeopleInputNSRecord: RecordFactory<
  PeopleInputNS
> = Immutable.Record({
  peopleInputQuestion: 'i18n',
});

export type PeopleInputNSType = RecordOf<PeopleInputNS>;

type MainCategoriesInputNS = {
  mainCategoriesQuestion: string,
};

export const makeMainCategoriesInputNSRecord: RecordFactory<
  MainCategoriesInputNS
> = Immutable.Record({
  mainCategoriesQuestion: 'i18n',
});

export type MainCategoriesInputNSType = RecordOf<MainCategoriesInputNS>;

type QuantityInputNS = {
  quantityInput: string,
};

export const makeQuantityInputNSRecord: RecordFactory<
  QuantityInputNS
> = Immutable.Record({
  quantityInput: 'i18n',
});

export type QuantityInputNSType = RecordOf<QuantityInputNS>;

type AmountInputNS = {
  amountInput: string,
  amountInputLargeItem: string,
  amountInputMoreThan300Text: string,
  amountInputAddItem: string,
  amountInputAddItem: string,
};

export const makeAmountInputNSRecord: RecordFactory<
  AmountInputNS
> = Immutable.Record({
  amountInput: 'i18n',
  amountInputLargeItem: 'i18n',
  amountInputMoreThan300Text: 'i18n',
  amountInputAddItem: 'i18n',
});

export type AmountInputNSType = RecordOf<AmountInputNS>;

type PaymentNS = {
  overViewTitle: string,
  dutyColumn: string,
  sumText: string,
};

export const makePaymentNSRecord: RecordFactory<PaymentNS> = Immutable.Record({
  overViewTitle: 'i18n',
  dutyColumn: 'i18n',
  sumText: 'i18n',
});

export type PaymentNSType = RecordOf<PaymentNS>;

type QAFlowNS = {
  declareGoods: string,
  toOverview: string,
  adult: string,
  adultInfo: string,
  adultCount: string,
  adultCount_plural: string,
  minor: string,
  minorInfo: string,
  minorCount: string,
  minorCount_plural: string,
  validateNoAdultsTitle: string,
  validateNoAdultsSubtitle: string,
  validateGenericYes: string,
  validateGenericNo: string,
  validateMainCategoryRemoveTitle: string,
  validateMainCategoryRemoveSubtitle: string,
  validateMainCategoryRemoveYes: string,
};

export const makeQAFlowNSRecord: RecordFactory<QAFlowNS> = Immutable.Record({
  declareGoods: 'i18n',
  toOverview: 'i18n',
  adult: 'i18n',
  adultInfo: 'i18n',
  adultCount: 'i18n: {{value}}',
  adultCount_plural: 'i18n: {{value}}',
  minor: 'i18n',
  minorInfo: 'i18n',
  minorCount: 'i18n: {{value}}',
  minorCount_plural: 'i18n: {{value}}',
  validateNoAdultsTitle: 'i18n',
  validateNoAdultsSubtitle: 'i18n',
  validateGenericYes: 'i18n',
  validateGenericNo: 'i18n',
  validateMainCategoryRemoveTitle: 'i18n',
  validateMainCategoryRemoveSubtitle: 'i18n {{value}}',
  validateMainCategoryRemoveYes: 'i18n',
});

export type QAFlowNSType = RecordOf<QAFlowNS>;

type ModalNS = {
  confirmPicker: string,
  standardCategoryPicker: string,
  individualCategoryPicker: string,
  currencyPickerTitle: string,
  currencyPickerLargeAmountTitle: string,
  currencyPickerSubTitle: string,
  currencyPickerRate: string,
  currencyPickerInvalidInput: string,
  savedBasketDoYoWantToContinue: string,
  savedBasketTotalCost: string,
  savedBasketNewShoppingCart: string,
};

export const makeModalNSRecord: RecordFactory<ModalNS> = Immutable.Record({
  confirmPicker: 'i18n: {{value}}',
  standardCategoryPicker: 'i18n',
  individualCategoryPicker: 'i18n',
  currencyPickerTitle: 'i18n',
  currencyPickerLargeAmountTitle: 'i18n',
  currencyPickerSubTitle: 'i18n',
  currencyPickerRate: 'i18n',
  currencyPickerInvalidInput: 'i18n',
  savedBasketDoYoWantToContinue: 'i18n',
  savedBasketTotalCost: 'i18n {{value}}',
  savedBasketNewShoppingCart: 'i18n',
});

export type ModalNSType = RecordOf<ModalNS>;

type InformationNS = {
  informationTitle: string,
  proceedinAtTheCustoms: string,
  proceedinAtTheCustomsSubText: string,
  travelDocuments: string,
  travelDocumentsSubText: string,
  haveGoodsWithMe: string,
  haveGoodsWithMeSubText: string,
  haveAnimalsOrPlantsWithMe: string,
  haveAnimalsOrPlantsWithMeSubText: string,
  travelingWithVehicle: string,
  travelingWithVehicleSubText: string,
  entryByTrain: string,
  entryByTrainSubText: string,
};

export const makeInformationNSRecord: RecordFactory<
  InformationNS
> = Immutable.Record({
  informationTitle: 'i18n',
  proceedinAtTheCustoms: '{{value}}',
  proceedinAtTheCustomsSubText: '{{value}}',
  travelDocuments: '{{value}}',
  travelDocumentsSubText: '{{value}}',
  haveGoodsWithMe: '{{value}}',
  haveGoodsWithMeSubText: '{{value}}',
  haveAnimalsOrPlantsWithMe: '{{value}}',
  haveAnimalsOrPlantsWithMeSubText: '{{value}}',
  travelingWithVehicle: '{{value}}',
  travelingWithVehicleSubText: '{{value}}',
  entryByTrain: '{{value}}',
  entryByTrainSubText: '{{value}}',
});

export type InformationNSType = RecordOf<InformationNS>;
/**
 *
 */

type Locale = {
  mainCategories: MainCategoriesNSType,
  categories: CategoriesNSType,
  onBoarding: OnBoardingNSType,
  general: GeneralNSType,
  peopleInput: PeopleInputNSType,
  mainCategoriesInput: MainCategoriesInputNSType,
  quantityInput: QuantityInputNSType,
  amountInput: AmountInputNSType,
  qaFlow: QAFlowNSType,
  modal: ModalNSType,
  payment: PaymentNSType,
  information: InformationNSType,
};

export const makeLocaleRecord: RecordFactory<Locale> = Immutable.Record({
  mainCategories: makeMainCategoriesNSRecord(),
  categories: makeCategoriesNSRecord(),
  onBoarding: makeOnBoardingNSRecord(),
  general: makeGeneralNSRecord(),
  peopleInput: makePeopleInputNSRecord(),
  mainCategoriesInput: makeMainCategoriesInputNSRecord(),
  quantityInput: makeQuantityInputNSRecord(),
  amountInput: makeAmountInputNSRecord(),
  qaFlow: makeQAFlowNSRecord(),
  modal: makeModalNSRecord(),
  payment: makePaymentNSRecord(),
  information: makeInformationNSRecord(),
});

export type LocaleType = RecordOf<Locale>;
