// @flow

export type ReceiptsAction =
  | { type: 'SET_RECEIPT_ID', receiptId: string }
  | { type: 'SET_RECEIPT_ENTRY_TIME', receiptEntryTime: string };
