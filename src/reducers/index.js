import { combineReducers } from 'redux';
import declaration, * as fromDeclaration from './declaration';

const root = combineReducers({ declaration });

export default root;

export const getDeclarationPeople = state =>
  fromDeclaration.getDeclarationPeople(state.declaration);

export const getOverAllowance = state =>
  fromDeclaration.getOverAllowance(state.declaration);

export const getLargeAmountPresent = state =>
  fromDeclaration.getLargeAmountPresent(state.declaration);

export const getDeclarationMainCategories = state =>
  fromDeclaration.getDeclarationMainCategories(state.declaration);
