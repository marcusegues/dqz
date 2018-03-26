// @flow
import type { RecordOf, RecordFactory } from 'immutable';
import Immutable from 'immutable';
import type { CurrencyObject } from '../../model/currencies';

type CurrenciesStateObj = {
  currencyObject: CurrencyObject,
  validCurrencies: boolean,
  currencyDate: Date,
};

export const getInitialCurrenciesState: RecordFactory<
  CurrenciesStateObj
> = Immutable.Record({
  currencyObject: {},
  validCurrencies: false,
  currencyDate: new Date('2000-01-01'),
});

export type CurrenciesState = RecordOf<CurrenciesStateObj>;
