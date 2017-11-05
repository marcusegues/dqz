// @flow
import type { CategoryName } from './basket';

export type VatCalculatorBasketCategoryInfo = {
  totalValueExcludingHighItems: number,
  totalHighItemValue: number,
};

export type VatCalculatorBasket = {
  [category: CategoryName]: VatCalculatorBasketCategoryInfo,
};

export type VatByCategory = {
  [category: CategoryName]: number,
};
