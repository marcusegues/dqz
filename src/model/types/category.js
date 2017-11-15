// @flow
import type {
  Map as ImmutableMapType,
  RecordOf,
  RecordFactory,
  List as ImmutableListType,
} from 'immutable';
import Immutable from 'immutable';

/**
 * todo, jsdoc
 */
export type Category =
  | 'Meat'
  | 'Butter'
  | 'Oils'
  | 'OtherFood'
  | 'AlcSoft'
  | 'AlcHard'
  | 'Cigarettes'
  | 'Tobacco'
  | 'Meds'
  | 'Books'
  | 'Magazines'
  | 'Flowers'
  | 'AnimalFeed'
  | 'Fertilizer'
  | 'Other';

// CATEGORY INFO
type CategoryInfoContent = {
  name: string,
  unit: string,
  icon: string,
};
export const makeCategoryInfoRecord: RecordFactory<
  CategoryInfoContent
> = Immutable.Record({
  name: 'category',
  unit: 'kg',
  icon: 'icon',
});
type CategoryInfo = RecordOf<CategoryInfoContent>;

/**
 * todo jsdoc
 */
export type CategoryInfoType = ImmutableMapType<Category, CategoryInfo>;
