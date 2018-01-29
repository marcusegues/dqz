// @flow

import {
  fetchCurrencyObjectsAsyncStorage,
  fetchSettingsAcceptRateAsyncStorage,
  fetchSettingsHasLanguageAsyncStorage,
  storeItemAsyncStorage,
} from './asyncStorage';
import type { CurrencyObject } from '../model/currencies';
import type { StoreType } from './storeTypes';
import type { Language } from '../i18n/types/locale';

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
