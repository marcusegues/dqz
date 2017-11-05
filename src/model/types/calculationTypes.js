import type {
  List as ImmutableListType,
  OrderedMap as ImmutableOrderedMapType,
  RecordFactory,
  RecordOf,
} from 'immutable';
import Immutable from 'immutable';

export type amountsInBracket = ImmutableOrderedMapType<
  number,
  ImmutableListType
>;

type allAmountsPerVatContent = {
  large: amountsInBracket,
  normal: amountsInBracket,
};

// TODO can extend here if we want to keep totals per category (for receipt)
export const makeAllAmountsPerVatBracketRecord: RecordFactory<
  allAmountsPerVatContent
> = Immutable.Record({
  large: Immutable.OrderedMap(),
  normal: Immutable.OrderedMap(),
});

export type allAmountsPerVatBracket = RecordOf<allAmountsPerVatContent>;

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

export type vatReport = RecordOf<vatReportContent>;
