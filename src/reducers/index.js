// @flow
import { combineReducers } from 'redux';
import * as declarationApi from './declaration';
import * as connectivityApi from './connectivity';
import * as currenciesApi from './currencies';
import * as receiptsApi from './receipts';
import * as navigationApi from './navigation';
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
  navigation: navigationApi.navigation,
});
