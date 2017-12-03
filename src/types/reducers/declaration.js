// @flow
import type {
  Map as ImmutableMapType,
  List as ImmutableListType,
  RecordOf,
  RecordFactory,
  Set as ImmutableSetType,
} from 'immutable';
import Immutable from 'immutable';
import type {
  Basket,
  People,
  Category,
} from '../../model/types/basketPeopleTypes';
import type { VatReport, DutyReport } from '../../model/types/calculationTypes';
import { emptyBasket } from '../../model/configurationApi';
import { makePeopleRecord } from '../../model/types/basketPeopleTypes';
import {
  makeDutyReportRecord,
  makeVatReportRecord,
} from '../../model/types/calculationTypes';

export type FoodsCategory = 'Meat' | 'Butter' | 'Oils' | 'OtherFood';
export type FoodsCategoriesType = ImmutableSetType<FoodsCategory>;
export const FoodsCategories: FoodsCategoriesType = Immutable.Set([
  'Meat',
  'Butter',
  'Oils',
  'OtherFood',
]);

export type AlcoholCategory = 'AlcSoft' | 'AlcHard';
export type AlcoholCategoriesType = ImmutableSetType<AlcoholCategory>;
export const AlcoholCategories: AlcoholCategoriesType = Immutable.Set([
  'AlcSoft',
  'AlcHard',
]);

export type TobaccoProductsCategory = 'Cigarettes' | 'Tobacco';
export type TobaccoProductsCategoriesType = ImmutableSetType<
  TobaccoProductsCategory
>;

export const TobaccoProductsCategories: TobaccoProductsCategoriesType = Immutable.Set(
  ['Cigarettes', 'Tobacco']
);

export type OtherGoodsCategory =
  | 'Meds'
  | 'Books'
  | 'Magazines'
  | 'Flowers'
  | 'AnimalFeed'
  | 'Fertilizer'
  | 'Other';
export type OtherGoodsCategoriesType = ImmutableSetType<OtherGoodsCategory>;
export const OtherGoodsCategories: OtherGoodsCategoriesType = Immutable.Set([
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

export type MainCategoriesType = ImmutableSetType<MainCategory> | 'notAnswered';

export const MainCategories: MainCategoriesType = Immutable.Set([
  'Foods',
  'Alcohol',
  'TobaccoProducts',
  'OtherGoods',
]);

export const EmptyMainCategories: MainCategoriesType = Immutable.Set();

export type MainCategoriesToCategoriesType = ImmutableMapType<
  MainCategory,
  ImmutableSetType<Category>
>;

export const MainCategoriesToCategories: MainCategoriesToCategoriesType = Immutable.Map(
  {
    Foods: FoodsCategories,
    Alcohol: AlcoholCategories,
    TobaccoProducts: TobaccoProductsCategories,
    OtherGoods: OtherGoodsCategories,
  }
);

export type OverAllowanceType = boolean | 'notAnswered' | 'dontKnow';
export type LargeAmountPresentType = boolean | 'notAnswered' | 'dontKnow';
export type LargeAmountsEnteredType = boolean | 'notAnswered';
export type AmountsEnteredType = boolean | 'notAnswered';
export type CurrentQuestionType =
  | 'peopleInput'
  | 'overAllowance'
  | 'largeAmountPresent'
  | 'largeAmountInput'
  | 'amountInput'
  | 'mainCategories'
  | 'finished';

export type InitListType = ImmutableListType<CurrentQuestionType>;

export const InitList: InitListType = Immutable.List(['peopleInput']);

type Settings = {
  overAllowance: OverAllowanceType,
  largeAmountPresent: LargeAmountPresentType,
  largeAmountsEntered: LargeAmountsEnteredType,
  amountsEntered: AmountsEnteredType,
  mainCategories: MainCategoriesType,
  currentQuestion: CurrentQuestionType,
  init: boolean,
  initList: InitListType,
};

const makeSettingsRecord: RecordFactory<Settings> = Immutable.Record({
  overAllowance: 'notAnswered',
  largeAmountPresent: 'notAnswered',
  largeAmountsEntered: 'notAnswered',
  amountsEntered: 'notAnswered',
  mainCategories: 'notAnswered',
  currentQuestion: 'peopleInput',
  init: true,
  initList: InitList,
});

export type SettingsType = RecordOf<Settings>;

type StateObj = {
  people: People,
  basket: Basket,
  vatReport: VatReport,
  dutyReport: DutyReport,
  settings: SettingsType,
};

export const getInitialState: RecordFactory<StateObj> = Immutable.Record({
  people: makePeopleRecord(),
  basket: emptyBasket,
  vatReport: makeVatReportRecord(),
  dutyReport: makeDutyReportRecord(),
  settings: makeSettingsRecord(),
});

export type State = RecordOf<StateObj>;
