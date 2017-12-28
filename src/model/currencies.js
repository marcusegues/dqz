// @flow
// $FlowFixMe
import { parseString } from 'react-native-xml2js';

export type Currency =
  | 'EUR'
  | 'USD'
  | 'CHF'
  | 'AUD'
  | 'CAD'
  | 'DKK'
  | 'GBP'
  | 'HKD'
  | 'JPY'
  | 'MXN'
  | 'NOK'
  | 'NZD'
  | 'RUB'
  | 'SEK'
  | 'ZAR';

export const currenciesArray: Array<Currency> = [
  'EUR',
  'USD',
  'CHF',
  'AUD',
  'CAD',
  'DKK',
  'GBP',
  'HKD',
  'JPY',
  'MXN',
  'NOK',
  'NZD',
  'RUB',
  'SEK',
  'ZAR',
];

export type CurrencyObject = { [Currency]: number };

export const currencyExample: CurrencyObject = {
  AUD: 0.77355,
  CAD: 0.78784,
  CHF: 1,
  DKK: 0.15924670000000002,
  EUR: 1.17796, // fixed for Maerki Example
  GBP: 1.33658,
  HKD: 0.1279084,
  JPY: 0.0088304,
  MXN: 0.05034,
  NOK: 0.1203345,
  NZD: 0.70344,
  RUB: 0.017327699999999998,
  SEK: 0.1201607,
  USD: 0.99205, // fixed for Maerki Example
  ZAR: 0.07995,
};

// export const getFilteredCurrencies = (): CurrencyObject => {};

export const parseCurrencyXML = (rawdata: any, store: any): void => {
  let currencyObject: CurrencyObject = { CHF: 1 };
  let validCurrencies: boolean = false;
  let currencyDate: Date = new Date('2000-01-01');

  parseString(rawdata, (e, r) => {
    if (!r) {
      // console.log('Error Case');
      currencyObject = currencyExample;
    } else {
      // console.log('Normal Case');
      validCurrencies = true;
      const { wechselkurse } = r;
      const { devise, datum } = wechselkurse;
      currencyDate = new Date(datum[0]);
      devise
        .filter(d => currenciesArray.indexOf(d.$.code.toUpperCase()) > -1)
        .forEach(c => {
          const kurs = c.kurs[0];
          const waehrung = c.waehrung[0];
          const multiplier = +waehrung.replace(/ .*/, '');
          currencyObject[c.$.code.toUpperCase()] = kurs / multiplier;
        });
    }
  });
  store.dispatch({
    type: 'UPDATE_CURRENCIES',
    currencyObject,
    validCurrencies,
    currencyDate,
  });
};
