import { combineReducers } from 'redux';
import calculatorBasket from './calculatorBasket';
import declaredBasket from './declaredBasket';
import * as fromDeclaredBasket from './declaredBasket';

const root = combineReducers({ calculatorBasket, declaredBasket });

export default root;

export const getDutyForCategory = (state, categoryName) => {
  return fromDeclaredBasket.getDutyForCategory(
    state.declaredBasket,
    categoryName
  );
};

export const getIconForCategory = (state, categoryName) => {
  return fromDeclaredBasket.getIconForCategory(
    state.declaredBasket,
    categoryName
  );
};

export const getTotalDuty = state => {
  return fromDeclaredBasket.getTotalDuty(state.declaredBasket);
};
