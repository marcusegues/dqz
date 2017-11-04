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
