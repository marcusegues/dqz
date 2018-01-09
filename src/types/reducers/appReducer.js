// @flow
import type {
  RecordOf,
  RecordFactory,
  Set as ImmutableSetType,
} from 'immutable';
import Immutable from 'immutable';
import type {
  Basket,
  People,
  Category,
  Amounts,
  FoodsCategory,
  AlcoholCategory,
  TobaccoProductsCategory,
  OtherGoodsCategory,
} from '../../model/types/basketPeopleAmountsTypes';
import type { VatReport, DutyReport } from '../../model/types/calculationTypes';
import { emptyBasket } from '../../model/configurationApi';
import { makePeopleRecord } from '../../model/types/basketPeopleAmountsTypes';
import {
  makeDutyReportRecord,
  makeVatReportRecord,
} from '../../model/types/calculationTypes';
import type { CurrencyObject } from '../../model/currencies';

export type FoodsCategories = ImmutableSetType<FoodsCategory>;
export const foodsCategories: FoodsCategories = Immutable.Set([
  'Meat',
  'Butter',
  'Oils',
  'OtherFood',
]);

export type AlcoholCategories = ImmutableSetType<AlcoholCategory>;
export const alcoholCategories: AlcoholCategories = Immutable.Set([
  'AlcSoft',
  'AlcHard',
]);

export type TobaccoProductsCategories = ImmutableSetType<
  TobaccoProductsCategory
>;

export const tobaccoProductsCategories: TobaccoProductsCategories = Immutable.Set(
  ['Cigarettes', 'Tobacco']
);

export type OtherGoodsCategories = ImmutableSetType<OtherGoodsCategory>;
export const otherGoodsCategories: OtherGoodsCategories = Immutable.Set([
  'Meds',
  'Books',
  'Magazines',
  'Flowers',
  'AnimalFeed',
  'Fertilizer',
  'Other',
]);

export type MainCategory =
  | 'Foods'
  | 'Alcohol'
  | 'TobaccoProducts'
  | 'OtherGoods';

export type MainCategories = ImmutableSetType<MainCategory>;

export const mainCategories: MainCategories = Immutable.Set([
  'Foods',
  'Alcohol',
  'TobaccoProducts',
  'OtherGoods',
]);

export const EmptyMainCategories: MainCategories = Immutable.Set();

// TODO improve types
export const getMainCategory = (category: any): MainCategory => {
  if (foodsCategories.has(category)) {
    return 'Foods';
  }
  if (alcoholCategories.has(category)) {
    return 'Alcohol';
  }
  if (tobaccoProductsCategories.has(category)) {
    return 'TobaccoProducts';
  }
  return 'OtherGoods';
};

export const getSubCategories = (
  main: MainCategory
): ImmutableSetType<Category> => {
  switch (main) {
    case 'Foods': {
      return foodsCategories;
    }
    case 'Alcohol': {
      return alcoholCategories;
    }
    case 'TobaccoProducts': {
      return tobaccoProductsCategories;
    }
    default:
      return otherGoodsCategories;
  }
};

type SettingsContent = {
  mainCategories: MainCategories,
};

export const makeSettingsRecord: RecordFactory<
  SettingsContent
> = Immutable.Record({
  mainCategories: EmptyMainCategories,
});

export type Settings = RecordOf<SettingsContent>;

type StateObj = {
  people: People,
  basket: Basket,
  vatReport: VatReport,
  dutyReport: DutyReport,
  settings: Settings,
  currencyObject: CurrencyObject,
  validCurrencies: boolean,
  currencyDate: Date,
  amounts: Amounts,
};

export const getInitialState: RecordFactory<StateObj> = Immutable.Record({
  people: makePeopleRecord(),
  basket: emptyBasket,
  vatReport: makeVatReportRecord(),
  dutyReport: makeDutyReportRecord(),
  settings: makeSettingsRecord(),
  currencyObject: {},
  validCurrencies: false,
  currencyDate: new Date('2000-01-01'),
  amounts: Immutable.Map(),
});

export type State = RecordOf<StateObj>;
