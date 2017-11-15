// @flow
import type {
  List as ImmutableListType,
  OrderedMap as ImmutableOrderedMapType,
  Map as ImmutableMapType,
  RecordFactory,
  RecordOf,
} from 'immutable';
import Immutable from 'immutable';
import type { Category } from './basketPeopleTypes';

// VAT

export type AmountsInBracket = ImmutableOrderedMapType<
  number,
  ImmutableListType<number>
>;

type AllAmountsPerVatContent = {
  large: AmountsInBracket,
  normal: AmountsInBracket,
};

// TODO can extend here if we want to keep totals per category (for receipt)
export const makeAllAmountsPerVatBracketRecord: RecordFactory<
  AllAmountsPerVatContent
> = Immutable.Record({
  large: Immutable.OrderedMap(),
  normal: Immutable.OrderedMap(),
});

export type AllAmountsPerVatBracket = RecordOf<AllAmountsPerVatContent>;

// note: we are not returning vat per cat
type vatReportContent = {
  totalVat: number,
  vatByCategoryRaw: ImmutableMapType<Category, number>,
};

export const makeVatReportRecord: RecordFactory<
  vatReportContent
> = Immutable.Record({
  totalVat: 0,
  vatByCategoryRaw: Immutable.Map(),
});

export type VatReport = RecordOf<vatReportContent>;

// DUTY
type DutyReportContent = {
  totalDuty: number,
  dutyByCategoryRaw: ImmutableMapType<Category, number>,
};

export const makeDutyReportRecord: RecordFactory<
  DutyReportContent
> = Immutable.Record({
  totalDuty: 0,
  dutyByCategoryRaw: Immutable.Map(),
});

export type DutyReport = RecordOf<DutyReportContent>;
