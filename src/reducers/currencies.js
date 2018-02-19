/* eslint-disable prefer-destructuring */
// @flow
import type { CurrenciesState } from '../types/reducers/currencies';
import { getInitialCurrenciesState } from '../types/reducers/currencies';
import type { CurrenciesAction } from '../types/actions/currencies';
import type { CurrencyObject } from '../model/currencies';

export const currencies = (
  state: CurrenciesState = getInitialCurrenciesState(),
  action: CurrenciesAction
): CurrenciesState => {
  switch (action.type) {
    case 'UPDATE_CURRENCIES': {
      const currencyObject: CurrencyObject = action.currencyObject;
      const validCurrencies: boolean = action.validCurrencies;
      const currencyDate: Date = action.currencyDate;

      const s1 = state.set('currencyObject', currencyObject);
      const s2 = s1.set('currencyDate', currencyDate);
      return s2.set('validCurrencies', validCurrencies);
    }
    default: {
      return state;
    }
  }
};

export const getCurrenciesObject = (state: CurrenciesState): CurrencyObject =>
  state.get('currencyObject');

export const getCurrencyState = (state: CurrenciesState): boolean =>
  state.get('validCurrencies');

export const getCurrencyDate = (state: CurrenciesState): Date =>
  state.get('currencyDate');
