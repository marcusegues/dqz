// @flow
import type {
  Map as ImmutableMapType,
  RecordOf,
  RecordFactory,
  List as ImmutableListType,
  OrderedMap as ImmutableOrderedMapType,
} from 'immutable';
import Immutable from 'immutable';

export type CategoryName =
  | 'MEAT_AND_MEAT_PRODUCTS'
  | 'BUTTER_OR_CREAM'
  | 'OILS_FATS_MARGARINE'
  | 'OTHER_FOODS'
  | 'ALCOHOL_BELOW_18'
  | 'ALCOHOL_ABOVE_18'
  | 'CIGARETTES_AND_CIGARS'
  | 'OTHER_TOBACCO'
  | 'MEDICINE'
  | 'BOOKS'
  | 'MAGAZINES'
  | 'FLOWERS_AND_PLANTS'
  | 'ANIMAL_FEED'
  | 'FERTILIZER'
  | 'OTHER_GOODS';

type CategoryInfoContent = {
  name: string,
  unit: string | null,
  icon: string,
};

export const makeCategoryInfoRecord: RecordFactory<CategoryInfoContent> = Immutable.Record({ name: 'category', unit: null, icon: 'icon' });

type CategoryInfoRecord = RecordOf<CategoryInfoContent>;

export type CategoriesInfoType = ImmutableMapType<CategoryName,
  CategoryInfoRecord>;

export type Categories = {
  [category: CategoryName]: CategoryName,
};

export type CategoriesList = ImmutableListType<CategoryName>;

export type VatRates = ImmutableMapType<CategoryName, number>;

type BasketCategoryInfo = {
  quantity: number,
  duty: number,
  vat: number,
  valuesNormal: ImmutableListType<number>,
  valuesLarge: ImmutableListType<number>,
};

export const makeBasketCategoryInfo: RecordFactory<BasketCategoryInfo> = Immutable.Record({
  quantity: 0,
  duty: 0,
  vat: 0,
  valuesNormal: Immutable.List(),
  valuesLarge: Immutable.List(),
});

export type BasketCategoryInfoType = RecordOf<BasketCategoryInfo>;

export type Basket = ImmutableMapType<CategoryName, BasketCategoryInfoType>;
