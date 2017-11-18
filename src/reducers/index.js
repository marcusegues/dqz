import { combineReducers } from 'redux';
import declaration from './declaration';
import * as fromDeclaration from './declaration';

const root = combineReducers({ declaration });

export default root;

export const getDutyForCategory = (state, categoryName) => {
  return fromDeclaration.getDutyForCategory(state.declaration, categoryName);
};

export const getIconForCategory = (state, categoryName) => {
  return fromDeclaration.getIconForCategory(state.declaration, categoryName);
};

export const getTotalDuty = state => {
  return fromDeclaration.getTotalDuty(state.declaration);
};
