// @flow
import { currencyExample } from '../../model/currencies';
import { getInitialCurrenciesState } from '../../types/reducers/currencies';
import type { CurrenciesState } from '../../types/reducers/currencies';
import {
  currencies,
  getCurrenciesObject,
  getCurrencyDate,
  getCurrencyState,
} from '../currencies';

const initCurrenciesState: CurrenciesState = getInitialCurrenciesState();

describe('Currencies...', () => {
  test('UPDATE_CURRENCIES', () => {
    expect(
      currencies(initCurrenciesState, {
        type: 'UPDATE_CURRENCIES',
        currencyObject: currencyExample,
        validCurrencies: true,
        currencyDate: new Date('2000/01/01'),
        // $FlowFixMe - overriding the date
      }).set('currencyDate', '')
    ).toMatchSnapshot();
  });
});

describe('API', () => {
  test('getCurrenciesObject', () => {
    expect(getCurrenciesObject(initCurrenciesState)).toBe(
      initCurrenciesState.get('currencyObject')
    );
  });
  test('getCurrencyState', () => {
    expect(getCurrencyState(initCurrenciesState)).toBe(
      initCurrenciesState.get('validCurrencies')
    );
  });
  test('getCurrencyDate', () => {
    expect(getCurrencyDate(initCurrenciesState)).toBe(
      initCurrenciesState.get('currencyDate')
    );
  });
});
