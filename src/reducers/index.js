// @flow
import { combineReducers } from 'redux';
import declaration, * as fromDeclaration from './declaration';
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
} from '../types/reducers/declaration';
import type { CurrencyObject } from '../model/currencies';

const root = combineReducers({ declaration });

export default root;

export const getBasket = (state: { declaration: State }): Basket =>
  fromDeclaration.getBasket(state.declaration);

export const getPeople = (state: { declaration: State }): People =>
  fromDeclaration.getPeople(state.declaration);

export const getAmounts = (state: { declaration: State }): Amounts =>
  fromDeclaration.getAmounts(state.declaration);

export const getMainCategories = (state: {
  declaration: State,
}): MainCategories => fromDeclaration.getMainCategories(state.declaration);

export const getSettings = (state: { declaration: State }): Settings =>
  fromDeclaration.getSettings(state.declaration);

export const getCurrencies = (state: { declaration: State }): CurrencyObject =>
  fromDeclaration.getCurrenciesObject(state.declaration);

export const getCurrencyState = (state: { declaration: State }): boolean =>
  fromDeclaration.getCurrencyState(state.declaration);

export const getFormattedCurrencyDate = (state: {
  declaration: State,
}): string => formatDate(fromDeclaration.getCurrencyDate(state.declaration));
