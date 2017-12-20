// @flow
import type { RecordOf, RecordFactory } from 'immutable';
import Immutable from 'immutable';

type GeneralNS = {
  declareGoods: string,
  pleaseSelect: string,
  calculator: string,
  receipts: string,
  information: string,
  navbarFirst: string,
  navbarSecond: string,
  navbarThird: string,
};

export const makeGeneralNSRecord: RecordFactory<GeneralNS> = Immutable.Record({
  declareGoods: '',
  pleaseSelect: '',
  calculator: '',
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

type Locale = {
  onBoarding: OnBoardingNSType,
  general: GeneralNSType,
  largeAmountInput: LargeAmountInputNSType,
  qaFlow: QAFlowNSType,
};

export const makeLocaleRecord: RecordFactory<Locale> = Immutable.Record({
  onBoarding: makeOnBoardingNSRecord(),
  general: makeGeneralNSRecord(),
  largeAmountInput: makeLargeAmountInputNSRecord(),
  qaFlow: makeQAFlowNSRecord(),
});

export type LocaleType = RecordOf<Locale>;
