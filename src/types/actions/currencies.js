// @flow

import type { CurrencyObject } from '../../model/currencies';

export type CurrenciesAction = {
  type: 'UPDATE_CURRENCIES',
  currencyObject: CurrencyObject,
  validCurrencies: boolean,
  currencyDate: Date,
};
