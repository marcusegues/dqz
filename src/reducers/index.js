import { combineReducers } from 'redux';
import declaration from './declaration';
import * as fromDeclaration from './declaration';

const root = combineReducers({ declaration });

export default root;

export const getDeclarationPeople = state => {
  return fromDeclaration.getDeclarationPeople(state.declaration);
};

export const getOverAllowance = state =>
  fromDeclaration.getOverAllowance(state.declaration);

export const getLargeAmountPresent = state =>
  fromDeclaration.getLargeAmountPresent(state.declaration);
