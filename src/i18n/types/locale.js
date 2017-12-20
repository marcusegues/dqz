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
  Med: string,
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
  Med: 'i18n',
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
});

export type GeneralNSType = RecordOf<GeneralNS>;

type OnBoardingNS = {
  onBoardingMessage: string,
  selectLanguage: string,
};

export const makeOnBoardingNSRecord: RecordFactory<
  OnBoardingNS
> = Immutable.Record({
  onBoardingMessage: 'i18n',
  selectLanguage: 'i18n',
});

export type OnBoardingNSType = RecordOf<OnBoardingNS>;

type LargeAmountInputNS = {
  pleaseInput: string,
  totalLargeAmount: string,
};

export const makeLargeAmountInputNSRecord: RecordFactory<
  LargeAmountInputNS
> = Immutable.Record({
  pleaseInput: 'i18n',
  totalLargeAmount: 'i18n',
});

export type LargeAmountInputNSType = RecordOf<LargeAmountInputNS>;

type QAFlowNS = {
  toOverview: string,
  adult: string,
  adultInfo: string,
  adultCount: string,
  adultCount_plural: string,
  minor: string,
  minorInfo: string,
  minorCount: string,
  minorCount_plural: string,
};

export const makeQAFlowNSRecord: RecordFactory<QAFlowNS> = Immutable.Record({
  toOverview: 'i18n',
  adult: 'i18n',
  adultInfo: 'i18n',
  adultCount: 'i18n: {{value}}',
  adultCount_plural: 'i18n: {{value}}',
  minor: 'i18n',
  minorInfo: 'i18n',
  minorCount: 'i18n: {{value}}',
  minorCount_plural: 'i18n: {{value}}',
});

export type QAFlowNSType = RecordOf<QAFlowNS>;

type ModalNS = {
  confirmPicker: string,
  standardCategoryPicker: string,
  individualCategoryPicker: string,
};

export const makeModalNSRecord: RecordFactory<ModalNS> = Immutable.Record({
  confirmPicker: 'i18n: {{value}}',
  standardCategoryPicker: 'i18n',
  individualCategoryPicker: 'i18n',
});

export type ModalNSType = RecordOf<ModalNS>;

/**
 *
 */

type Locale = {
  onBoarding: OnBoardingNSType,
  general: GeneralNSType,
  largeAmountInput: LargeAmountInputNSType,
  qaFlow: QAFlowNSType,
  modal: ModalNSType,
};

export const makeLocaleRecord: RecordFactory<Locale> = Immutable.Record({
  mainCategories: makeMainCategoriesNSRecord(),
  categories: makeCategoriesNSRecord(),
  onBoarding: makeOnBoardingNSRecord(),
  general: makeGeneralNSRecord(),
  largeAmountInput: makeLargeAmountInputNSRecord(),
  qaFlow: makeQAFlowNSRecord(),
  modal: makeModalNSRecord(),
});

export type LocaleType = RecordOf<Locale>;
