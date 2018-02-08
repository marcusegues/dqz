// @flow
import { combineReducers } from 'redux';
import * as appApi from './appReducer';
import * as connectivityApi from './connectivity';
import { connectivity } from './connectivity';
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
import type { ConnectivityType } from '../types/connectivity';
import type { AppState } from '../types/reducers';

/**
 * Combines reducers (currently just one)
 * @type {Reducer<any>}
 */
export const root: AppState = combineReducers({
  appState: appApi.appState,
  connectivity,
});

/**
 * Gets basket in application state
 * @param state
 * @returns {Basket}
 */
export const getBasket = (state: AppState): Basket =>
  appApi.getBasket(state.appState);

/**
 * Gets people in application state
 * @param state
 * @returns {People}
 */
export const getPeople = (state: AppState): People =>
  appApi.getPeople(state.appState);

/**
 * Gets amounts in application state
 * @param state
 * @returns {Amounts}
 */
export const getAmounts = (state: AppState): Amounts =>
  appApi.getAmounts(state.appState);

/**
 * Gets main categories in application state
 * @param state
 * @returns {MainCategories}
 */
export const getMainCategories = (state: AppState): MainCategories =>
  appApi.getMainCategories(state.appState);

/**
 * Gets settings in application state
 * @param state
 * @returns {Settings}
 */
export const getSettings = (state: AppState): Settings =>
  appApi.getSettings(state.appState);

/**
 * Gets currencies in application state
 * @param state
 * @returns {CurrencyObject}
 */
export const getCurrencies = (state: AppState): CurrencyObject =>
  appApi.getCurrenciesObject(state.appState);

/**
 * Gets currency state in application state
 * @param state
 * @returns {boolean}
 */
export const getCurrencyState = (state: AppState): boolean =>
  appApi.getCurrencyState(state.appState);

/**
 * Gets the formatted currency date in application state
 * @param state
 * @returns {string}
 */
export const getFormattedCurrencyDate = (state: AppState): string =>
  formatDate(appApi.getCurrencyDate(state.appState));

/**
 * Gets the total vat in application state
 * @param state
 */
export const getTotalVat = (state: AppState): number =>
  calculateVat(
    state.appState.amounts,
    state.appState.people,
    state.appState.currencyObject
  ).get('totalVat', 0);

/**
 * Gets the total duty in application state
 * @param state
 */
export const getTotalDuty = (state: AppState): number =>
  calculateDuty(state.appState.basket, state.appState.people).get(
    'totalDuty',
    0
  );

/**
 * Gets the total fees (== vat + duty) in application state
 * @param state
 * @returns {number}
 */
export const getTotalFees = (state: AppState): number =>
  getTotalVat(state) + getTotalDuty(state);

/**
 * Gets the duty report in application state
 * @param state
 * @returns {DutyReport}
 */
export const getDutyReport = (state: AppState): DutyReport =>
  calculateDuty(state.appState.basket, state.appState.people);

/**
 * Gets the vat report in application state
 * @param state
 * @returns {VatReport}
 */
export const getVatReport = (state: AppState): VatReport =>
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
export const getPaymentData = (state: AppState): PaymentData =>
  appApi.getPaymentData(state.appState);

/**
 * Gets the current receipt id (emptystring if not active)
 * @param state
 * @returns {string}
 */
export const getReceiptId = (state: AppState): string =>
  appApi.getReceiptId(state.appState);

/**
 * Gets the current receipt entry time (empty string if not set yet)
 * @param state
 * @returns {string}
 */
export const getReceiptEntryTime = (state: AppState): string =>
  appApi.getReceiptEntryTime(state.appState);

/**
 * Gets the current receipt id (emptystring if not active)
 * @param state
 * @returns {string}
 */
export const getConnectivity = (state: AppState): ConnectivityType =>
  connectivityApi.getConnectivity(state.connectivity);
