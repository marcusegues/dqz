// @flow
import type { RecordOf, RecordFactory } from 'immutable';
import Immutable from 'immutable';

export type Category =
  | 'Meat'
  | 'Butter'
  | 'Oils'
  | 'OtherFood'
  | 'AlcSoft'
  | 'AlcHard'
  | 'Cigarettes'
  | 'Tobacco'
  | 'Meds'
  | 'Books'
  | 'Magazines'
  | 'Flowers'
  | 'AnimalFeed'
  | 'Fertilizer'
  | 'Other';

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
  Meat: '',
  Butter: '',
  Oils: '',
  OtherFood: '',
  AlcSoft: '',
  AlcHard: '',
  Cigarettes: '',
  Tobacco: '',
  Med: '',
  Books: '',
  Magazines: '',
  Flowers: '',
  AnimalFeed: '',
  Fertilizer: '',
  Other: '',
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
  declareGoods: '',
  pleaseSelect: '',
  guideline: '',
  receipts: '',
  information: '',
  navbarFirst: '',
  navbarSecond: '',
  navbarThird: '',
});

export type GeneralNSType = RecordOf<GeneralNS>;

type OnBoardingNS = {
  onBoardingMessage: string,
  selectLanguage: string,
};

export const makeOnBoardingNSRecord: RecordFactory<
  OnBoardingNS
> = Immutable.Record({
  onBoardingMessage: '',
  selectLanguage: '',
});

export type OnBoardingNSType = RecordOf<OnBoardingNS>;

type LargeAmountInputNS = {
  pleaseInput: string,
  totalLargeAmount: string,
};

export const makeLargeAmountInputNSRecord: RecordFactory<
  LargeAmountInputNS
> = Immutable.Record({
  pleaseInput: '',
  totalLargeAmount: '',
});

export type LargeAmountInputNSType = RecordOf<LargeAmountInputNS>;

type QAFlowNS = {
  toOverview: string,
};

export const makeQAFlowNSRecord: RecordFactory<QAFlowNS> = Immutable.Record({
  toOverview: '',
});

export type QAFlowNSType = RecordOf<QAFlowNS>;

type ModalNS = {
  confirmPicker: string,
  standardCategoryPicker: string,
  individualCategoryPicker: string,
};

export const makeModalNSRecord: RecordFactory<ModalNS> = Immutable.Record({
  confirmPicker: '{{value}}',
  standardCategoryPicker: '',
  individualCategoryPicker: '',
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
  categories: makeCategoriesNSRecord(),
  onBoarding: makeOnBoardingNSRecord(),
  general: makeGeneralNSRecord(),
  largeAmountInput: makeLargeAmountInputNSRecord(),
  qaFlow: makeQAFlowNSRecord(),
  modal: makeModalNSRecord(),
});

export type LocaleType = RecordOf<Locale>;
