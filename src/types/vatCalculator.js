// @flow
import type { CategoryName } from './basket';

export type vatCalculatorBasketCategoryInfo = {
  +totalValue: number,
  +totalHighItemValue: number,
};

export type vatCalculatorBasket = {
  [category: CategoryName]: vatCalculatorBasketCategoryInfo,
};
