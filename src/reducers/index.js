import { combineReducers } from 'redux';
import calculatorBasket from './calculatorBasket';
import declaredBasket from './declaredBasket';

const root = combineReducers({ calculatorBasket, declaredBasket });

export default root;
