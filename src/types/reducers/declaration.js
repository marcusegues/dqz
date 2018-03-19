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
  MeatCategory,
  ButterCategory,
  OilCategory,
  AlcoholCategory,
  TobaccoProductsCategory,
  OtherGoodsCategory,
} from '../../model/types/basketPeopleAmountsTypes';
import { emptyAmounts, emptyBasket } from '../../model/configurationApi';
import { makePeopleRecord } from '../../model/types/basketPeopleAmountsTypes';

import { makePaymentDataRecord } from '../generalTypes';
import type { PaymentData } from '../generalTypes';

export type MeatCategories = ImmutableSetType<MeatCategory>;
export const meatCategories: MeatCategories = Immutable.Set(['Meat']);

export type ButterCategories = ImmutableSetType<ButterCategory>;
export const butterCategories: ButterCategories = Immutable.Set(['Butter']);

export type OilCategories = ImmutableSetType<OilCategory>;
export const oilCategories: OilCategories = Immutable.Set(['Oils']);

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
  'OtherFood',
  'Other',
]);

export type MainCategory =
  | 'Meat'
  | 'Butter'
  | 'Oil'
  | 'Alcohol'
  | 'TobaccoProducts'
  | 'OtherGoods';

export type MainCategories = ImmutableSetType<MainCategory>;

export const mainCategories: MainCategories = Immutable.Set([
  'Meat',
  'Butter',
  'Oil',
  'Alcohol',
  'TobaccoProducts',
  'OtherGoods',
]);

export const emptyMainCategories = Immutable.Set();

export const getMainCategory = (category: any): MainCategory => {
  if (meatCategories.has(category)) {
    return 'Meat';
  }
  if (butterCategories.has(category)) {
    return 'Butter';
  }
  if (oilCategories.has(category)) {
    return 'Oil';
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
    case 'Meat': {
      return meatCategories;
    }
    case 'Butter': {
      return butterCategories;
    }
    case 'Oil': {
      return oilCategories;
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
  mainCategories: emptyMainCategories,
});

export type Settings = RecordOf<SettingsContent>;

export const emptyReceiptEntryTime = '';

type DeclarationStateObj = {
  people: People,
  basket: Basket,
  settings: Settings,
  amounts: Amounts,
  paymentData: PaymentData,
  receiptEntryTime: string,
};

export const getInitialDeclarationState: RecordFactory<
  DeclarationStateObj
> = Immutable.Record({
  people: makePeopleRecord(),
  basket: emptyBasket,
  settings: makeSettingsRecord(),
  amounts: emptyAmounts,
  paymentData: makePaymentDataRecord(),
  receiptEntryTime: emptyReceiptEntryTime,
});

export type DeclarationState = RecordOf<DeclarationStateObj>;
