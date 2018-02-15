// @flow
import type { PaymentData } from './generalTypes';
import type {
  Amounts,
  Basket,
  People,
} from '../model/types/basketPeopleAmountsTypes';
import type { CurrencyObject } from '../model/currencies';

/**
 * Type for Receipt for AsyncStore.
 */
export type Receipt = {
  receiptId: string,
  receiptEntryTime: string,
  amounts: Amounts,
  people: People,
  basket: Basket,
  currencies: CurrencyObject,
  paymentData: PaymentData,
};
