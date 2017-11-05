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
  ImmutableListType
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
  totalLargeItemsAmount: number,
  totalNormalItemsAmount: number,
  totalAllowance: number,
  totalVatLargeItems: number,
  totalVatNormalItems: number,
};

export const makeVatReportRecord: RecordFactory<
  vatReportContent
> = Immutable.Record({
  totalLargeItemsAmount: 0,
  totalNormalItemsAmount: 0,
  totalAllowance: 0,
  totalVatLargeItems: 0,
  totalVatNormalItems: 0,
});

export type VatReport = RecordOf<vatReportContent>;

// DUTY
export type DutyReport = ImmutableMapType<Category, number>;
