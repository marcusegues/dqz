// @flow
import type { RecordOf, RecordFactory } from 'immutable';
import Immutable from 'immutable';

type GeneralNS = {
  declareGoods: string,
  pleaseSelect: string,
};

export const makeGeneralNSRecord: RecordFactory<GeneralNS> = Immutable.Record({
  declareGoods: '',
  pleaseSelect: '',
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

type Locale = {
  onBoarding: OnBoardingNSType,
  general: GeneralNSType,
  largeAmountInput: LargeAmountInputNSType,
};

export const makeLocaleRecord: RecordFactory<Locale> = Immutable.Record({
  onBoarding: makeOnBoardingNSRecord(),
  general: makeGeneralNSRecord(),
  largeAmountInput: makeLargeAmountInputNSRecord(),
});

export type LocaleType = RecordOf<Locale>;
