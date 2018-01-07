// @flow
import { combineReducers } from 'redux';
import * as appApi from './appReducer';
import { formatDate } from '../model/utils';
import type {
  Amounts,
  Basket,
  People,
} from '../model/types/basketPeopleAmountsTypes';
import type {
  MainCategories,
  Settings,
  State,
} from '../types/reducers/appReducer';
import type { CurrencyObject } from '../model/currencies';

const root = combineReducers({ appState: appApi.appState });

export default root;

export const getBasket = (state: { appState: State }): Basket =>
  appApi.getBasket(state.appState);

export const getPeople = (state: { appState: State }): People =>
  appApi.getPeople(state.appState);

export const getAmounts = (state: { appState: State }): Amounts =>
  appApi.getAmounts(state.appState);

export const getMainCategories = (state: { appState: State }): MainCategories =>
  appApi.getMainCategories(state.appState);

export const getSettings = (state: { appState: State }): Settings =>
  appApi.getSettings(state.appState);

export const getCurrencies = (state: { appState: State }): CurrencyObject =>
  appApi.getCurrenciesObject(state.appState);

export const getCurrencyState = (state: { appState: State }): boolean =>
  appApi.getCurrencyState(state.appState);

export const getFormattedCurrencyDate = (state: { appState: State }): string =>
  formatDate(appApi.getCurrencyDate(state.appState));
