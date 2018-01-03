import { combineReducers } from 'redux';
import declaration, * as fromDeclaration from './declaration';
import { formatDate } from '../model/utils';

const root = combineReducers({ declaration });

export default root;

export const getBasket = state => fromDeclaration.getBasket(state.declaration);

export const getPeople = state => fromDeclaration.getPeople(state.declaration);

export const getAmounts = state =>
  fromDeclaration.getAmounts(state.declaration);

export const getMainCategories = state =>
  fromDeclaration.getMainCategories(state.declaration);

export const getSettings = state =>
  fromDeclaration.getSettings(state.declaration);

export const getCurrencies = state =>
  fromDeclaration.getCurrenciesObject(state.declaration);

export const getCurrencyState = state =>
  fromDeclaration.getCurrencyState(state.declaration);

export const getFormattedCurrencyDate = state =>
  formatDate(fromDeclaration.getCurrencyDate(state.declaration));
