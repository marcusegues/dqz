// @flow
import type { CategoryName } from './basket';

export type dutyCalculatorBasketCategoryInfo = {
  +quantity: number,
};

export type dutyCalculatorBasket = {
  [category: CategoryName]: dutyCalculatorBasketCategoryInfo,
};
