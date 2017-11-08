// @flow
import type { CategoryName } from './basket';
import type {
  Map as ImmutableMapType,
  RecordOf,
  RecordFactory,
  List as ImmutableListType,
} from 'immutable';
import Immutable from 'immutable';
export type VatByCategory = ImmutableMapType<CategoryName, number>;

type vatReportContent = {
  totalVat: number,
  vatByCategoryRaw: ImmutableMapType<CategoryName, number>,
};

export const makeVatReportRecord: RecordFactory<vatReportContent> = Immutable.Record({
  totalVat: 0,
  vatByCategoryRaw: Immutable.Map(),
});

export type VatReport = RecordOf<vatReportContent>;

type VatBasketCategoryInfo = {
  valuesNormal: ImmutableListType<number>,
  valuesLarge: ImmutableListType<number>,
};

export const makeVatBasketCategoryInfo: RecordFactory<VatBasketCategoryInfo> = Immutable.Record({
  valuesNormal: Immutable.List(),
  valuesLarge: Immutable.List(),
});

export type VatBasketCategoryInfoType = RecordOf<VatBasketCategoryInfo>;

export type VatBasket = ImmutableMapType<CategoryName,
  VatBasketCategoryInfoType>;

export type VatCalculatorInputType = [VatBasket, number];
