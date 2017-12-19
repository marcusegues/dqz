// @flow
import type { LocaleType } from '../types/locale';
import {
  makeLocaleRecord,
  makeGeneralNSRecord,
  makeOnBoardingNSRecord,
  makeLargeAmountInputNSRecord,
  makeQAFlowNSRecord,
} from '../types/locale';

export const en: LocaleType = makeLocaleRecord({
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
  qaFlow: makeQAFlowNSRecord({
    toOverview: 'To Overview',
  }),
});