// @flow
import type {
  VatBasket,
  VatCalculatorInputType,
} from '../../types/vatCalculator';
import { makeVatBasketCategoryInfo } from '../../types/vatCalculator';
import Immutable from 'immutable';

export const sampleBasket1: VatCalculatorInputType = [
  Immutable.Map({
    MEAT_AND_MEAT_PRODUCTS: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([12, 31, 111]),
      valuesLarge: Immutable.List([0]),
    }),
    BUTTER_OR_CREAM: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([12.34, 125, 23]),
      valuesLarge: Immutable.List([525]),
    }),
    OTHER_TOBACCO: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([11, 33]),
      valuesLarge: Immutable.List([5555]),
    }),
  }),
  1,
];

export const example1: VatCalculatorInputType = [
  Immutable.Map({
    MEAT_AND_MEAT_PRODUCTS: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([240 * 1.19]),
      valuesLarge: Immutable.List([0]),
    }),
    BUTTER_OR_CREAM: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([20 * 1.19]),
      valuesLarge: Immutable.List([0]),
    }),
    ALCOHOL_BELOW_18: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([30 * 1.19]),
      valuesLarge: Immutable.List([0]),
    }),
    ALCOHOL_ABOVE_18: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([50 * 1.19]),
      valuesLarge: Immutable.List([0]),
    }),
    OTHER_GOODS: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([400 * 1.19]),
      valuesLarge: Immutable.List([0]),
    }),
  }),
  1,
];

export const example2: VatCalculatorInputType = [
  Immutable.Map({
    MEAT_AND_MEAT_PRODUCTS: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([40 * 1.19]),
      valuesLarge: Immutable.List([0]),
    }),
    BUTTER_OR_CREAM: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([20 * 1.19]),
      valuesLarge: Immutable.List([0]),
    }),
    OTHER_FOODS: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([350 * 1.19]),
      valuesLarge: Immutable.List([0]),
    }),
    ALCOHOL_ABOVE_18: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([50 * 1.19]),
      valuesLarge: Immutable.List([0]),
    }),
    OTHER_GOODS: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([200 * 1.19]),
      valuesLarge: Immutable.List([0]),
    }),
  }),
  1,
];
