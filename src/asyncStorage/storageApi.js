// @flow

import {
  fetchGenericDataAsyncStorage,
  storeItemAsyncStorage,
} from './asyncStorage';

/**
 * Stores item (stringified) under key
 * @param key
 * @param item
 * @returns {Promise<boolean>}
 */
export const storeItem = async (key: string, item: any): Promise<boolean> =>
  storeItemAsyncStorage(key, item);

/**
 * Generic fetching of data (for testing purposes), use special functions
 * @param key
 * @returns {Promise<any>}
 */
export const fetchGenericData = async (key: string): Promise<any> =>
  fetchGenericDataAsyncStorage(key);
