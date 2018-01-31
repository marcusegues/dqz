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
import type { PaymentData } from '../types/generalTypes';

/**
 * Combines reducers (currently just one)
 * @type {Reducer<any>}
 */
export const root = combineReducers({ appState: appApi.appState });

/**
 * Gets basket in application state
 * @param state
 * @returns {Basket}
 */
export const getBasket = (state: { appState: State }): Basket =>
  appApi.getBasket(state.appState);

/**
 * Gets people in application state
 * @param state
 * @returns {People}
 */
export const getPeople = (state: { appState: State }): People =>
  appApi.getPeople(state.appState);

/**
 * Gets amounts in application state
 * @param state
 * @returns {Amounts}
 */
export const getAmounts = (state: { appState: State }): Amounts =>
  appApi.getAmounts(state.appState);

/**
 * Gets main categories in application state
 * @param state
 * @returns {MainCategories}
 */
export const getMainCategories = (state: { appState: State }): MainCategories =>
  appApi.getMainCategories(state.appState);

/**
 * Gets settings in application state
 * @param state
 * @returns {Settings}
 */
export const getSettings = (state: { appState: State }): Settings =>
  appApi.getSettings(state.appState);

/**
 * Gets currencies in application state
 * @param state
 * @returns {CurrencyObject}
 */
export const getCurrencies = (state: { appState: State }): CurrencyObject =>
  appApi.getCurrenciesObject(state.appState);

/**
 * Gets currency state in application state
 * @param state
 * @returns {boolean}
 */
export const getCurrencyState = (state: { appState: State }): boolean =>
  appApi.getCurrencyState(state.appState);

/**
 * Gets the formatted currency date in application state
 * @param state
 * @returns {string}
 */
export const getFormattedCurrencyDate = (state: { appState: State }): string =>
  formatDate(appApi.getCurrencyDate(state.appState));

/**
 * Gets the total vat in application state
 * @param state
 */
export const getTotalVat = (state: { appState: State }): number =>
  calculateVat(
    state.appState.amounts,
    state.appState.people,
    state.appState.currencyObject
  ).get('totalVat', 0);

/**
 * Gets the total duty in application state
 * @param state
 */
export const getTotalDuty = (state: { appState: State }): number =>
  calculateDuty(state.appState.basket, state.appState.people).get(
    'totalDuty',
    0
  );

/**
 * Gets the total fees (== vat + duty) in application state
 * @param state
 * @returns {number}
 */
export const getTotalFees = (state: { appState: State }): number =>
  getTotalVat(state) + getTotalDuty(state);

/**
 * Gets the duty report in application state
 * @param state
 * @returns {DutyReport}
 */
export const getDutyReport = (state: { appState: State }): DutyReport =>
  calculateDuty(state.appState.basket, state.appState.people);

/**
 * Gets the vat report in application state
 * @param state
 * @returns {VatReport}
 */
export const getVatReport = (state: { appState: State }): VatReport =>
  calculateVat(
    state.appState.amounts,
    state.appState.people,
    state.appState.currencyObject
  );

/**
 * Gets current payment data
 * @param state
 * @returns {PaymentData}
 */
export const getPaymentData = (state: { appState: State }): PaymentData =>
  appApi.getPaymentData(state.appState);

/**
 * Gets the current receipt id (emptystring if not active)
 * @param state
 * @returns {string}
 */
export const getReceiptId = (state: { appState: State }): string =>
  appApi.getReceiptId(state.appState);
