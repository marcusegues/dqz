import { combineReducers } from 'redux';
import declaration, * as fromDeclaration from './declaration';
import { formatDate } from '../model/utils';

const root = combineReducers({ declaration });

export default root;

export const getDeclarationBasket = state =>
  fromDeclaration.getDeclarationBasket(state.declaration);

export const getDeclarationPeople = state =>
  fromDeclaration.getDeclarationPeople(state.declaration);

export const getDeclarationAmounts = state =>
  fromDeclaration.getDeclarationAmounts(state.declaration);

export const getOverAllowance = state =>
  fromDeclaration.getOverAllowance(state.declaration);

export const getLargeAmountPresent = state =>
  fromDeclaration.getLargeAmountPresent(state.declaration);

export const getDeclarationMainCategories = state =>
  fromDeclaration.getDeclarationMainCategories(state.declaration);

export const getDeclarationCurrentQuestion = state =>
  fromDeclaration.getDeclarationCurrentQuestion(state.declaration);

export const getDeclarationSettings = state =>
  fromDeclaration.getDeclarationSettings(state.declaration);

export const getDeclarationInit = state =>
  fromDeclaration.getDeclarationInit(state.declaration);

export const getDeclarationInitList = state =>
  fromDeclaration.getDeclarationInitList(state.declaration);

export const getCurrencies = state =>
  fromDeclaration.getCurrenciesObject(state.declaration);

export const getCurrencyState = state =>
  fromDeclaration.getCurrencyState(state.declaration);

export const getFormattedCurrencyDate = state =>
  formatDate(fromDeclaration.getCurrencyDate(state.declaration));
