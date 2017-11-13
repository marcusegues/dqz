// @flow
import { CATEGORIES, CATEGORIES_LIST } from './categories';
import type { VatRates, CategoriesList, CategoryName } from '../types/basket';
import Immutable from 'immutable';

// any changes to the vat rates go here
export const VAT_RATES: VatRates = Immutable.Map([
  [CATEGORIES.MEAT_AND_MEAT_PRODUCTS, 0.025],
  [CATEGORIES.BUTTER_OR_CREAM, 0.025],
  [CATEGORIES.OILS_FATS_MARGARINE, 0.025],
  [CATEGORIES.OTHER_FOODS, 0.025],
  [CATEGORIES.ALCOHOL_BELOW_18, 0.08],
  [CATEGORIES.ALCOHOL_ABOVE_18, 0.08],
  [CATEGORIES.CIGARETTES_AND_CIGARS, 0.08],
  [CATEGORIES.OTHER_TOBACCO, 0.08],
  [CATEGORIES.MEDICINE, 0.025],
  [CATEGORIES.BOOKS, 0.025],
  [CATEGORIES.MAGAZINES, 0.025],
  [CATEGORIES.FLOWERS_AND_PLANTS, 0.025],
  [CATEGORIES.ANIMAL_FEED, 0.025],
  [CATEGORIES.FERTILIZER, 0.025],
  [CATEGORIES.OTHER_GOODS, 0.08],
]);

// sort from highest tax rates to lowest tax rates
export const SORTED_CATEGORIES: CategoriesList = CATEGORIES_LIST.sort(
  (cat1: CategoryName, cat2: CategoryName): number => {
    return VAT_RATES.get(cat2, 0) - VAT_RATES.get(cat1, 0);
  }
);
