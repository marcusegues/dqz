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
  EUR: 1.17796,
  USD: 0.99205,
  CHF: 1,
  AUD: 2,
  CAD: 3,
  DKK: 4,
  GBP: 5,
  HKD: 6,
  JPY: 7,
  MXN: 8,
  NOK: 9,
  NZD: 10,
  RUB: 11,
  SEK: 12,
  ZAR: 13,
};

// export const getFilteredCurrencies = (): CurrencyObject => {};

export const parseCurrencyXML = (rawdata: any, store: any): void => {
  // console.log(rawdata);
  let currencyObject: CurrencyObject = {};
  let validCurrencies: boolean = false;

  parseString(rawdata, (e, r) => {
    if (!r) {
      // console.log('Error Case'); // TODO
      currenciesArray.forEach(c => {
        currencyObject[c] = 1.23;
      });
    } else {
      // console.log('Normal Case');
      validCurrencies = true;
      const { wechselkurse } = r;
      const { devise } = wechselkurse;
      currencyObject = devise
        .filter(d => currenciesArray.indexOf(d.$.code.toUpperCase()) > -1)
        .map(c => ({ [c.$.code.toUpperCase()]: c.kurs[0] }));
    }
  });
  // console.log(currencyObject);
  store.dispatch({
    type: 'UPDATE_CURRENCIES',
    currencyObject,
    validCurrencies,
  });
};
