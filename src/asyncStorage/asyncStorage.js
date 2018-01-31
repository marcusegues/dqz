// @flow
import Immutable from 'immutable';
import type { List } from 'immutable';
// $FlowFixMe
import { AsyncStorage } from 'react-native';
import type { CurrencyObject } from '../model/currencies';
import type { Receipt } from '../types/receiptTypes';
import type { StoreType } from './storeTypes';
import { currencyExample } from '../model/currencies';
import type { Language } from '../i18n/types/locale';
import type {
  Amounts,
  Basket,
  People,
} from '../model/types/basketPeopleAmountsTypes';
import {
  emptyBasket,
  initAmounts,
  initPeople,
} from '../model/configurationApi';
import type { MainCategories } from '../types/reducers/appReducer';
import {
  deserializeAmounts,
  deserializeBasket,
  deserializeMainCategories,
  deserializePeople,
} from './deserializers';

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

const parserGeneric = (
  key: StoreType,
  fallback: any,
  deserializer: (serialized: string) => any
): any =>
  fetchGenericDataAsyncStorage(key).then(value => {
    if (value.length) {
      try {
        return deserializer(JSON.parse(value));
      } catch (e) {
        // Error
      }
    }
    return fallback;
  });

const parser = (key: StoreType, fallback: any): any =>
  parserGeneric(key, fallback, x => x);

const parserImmutableReceipts = (key: StoreType, fallback: any): any =>
  fetchGenericDataAsyncStorage(key).then(value => {
    if (value.length) {
      try {
        return Immutable.List(JSON.parse(value));
      } catch (e) {
        // Error
      }
    }
    return fallback;
  });

export const fetchReceiptsAsyncStorage = async (
  key: StoreType
): Promise<List<Receipt>> => parserImmutableReceipts(key, Immutable.List());

export const fetchCurrencyObjectsAsyncStorage = async (
  key: StoreType
): Promise<CurrencyObject> => parser(key, currencyExample);

export const fetchSettingsAcceptRateAsyncStorage = async (
  key: StoreType
): Promise<boolean> => parser(key, false);

export const fetchSettingsHasLanguageAsyncStorage = async (
  key: StoreType
): Promise<Language> => parser(key, 'de');

export const fetchBasketAsyncStorage = async (
  key: StoreType
): Promise<Basket> => parserGeneric(key, emptyBasket, deserializeBasket);

export const fetchAmountsAsyncStorage = async (
  key: StoreType
): Promise<Amounts> => parserGeneric(key, initAmounts, deserializeAmounts);

export const fetchPeopleAsyncStorage = async (
  key: StoreType
): Promise<People> => parserGeneric(key, initPeople, deserializePeople);

export const fetchMainCategoriesAsyncStorage = async (
  key: StoreType
): Promise<MainCategories> =>
  parserGeneric(key, Immutable.Set(), deserializeMainCategories);
