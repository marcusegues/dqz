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
  goodCategories: string,
  confirm: string,
  toPayment: string,
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
  goodCategories: 'i18n',
  confirm: 'i18n',
  toPayment: 'i18n',
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
  currencyPickerSubTitle: string,
  currencyPickerRate: string,
};

export const makeModalNSRecord: RecordFactory<ModalNS> = Immutable.Record({
  confirmPicker: 'i18n: {{value}}',
  standardCategoryPicker: 'i18n',
  individualCategoryPicker: 'i18n',
  currencyPickerTitle: 'i18n',
  currencyPickerSubTitle: 'i18n',
  currencyPickerRate: 'i18n',
});

export type ModalNSType = RecordOf<ModalNS>;

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
  qaFlow: QAFlowNSType,
  modal: ModalNSType,
  payment: PaymentNSType,
};

export const makeLocaleRecord: RecordFactory<Locale> = Immutable.Record({
  mainCategories: makeMainCategoriesNSRecord(),
  categories: makeCategoriesNSRecord(),
  onBoarding: makeOnBoardingNSRecord(),
  general: makeGeneralNSRecord(),
  peopleInput: makePeopleInputNSRecord(),
  mainCategoriesInput: makeMainCategoriesInputNSRecord(),
  quantityInput: makeQuantityInputNSRecord(),
  qaFlow: makeQAFlowNSRecord(),
  modal: makeModalNSRecord(),
  payment: makePaymentNSRecord(),
});

export type LocaleType = RecordOf<Locale>;
