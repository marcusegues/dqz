// @flow
import type { CategoryName } from './basket';

export type DutyCalculatorBasketCategoryInfo = {
  +quantity: number,
};

export type DutyCalculatorBasket = {
  [category: CategoryName]: DutyCalculatorBasketCategoryInfo,
};

export type DutyByCategory = {
  [category: CategoryName]: number,
};
