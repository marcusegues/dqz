// @flow
import type {
  Map as ImmutableMapType,
  RecordOf,
  RecordFactory,
  List as ImmutableListType,
} from 'immutable';
import Immutable from 'immutable';
import type { Category } from './category';

// CATEGORY VOLUME
type CategoryVolumeContent = {
  quantity: number,
  amounts: ImmutableListType<number>,
  amountsLarge: ImmutableListType<number>,
};
const makeCategoryVolumeRecord: RecordFactory<
  CategoryVolumeContent
> = Immutable.Record({
  quantity: 0,
  amounts: Immutable.List(),
  amountsLarge: Immutable.List(),
});
type CategoryVolume = RecordOf<CategoryVolumeContent>;

// CATEGORY DUES
type CategoryDuesContent = {
  duty: number,
  vat: number,
};
const makeCategoryDuesRecord: RecordFactory<
  CategoryDuesContent
> = Immutable.Record({
  duty: 0,
  vat: 0,
});
type CategoryDues = RecordOf<CategoryDuesContent>;

// CATEGORY BASKET ITEM
type CategoryBasketItemContent = {
  volume: CategoryVolume,
  dues: CategoryDues,
};
export const makeCategoryBasketItemRecord: RecordFactory<
  CategoryBasketItemContent
> = Immutable.Record({
  volume: makeCategoryVolumeRecord(),
  dues: makeCategoryDuesRecord(),
});

/**
 * todo, jsdoc
 */
export type CategoryBasketItem = RecordOf<CategoryBasketItemContent>;

/**
 * todo, jsdoc
 */
export type Basket = ImmutableMapType<Category, CategoryBasketItem>;
