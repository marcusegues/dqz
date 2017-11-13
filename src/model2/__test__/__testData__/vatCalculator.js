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
      valuesNormal: Immutable.List([12, 31]),
      valuesLarge: Immutable.List(),
    }),
    BUTTER_OR_CREAM: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([12.34, 125]),
      valuesLarge: Immutable.List([525]),
    }),
    OTHER_TOBACCO: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([11, 33]),
      valuesLarge: Immutable.List([5555]),
    }),
  }),
  1,
];

export const sampleBasket2: VatCalculatorInputType = [
  Immutable.Map({
    MEAT_AND_MEAT_PRODUCTS: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([12, 31]),
      valuesLarge: Immutable.List(),
    }),
    BUTTER_OR_CREAM: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([
        12.34,
        125,
        125,
        125,
        125,
        125,
        125,
        125,
        125,
      ]),
      valuesLarge: Immutable.List([525]),
    }),
    OTHER_TOBACCO: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([11, 33]),
      valuesLarge: Immutable.List([5555]),
    }),
  }),
  1,
];

const exchangeRate3 = 1.19;
export const sampleBasket3: VatCalculatorInputType = [
  Immutable.Map({
    MEAT_AND_MEAT_PRODUCTS: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([240 * exchangeRate3]),
      valuesLarge: Immutable.List(),
    }),
    BUTTER_OR_CREAM: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([20 * exchangeRate3]),
      valuesLarge: Immutable.List(),
    }),
    ALCOHOL_BELOW_18: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([30 * exchangeRate3]),
      valuesLarge: Immutable.List(),
    }),
    ALCOHOL_ABOVE_18: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([450 * exchangeRate3]),
      valuesLarge: Immutable.List(),
    }),
  }),
  1,
];

const exchangeRate4 = 1.19;
export const sampleBasket4: VatCalculatorInputType = [
  Immutable.Map({
    MEAT_AND_MEAT_PRODUCTS: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([40 * exchangeRate4]),
      valuesLarge: Immutable.List(),
    }),
    BUTTER_OR_CREAM: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([20 * exchangeRate4]),
      valuesLarge: Immutable.List(),
    }),
    OTHER_FOODS: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([350 * exchangeRate4]),
      valuesLarge: Immutable.List(),
    }),
    ALCOHOL_ABOVE_18: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([50 * exchangeRate4]),
      valuesLarge: Immutable.List(),
    }),
    OTHER_GOODS: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([200 * exchangeRate4]),
      valuesLarge: Immutable.List(),
    }),
  }),
  1,
];

// examples in Presentation "Verzollungs App im RV"
export const presentationBasket1: VatCalculatorInputType = [
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

export const presentationBasket2: VatCalculatorInputType = [
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

// EZV baskets
// https://www.ezv.admin.ch/ezv/de/home/information-private/reisen-und-einkaufen--freimengen-und-wertfreigrenze/einfuhr-in-die-schweiz/warenwert-bis-chf-300--mehrwertsteuerfrei.html
export const ezvBasket1: VatCalculatorInputType = [
  Immutable.Map({
    MEAT_AND_MEAT_PRODUCTS: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([100, 100, 100]),
      valuesLarge: Immutable.List(),
    }),
  }),
  1,
];

export const ezvBasket2: VatCalculatorInputType = [
  Immutable.Map({
    MEAT_AND_MEAT_PRODUCTS: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([100, 100, 100, 100]),
      valuesLarge: Immutable.List(),
    }),
  }),
  1,
];

export const ezvBasket3: VatCalculatorInputType = [
  Immutable.Map({
    MEAT_AND_MEAT_PRODUCTS: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([100, 100, 100, 100, 100, 100]),
      valuesLarge: Immutable.List(),
    }),
  }),
  1,
];

export const ezvBasket4: VatCalculatorInputType = [
  Immutable.Map({
    MEAT_AND_MEAT_PRODUCTS: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
      ]),
      valuesLarge: Immutable.List(),
    }),
  }),
  1,
];

export const ezvBasket5: VatCalculatorInputType = [
  Immutable.Map({
    MEAT_AND_MEAT_PRODUCTS: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List(),
      valuesLarge: Immutable.List([400]),
    }),
  }),
  1,
];

export const ezvBasket6: VatCalculatorInputType = [
  Immutable.Map({
    MEAT_AND_MEAT_PRODUCTS: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List(),
      valuesLarge: Immutable.List([320]),
    }),
  }),
  1,
];

export const ezvBasket7: VatCalculatorInputType = [
  Immutable.Map({
    MEAT_AND_MEAT_PRODUCTS: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([220, 220]),
      valuesLarge: Immutable.List(),
    }),
  }),
  1,
];

export const ezvBasket8: VatCalculatorInputType = [
  Immutable.Map({
    MEAT_AND_MEAT_PRODUCTS: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([220, 220, 220]),
      valuesLarge: Immutable.List(),
    }),
  }),
  1,
];

export const ezvBasket9: VatCalculatorInputType = [
  Immutable.Map({
    MEAT_AND_MEAT_PRODUCTS: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([250, 250, 250, 250]),
      valuesLarge: Immutable.List(),
    }),
  }),
  1,
];

export const ezvBasket10: VatCalculatorInputType = [
  Immutable.Map({
    MEAT_AND_MEAT_PRODUCTS: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List(),
      valuesLarge: Immutable.List([800]),
    }),
  }),
  1,
];

export const ezvBasket11: VatCalculatorInputType = [
  Immutable.Map({
    MEAT_AND_MEAT_PRODUCTS: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([200, 200, 200, 200, 200]),
      valuesLarge: Immutable.List(),
    }),
  }),
  1,
];

export const ezvBasket12: VatCalculatorInputType = [
  Immutable.Map({
    MEAT_AND_MEAT_PRODUCTS: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([200, 200]),
      valuesLarge: Immutable.List([500]),
    }),
  }),
  1,
];

export const ezvBasket13: VatCalculatorInputType = [
  Immutable.Map({
    MEAT_AND_MEAT_PRODUCTS: makeVatBasketCategoryInfo({
      valuesNormal: Immutable.List([200, 200, 200, 200, 200]),
      valuesLarge: Immutable.List([500]),
    }),
  }),
  1,
];
