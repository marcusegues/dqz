// @flow
// $FlowFixMe
import { parseString } from 'react-native-xml2js';
import {
  fetchCurrencyObject,
  storeCurrencyObject,
} from '../asyncStorage/storageApi';

export type Currency =
  | 'EUR'
  | 'USD'
  | 'CHF'
  | 'AED'
  | 'ALL'
  | 'ARS'
  | 'AUD'
  | 'AZN'
  | 'BAM'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BRL'
  | 'CAD'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'CRC'
  | 'CZK'
  | 'DKK'
  | 'DOP'
  | 'EGP'
  | 'ETB'
  | 'GBP'
  | 'GTQ'
  | 'HKD'
  | 'HNL'
  | 'HRK'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'ISK'
  | 'JPY'
  | 'KES'
  | 'KHR'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LBP'
  | 'LKR'
  | 'LYD'
  | 'MAD'
  | 'MUR'
  | 'MXN'
  | 'MYR'
  | 'NGN'
  | 'NOK'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'SAR'
  | 'SEK'
  | 'SGD'
  | 'THB'
  | 'TND'
  | 'TRY'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UYU'
  | 'VEF'
  | 'VND'
  | 'ZAR';

export const currenciesArray: Array<Currency> = [
  'EUR',
  'USD',
  'CHF',
  'AED',
  'ALL',
  'ARS',
  'AUD',
  'AZN',
  'BAM',
  'BDT',
  'BGN',
  'BHD',
  'BRL',
  'CAD',
  'CLP',
  'CNY',
  'COP',
  'CRC',
  'CZK',
  'DKK',
  'DOP',
  'EGP',
  'ETB',
  'GBP',
  'GTQ',
  'HKD',
  'HNL',
  'HRK',
  'HUF',
  'IDR',
  'ILS',
  'INR',
  'ISK',
  'JPY',
  'KES',
  'KHR',
  'KRW',
  'KWD',
  'KYD',
  'KZT',
  'LBP',
  'LKR',
  'LYD',
  'MAD',
  'MUR',
  'MXN',
  'MYR',
  'NGN',
  'NOK',
  'NZD',
  'OMR',
  'PAB',
  'PEN',
  'PHP',
  'PKR',
  'PLN',
  'QAR',
  'RON',
  'RSD',
  'RUB',
  'SAR',
  'SEK',
  'SGD',
  'THB',
  'TND',
  'TRY',
  'TWD',
  'TZS',
  'UAH',
  'UYU',
  'VEF',
  'VND',
  'ZAR',
];

export type CurrencyObject = { [Currency]: number };

export const currencyExample: CurrencyObject = {
  EUR: 1.17796, // fixed for Maerki Example
  USD: 0.99205, // fixed for Maerki Example
  CHF: 1,
  AED: 0.2649167,
  ALL: 0.008944,
  ARS: 0.05195,
  AUD: 0.77355,
  AZN: 0.58259,
  BAM: 0.6101806,
  BDT: 0.0117518,
  BGN: 0.6102572,
  BHD: 2.59435,
  BRL: 0.3026607,
  CAD: 0.78292,
  CLP: 0.00161429,
  CNY: 0.1513162,
  COP: 0.000340239,
  CRC: 0.00171896,
  CZK: 0.0468083,
  DKK: 0.1607132,
  DOP: 0.0200812,
  EGP: 0.0549555,
  ETB: 0.0357578,
  GBP: 1.34254,
  GTQ: 0.1325793,
  HKD: 0.124335,
  HNL: 0.0412188,
  HRK: 0.160991,
  HUF: 0.00386791,
  IDR: 0.000073038,
  ILS: 0.28701,
  INR: 0.0152953,
  ISK: 0.009519,
  JPY: 0.0088304,
  KES: 0.0094505,
  KHR: 0.000240016,
  KRW: 0.0009148,
  KWD: 3.24657,
  KYD: 1.1865,
  KZT: 0.0029631,
  LBP: 0.00064433,
  LKR: 0.00632967,
  LYD: 0.72607,
  MAD: 0.10617,
  MUR: 0.0307404,
  MXN: 0.05169,
  MYR: 0.246281,
  NGN: 0.0027139,
  NOK: 0.1234765,
  NZD: 0.71013,
  OMR: 2.53249,
  PAB: 0.97293,
  PEN: 0.3030944,
  PHP: 0.0193061,
  PKR: 0.0087885,
  PLN: 0.286039,
  QAR: 0.2672893,
  RON: 0.2576692,
  RSD: 0.0101189,
  RUB: 0.017273,
  SAR: 0.259428,
  SEK: 0.1219009,
  SGD: 0.73629,
  THB: 0.0304708,
  TND: 0.3989229,
  TRY: 0.2564737,
  TWD: 0.0329384,
  TZS: 0.00043415,
  UAH: 0.0343762,
  UYU: 0.034126,
  VEF: 0.0964561,
  VND: 0.000042925,
  ZAR: 0.07911,
};

// export const getFilteredCurrencies = (): CurrencyObject => {};

export const parseCurrencyXML = (rawdata: any, store: any): void => {
  const currencyObject: CurrencyObject = { CHF: 1 };
  let validCurrencies: boolean = false;
  let currencyDate: Date = new Date('2000-01-01');
  parseString(rawdata, (e, r) => {
    if (!r) {
      // console.log('Error Case');
      fetchCurrencyObject().then(co =>
        store.dispatch({
          type: 'UPDATE_CURRENCIES',
          currencyObject: co,
          validCurrencies,
          currencyDate,
        })
      );
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
      // storeCurrencyObject(currencyObject).then(() => {
      store.dispatch({
        type: 'UPDATE_CURRENCIES',
        currencyObject,
        validCurrencies,
        currencyDate,
      });
      // });
    }
  });
};
