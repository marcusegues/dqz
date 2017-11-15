// @flow
import type {
  Map as ImmutableMapType,
  RecordOf,
  RecordFactory,
  List as ImmutableListType,
  OrderedMap as ImmutableOrderedMapType,
} from 'immutable';
import Immutable from 'immutable';
import type { Category } from './category';

// DUTY BRACKET
type DutyBracketContent = {
  threshold: number,
  fee: number,
};
export const makeDutyBracketRecord: RecordFactory<DutyBracketContent> = Immutable.Record({
  threshold: Infinity,
  fee: 0,
});
export type DutyBracket = RecordOf<DutyBracketContent>;

// RATES
type RatesContent = {
  vat: number,
  duty: ImmutableListType<DutyBracket>,
  dutyAllowance: number,
  adultsOnly: boolean,
};
export const makeRatesRecord: RecordFactory<RatesContent> = Immutable.Record({
  vat: 0,
  duty: Immutable.List.of(makeDutyBracketRecord()),
  dutyAllowance: Infinity,
  adultsOnly: false,
});

export type Rates = RecordOf<RatesContent>;

/**
 * todo, jsdoc
 */
export type RatesType = ImmutableMapType<Category, Rates>;

// VAT
export type AmountsInBracket = ImmutableOrderedMapType<number,
  ImmutableListType>;

type AllAmountsPerVatContent = {
  large: AmountsInBracket,
  normal: AmountsInBracket,
};

// TODO can extend here if we want to keep totals per category (for receipt)
export const makeAllAmountsPerVatBracketRecord: RecordFactory<AllAmountsPerVatContent> = Immutable.Record({
  large: Immutable.OrderedMap(),
  normal: Immutable.OrderedMap(),
});

export type AllAmountsPerVatBracket = RecordOf<AllAmountsPerVatContent>;

// note: we are not returning vat per cat
type vatReportContent = {
  totalVat: number,
  vatByCategoryRaw: ImmutableMapType<Category, number>,
};

export const makeVatReportRecord: RecordFactory<vatReportContent> = Immutable.Record({
  totalVat: 0,
  vatByCategoryRaw: Immutable.Map(),
});

export type VatReport = RecordOf<vatReportContent>;

// DUTY
type DutyReportContent = {
  totalDuty: number,
  dutyByCategoryRaw: ImmutableMapType<Category, number>,
};

export const makeDutyReportRecord: RecordFactory<DutyReportContent> = Immutable.Record({
  totalDuty: 0,
  dutyByCategoryRaw: Immutable.Map(),
});

export type DutyReport = RecordOf<DutyReportContent>;
