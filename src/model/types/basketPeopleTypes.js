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

/**
 * todo, jsdoc
 */
export type ExchangeRate = number;

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

// CATEGORY VOLUME
type CategoryVolumeContent = {
  quantities: ImmutableListType<number>,
  amounts: ImmutableListType<number>,
  amountsLarge: ImmutableListType<number>,
};
const makeCategoryVolumeRecord: RecordFactory<
  CategoryVolumeContent
> = Immutable.Record({
  quantities: Immutable.List(),
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

// DUTY BRACKET
type DutyBracketContent = {
  threshold: number,
  fee: number,
};
export const makeDutyBracketRecord: RecordFactory<
  DutyBracketContent
> = Immutable.Record({
  threshold: Infinity,
  fee: 0,
});
export type DutyBracket = RecordOf<DutyBracketContent>;

// RATES
type RatesContent = {
  vat: number,
  duty: ImmutableListType<DutyBracket>,
  dutyAllowance: number,
  dutyAllowanceDependency: ?Category,
  adultsOnly: boolean,
};
export const makeRatesRecord: RecordFactory<RatesContent> = Immutable.Record({
  vat: 0,
  duty: Immutable.List.of(makeDutyBracketRecord()),
  dutyAllowance: Infinity,
  dutyAllowanceDependency: null,
  adultsOnly: false,
});
type Rates = RecordOf<RatesContent>;

/**
 * todo, jsdoc
 */
export type RatesType = ImmutableMapType<Category, Rates>;

// PEOPLE
type PeopleContent = {
  adults: number,
  minors: number,
};
export const makePeopleRecord: RecordFactory<PeopleContent> = Immutable.Record({
  adults: 1,
  minors: 0,
});
export type People = RecordOf<PeopleContent>;
