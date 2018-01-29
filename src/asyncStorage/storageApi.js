// @flow

import {
  fetchAmountsAsyncStorage,
  fetchBasketAsyncStorage,
  fetchCurrencyObjectsAsyncStorage,
  fetchPeopleAsyncStorage,
  fetchSettingsAcceptRateAsyncStorage,
  fetchSettingsHasLanguageAsyncStorage,
  storeItemAsyncStorage,
} from './asyncStorage';
import type { CurrencyObject } from '../model/currencies';
import type { StoreType } from './storeTypes';
import type { Language } from '../i18n/types/locale';
import type {
  Amounts,
  Basket,
  People,
} from '../model/types/basketPeopleAmountsTypes';

/**
 * Stores item (stringified) under key - do NOT use directly!
 * @param key
 * @param item
 * @returns {Promise<boolean>}
 */
export const storeItem = async (key: StoreType, item: any): Promise<boolean> =>
  storeItemAsyncStorage(key, item);

/**
 * Store a currency object
 * @param currencyObject
 * @returns {Promise<boolean>}
 */
export const storeCurrencyObject = (currencyObject: CurrencyObject) =>
  storeItem('CurrencyObject', currencyObject);

/**
 * Sets a flag if the user has a language set
 * @param flag
 * @returns {Promise<boolean>}
 */
export const storeSettingsAcceptRate = (flag: boolean) =>
  storeItem('SettingsAcceptRate', flag);

/**
 * Sets a flag if the user has a language pre-chosen
 * @param flag
 * @returns {Promise<boolean>}
 */
export const storeSettingsHasLanguage = (flag: Language) =>
  storeItem('SettingsHasLanguage', flag);

/**
 * Stores a basket
 * @param basket
 * @returns {Promise<boolean>}
 */
export const storeBasket = (basket: Basket) =>
  storeItem('Basket', basket.toJS());

/**
 * Stores amounts
 * @param amounts
 * @returns {Promise<boolean>}
 */
export const storeAmounts = (amounts: Amounts) =>
  storeItem('Amounts', amounts.toJS());

/**
 * Stores people
 * @param people
 * @returns {Promise<boolean>}
 */
export const storePeople = (people: People) =>
  storeItem('People', people.toJS());

/**
 * Fetch a currency object
 * @returns {Promise<CurrencyObject>}
 */
export const fetchCurrencyObject = async (): Promise<CurrencyObject> =>
  fetchCurrencyObjectsAsyncStorage('CurrencyObject');

/**
 * Fetches the accept-rate flag
 * @returns {Promise<CurrencyObject>}
 */
export const fetchSettingsAcceptRate = async (): Promise<boolean> =>
  fetchSettingsAcceptRateAsyncStorage('SettingsAcceptRate');

/**
 * Fetches the language-set flag
 * @returns {Promise<CurrencyObject>}
 */
export const fetchSettingsHasLanguage = async (): Promise<Language> =>
  fetchSettingsHasLanguageAsyncStorage('SettingsHasLanguage');

export const fetchBasket = async (): Promise<Basket> =>
  fetchBasketAsyncStorage('Basket');

export const fetchAmounts = async (): Promise<Amounts> =>
  fetchAmountsAsyncStorage('Amounts');

export const fetchPeople = async (): Promise<People> =>
  fetchPeopleAsyncStorage('People');
