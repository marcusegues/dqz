// @flow
import { CATEGORIES } from '../constants/categories';

export type CategoryName =
  | CATEGORIES.MEAT_AND_MEAT_PRODUCTS
  | CATEGORIES.BUTTER_OR_CREAM
  | CATEGORIES.OILS_FATS_MARGARINE
  | CATEGORIES.OTHER_FOODS
  | CATEGORIES.ALCOHOL_BELOW_18
  | CATEGORIES.ALCOHOL_ABOVE_18
  | CATEGORIES.CIGARETTES_AND_CIGARS
  | CATEGORIES.OTHER_TOBACCO
  | CATEGORIES.MEDICINE
  | CATEGORIES.BOOKS
  | CATEGORIES.MAGAZINES
  | CATEGORIES.FLOWERS_AND_PLANTS
  | CATEGORIES.ANIMAL_FEED
  | CATEGORIES.FERTILIZER;

export type CategoryInfo = {
  +name: ?string,
  +unit: ?string,
  +icon: ?string,
};

export type CategoriesInfo = {
  +[category: CategoryName]: CategoryInfo,
};

export type VatRates = {
  +[category: CategoryName]: number,
};

export type BasketCategoryInfo = {
  quantity: number,
  duty: number,
  values: Array<number>,
};

export type Basket = {
  +[category: CategoryName]: BasketCategoryInfo,
};
