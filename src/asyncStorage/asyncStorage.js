// @flow

// $FlowFixMe
import { AsyncStorage } from 'react-native';
import type { CurrencyObject } from '../model/currencies';
import type { StoreType } from './storeTypes';
import { currencyExample } from '../model/currencies';

export const storeItemAsyncStorage = async (
  key: StoreType,
  item: any
): Promise<boolean> => {
  try {
    await AsyncStorage.setItem(`@Dazit:${key}`, JSON.stringify(item));
    return true;
  } catch (error) {
    // Error saving data
  }
  return false;
};

export const fetchGenericDataAsyncStorage = async (
  key: StoreType
): Promise<string> => {
  try {
    const value = await AsyncStorage.getItem(`@Dazit:${key}`);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    // Error retrieving data
  }
  return '';
};

const parser = (key: StoreType, fallback: any): any =>
  fetchGenericDataAsyncStorage(key).then(value => {
    if (value.length) {
      try {
        return JSON.parse(value);
      } catch (e) {
        // Error
      }
    }
    return fallback;
  });

export const fetchCurrencyObjectsAsyncStorage = async (
  key: StoreType
): Promise<CurrencyObject> => parser(key, currencyExample);
