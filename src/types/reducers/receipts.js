// @flow
import type { RecordOf, RecordFactory } from 'immutable';
import Immutable from 'immutable';

type ReceiptsStateObj = {
  receiptId: string,
  receiptEntryTime: string,
};

export const getInitialReceiptsState: RecordFactory<
  ReceiptsStateObj
> = Immutable.Record({
  receiptId: '',
  receiptEntryTime: '',
});

export type ReceiptsState = RecordOf<ReceiptsStateObj>;
