/* eslint-disable prefer-destructuring */
// @flow

import type { ReceiptsState } from '../types/reducers/receipts';
import { getInitialReceiptsState } from '../types/reducers/receipts';
import type { ReceiptsAction } from '../types/actions/receipts';

export const receipts = (
  state: ReceiptsState = getInitialReceiptsState(),
  action: ReceiptsAction
): ReceiptsState => {
  switch (action.type) {
    case 'SET_RECEIPT_ID': {
      const receiptId: string = action.receiptId;
      return state.set('receiptId', receiptId);
    }

    default: {
      return state;
    }
  }
};

export const getReceiptId = (state: ReceiptsState): string =>
  state.get('receiptId');
