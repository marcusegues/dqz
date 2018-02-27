// @flow
import type { RecordOf, RecordFactory } from 'immutable';
import Immutable from 'immutable';

type ReceiptsStateObj = {
  receiptId: string,
};

export const getInitialReceiptsState: RecordFactory<
  ReceiptsStateObj
> = Immutable.Record({
  receiptId: '',
});

export type ReceiptsState = RecordOf<ReceiptsStateObj>;
