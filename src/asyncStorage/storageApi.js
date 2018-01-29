// @flow

import {
  fetchCurrencyObjectsAsyncStorage,
  fetchGenericDataAsyncStorage,
  storeItemAsyncStorage,
} from './asyncStorage';
import type { CurrencyObject } from '../model/currencies';
import type { StoreType } from './storeTypes';

/**
 * Stores item (stringified) under key
 * @param key
 * @param item
 * @returns {Promise<boolean>}
 */
export const storeItem = async (key: StoreType, item: any): Promise<boolean> =>
  storeItemAsyncStorage(key, item);

export const storeCurrencyObject = (currencyObject: CurrencyObject) =>
  storeItem('CurrencyObject', currencyObject);

/**
 * Generic fetching of data (for testing purposes), use special functions
 * @param key
 * @returns {Promise<any>}
 */
export const fetchGenericData = async (key: StoreType): Promise<any> =>
  fetchGenericDataAsyncStorage(key);

export const fetchCurrencyObject = async (): Promise<CurrencyObject> =>
  fetchCurrencyObjectsAsyncStorage('CurrencyObject');
