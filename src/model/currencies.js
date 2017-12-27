// @flow
// $FlowFixMe
import { parseString } from 'react-native-xml2js';

export type Currencies =
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

export const currenciesArray: Array<Currencies> = [
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

export type CurrencyObject = { [Currencies]: number };

export const currencyExample: CurrencyObject = {};

// export const getFilteredCurrencies = (): CurrencyObject => {};

export const parseCurrencyXML = (rawdata: any, store: any): void => {
  // console.log(rawdata);
  let currencyObject: CurrencyObject = {};
  let validCurrencies: boolean = false;

  parseString(rawdata, (e, r) => {
    if (!r) {
      console.log('Error Case'); // TODO
      currenciesArray.forEach(c => {
        currencyObject[c] = 1.23;
      });
    } else {
      console.log('Normal Case');
      validCurrencies = true;
      const { wechselkurse } = r;
      const { devise } = wechselkurse;
      currencyObject = devise
        .filter(d => currenciesArray.indexOf(d.$.code.toUpperCase()) > -1)
        .map(c => ({ [c.$.code.toUpperCase()]: c.kurs[0] }));
    }
  });
  console.log(currencyObject);
  store.dispatch({
    type: 'UPDATE_CURRENCIES',
    currencyObject,
    validCurrencies,
  });
  // return { currencyObject, validCurrencies };
};
