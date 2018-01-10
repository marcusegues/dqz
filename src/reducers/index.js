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
import { calculateVat } from '../model/vatCalculations';
import { calculateDuty } from '../model/dutyCalculations';
import type { DutyReport, VatReport } from '../model/types/calculationTypes';

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

export const getTotalVat = (state: { appState: State }): number =>
  calculateVat(
    state.appState.amounts,
    state.appState.people,
    state.appState.currencyObject
  ).get('totalVat', 0);

export const getTotalDuty = (state: { appState: State }): number =>
  calculateDuty(state.appState.basket, state.appState.people).get(
    'totalDuty',
    0
  );

export const getTotalFees = (state: { appState: State }): number =>
  getTotalVat(state) + getTotalDuty(state);

export const getDutyReport = (state: { appState: State }): DutyReport =>
  calculateDuty(state.appState.basket, state.appState.people);

export const getVatReport = (state: { appState: State }): VatReport =>
  calculateVat(
    state.appState.amounts,
    state.appState.people,
    state.appState.currencyObject
  );
