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
import { makeAmountsOfCurrencyRecord } from '../model/types/basketPeopleAmountsTypes';
import type { MainCategories } from '../types/reducers/appReducer';

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

// TODO: write abstract parser that accepts any parser function in success case
const parserImmutable = (key: StoreType, fallback: any): any =>
  fetchGenericDataAsyncStorage(key).then(value => {
    if (value.length) {
      try {
        return Immutable.fromJS(JSON.parse(value));
      } catch (e) {
        // Error
      }
    }
    return fallback;
  });

const parserImmutableMainCategories = (key: StoreType, fallback: any): any =>
  fetchGenericDataAsyncStorage(key).then(value => {
    if (value.length) {
      try {
        return Immutable.Set(JSON.parse(value));
      } catch (e) {
        // Error
      }
    }
    return fallback;
  });

const parserImmutableAmounts = (key: StoreType, fallback: any): any =>
  fetchGenericDataAsyncStorage(key).then(value => {
    if (value.length) {
      try {
        const amountsMap = Immutable.Map(JSON.parse(value));
        return amountsMap.map(d =>
          makeAmountsOfCurrencyRecord({
            amounts: Immutable.List(d.amounts),
            largeAmounts: Immutable.List(d.largeAmounts),
          })
        );
      } catch (e) {
        // Error
      }
    }
    return fallback;
  });

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
): Promise<Basket> => parserImmutable(key, emptyBasket);

export const fetchAmountsAsyncStorage = async (
  key: StoreType
): Promise<Amounts> => parserImmutableAmounts(key, initAmounts);

export const fetchPeopleAsyncStorage = async (
  key: StoreType
): Promise<People> => parserImmutable(key, initPeople);

export const fetchMainCategoriesAsyncStorage = async (
  key: StoreType
): Promise<MainCategories> =>
  parserImmutableMainCategories(key, Immutable.Set());
