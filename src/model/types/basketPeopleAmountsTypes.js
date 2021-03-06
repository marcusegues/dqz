// @flow
import type {
  Map as ImmutableMapType,
  RecordOf,
  RecordFactory,
  List as ImmutableListType,
} from 'immutable';
import Immutable from 'immutable';
import type { Currency } from '../currencies';
import type { CategoryUnit } from './categoryUnit';

/**
 * Declare the Main Categories
 */

export type MeatCategory = 'Meat';
export type ButterCategory = 'Butter';
export type OilCategory = 'Oils';
export type AlcoholCategory = 'AlcSoft' | 'AlcHard';
export type TobaccoProductsCategory = 'Cigarettes' | 'Tobacco';
export type OtherGoodsCategory =
  | 'OtherFood'
  | 'Meds'
  | 'Books'
  | 'Magazines'
  | 'Flowers'
  | 'AnimalFeed'
  | 'Fertilizer'
  | 'Other';

export type Category =
  | MeatCategory
  | ButterCategory
  | OilCategory
  | AlcoholCategory
  | TobaccoProductsCategory
  | OtherGoodsCategory;

// CATEGORY INFO
type CategoryInfoContent = {
  name: string,
  unit: CategoryUnit,
  icon: string,
};
export const makeCategoryInfoRecord: RecordFactory<
  CategoryInfoContent
> = Immutable.Record({
  name: 'category',
  unit: 'kilo',
  icon: 'icon',
});
type CategoryInfo = RecordOf<CategoryInfoContent>;

export type Quantity = {
  number: number,
  date: string,
};

/**
 * todo jsdoc
 */
export type CategoryInfoType = ImmutableMapType<Category, CategoryInfo>;

// CATEGORY VOLUME
type CategoryVolumeContent = {
  quantities: ImmutableListType<Quantity>,
};
export const makeCategoryVolumeRecord: RecordFactory<
  CategoryVolumeContent
> = Immutable.Record({
  quantities: Immutable.List(),
});
type CategoryVolume = RecordOf<CategoryVolumeContent>;

// CATEGORY BASKET ITEM
type CategoryBasketItemContent = {
  volume: CategoryVolume,
};
export const makeCategoryBasketItemRecord: RecordFactory<
  CategoryBasketItemContent
> = Immutable.Record({
  volume: makeCategoryVolumeRecord(),
});

/**
 * todo, jsdoc
 */
export type CategoryBasketItem = RecordOf<CategoryBasketItemContent>;

/**
 * Basket Type, omnipresent
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
  quantityRoundingBase10: number,
};

export const makeRatesRecord: RecordFactory<RatesContent> = Immutable.Record({
  vat: 0,
  duty: Immutable.List.of(makeDutyBracketRecord()),
  dutyAllowance: Infinity,
  dutyAllowanceDependency: null,
  adultsOnly: false,
  quantityRoundingBase10: 0,
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

// AMOUNTS
export type AmountWithId = {
  amount: number,
  id: string,
};

type AmountsOfCurrencyContent = {
  amounts: ImmutableListType<AmountWithId>,
  largeAmounts: ImmutableListType<AmountWithId>,
};

export const makeAmountsOfCurrencyRecord: RecordFactory<
  AmountsOfCurrencyContent
> = Immutable.Record({
  amounts: Immutable.List(),
  largeAmounts: Immutable.List(),
});

export type AmountsOfCurrency = RecordOf<AmountsOfCurrencyContent>;

export type Amounts = ImmutableMapType<Currency, AmountsOfCurrency>;
