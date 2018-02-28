// @flow
import { combineReducers } from 'redux';
import * as declarationApi from './declaration';
import * as connectivityApi from './connectivity';
import * as currenciesApi from './currencies';
import * as receiptsApi from './receipts';
import { formatDate } from '../model/utils';
import type {
  Amounts,
  Basket,
  People,
} from '../model/types/basketPeopleAmountsTypes';
import type { MainCategories, Settings } from '../types/reducers/declaration';
import type { CurrencyObject } from '../model/currencies';
import { calculateVat } from '../model/vatCalculations';
import { calculateDuty } from '../model/dutyCalculations';
import type { PaymentData } from '../types/generalTypes';
import type { ConnectivityType } from '../types/connectivity';
import type { AppState } from '../types/reducers';

/**
 * Combines reducers (currently just one)
 * @type {Reducer<any>}
 */
export const root: AppState = combineReducers({
  declaration: declarationApi.declaration,
  connectivity: connectivityApi.connectivity,
  currencies: currenciesApi.currencies,
  receipts: receiptsApi.receipts,
});

/**
 * Gets basket in application state
 * @param state
 * @returns {Basket}
 */
export const getBasket = (state: AppState): Basket =>
  declarationApi.getBasket(state.declaration);

/**
 * Gets people in application state
 * @param state
 * @returns {People}
 */
export const getPeople = (state: AppState): People =>
  declarationApi.getPeople(state.declaration);

/**
 * Gets amounts in application state
 * @param state
 * @returns {Amounts}
 */
export const getAmounts = (state: AppState): Amounts =>
  declarationApi.getAmounts(state.declaration);

/**
 * Gets main categories in application state
 * @param state
 * @returns {MainCategories}
 */
export const getMainCategories = (state: AppState): MainCategories =>
  declarationApi.getMainCategories(state.declaration);

/**
 * Gets settings in application state
 * @param state
 * @returns {Settings}
 */
export const getSettings = (state: AppState): Settings =>
  declarationApi.getSettings(state.declaration);

/**
 * Gets currencies in application state
 * @param state
 * @returns {CurrencyObject}
 */
export const getCurrencies = (state: AppState): CurrencyObject =>
  currenciesApi.getCurrenciesObject(state.currencies);

/**
 * Gets currency state in application state
 * @param state
 * @returns {boolean}
 */
export const getCurrencyState = (state: AppState): boolean =>
  currenciesApi.getCurrencyState(state.currencies);

/**
 * Gets the formatted currency date in application state
 * @param state
 * @returns {string}
 */
export const getFormattedCurrencyDate = (state: AppState): string =>
  formatDate(currenciesApi.getCurrencyDate(state.currencies));

/**
 * Gets the total vat in application state
 * @param state
 */
export const getTotalVat = (state: AppState): number =>
  calculateVat(
    state.declaration.amounts,
    state.declaration.people,
    state.currencies.currencyObject
  ).get('totalVat', 0);

/**
 * Gets the total duty in application state
 * @param state
 */
export const getTotalDuty = (state: AppState): number =>
  calculateDuty(state.declaration.basket, state.declaration.people).get(
    'totalDuty',
    0
  );

/**
 * Gets the total fees (== vat + duty) in application state
 * @param state
 * @returns {number}
 */
export const getTotalFees = (state: AppState): number => getTotalVat(state) + getTotalDuty(state);

/**
 * Gets current payment data
 * @param state
 * @returns {PaymentData}
 */
export const getPaymentData = (state: AppState): PaymentData =>
  declarationApi.getPaymentData(state.declaration);

/**
 * Gets the current receipt entry time (empty string if not set yet)
 * @param state
 * @returns {string}
 */
export const getReceiptEntryTime = (state: AppState): string =>
  declarationApi.getReceiptEntryTime(state.declaration);

/**
 * Gets the current receipt id (emptystring if not active)
 * @param state
 * @returns {string}
 */
export const getReceiptId = (state: AppState): string =>
  receiptsApi.getReceiptId(state.receipts);

/**
 * Gets the current connectivity status
 * @param state
 * @returns {string}
 */
export const getConnectivity = (state: AppState): ConnectivityType =>
  connectivityApi.getConnectivity(state.connectivity);
