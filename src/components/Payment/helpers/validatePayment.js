// @flow

import type { ConnectivityType } from '../../../types/connectivity';
import type { PaymentData } from '../../../types/generalTypes';
import type { CurrencyObject } from '../../../model/currencies';
import type { Amounts } from '../../../model/types/basketPeopleAmountsTypes';
import {
  MAX_DECLARED_CHF,
  MAX_PAYMENT_CHF,
  MIN_DECLARED_CHF,
} from '../../../constants/declaration';
import { totalAllAmounts } from '../../../model/utils';

export const hasConnection = (connectivity: ConnectivityType): boolean =>
  !(connectivity.type === 'none' || connectivity.type === 'unknown');

export const hasPaymentNotAbortedOrFailed = (
  paymentData: PaymentData
): boolean =>
  !(paymentData.status === 'aborted' || paymentData.status === 'failed');

export const hasValidSize = (
  fees: number,
  currencies: CurrencyObject,
  amounts: Amounts
): boolean =>
  fees > MIN_DECLARED_CHF &&
  totalAllAmounts(amounts, currencies) < MAX_DECLARED_CHF &&
  fees < MAX_PAYMENT_CHF;

export const isPaymentEnabled = (
  connectivity: ConnectivityType,
  paymentData: PaymentData,
  fees: number,
  currencies: CurrencyObject,
  amounts: Amounts
) =>
  hasConnection(connectivity) &&
  hasPaymentNotAbortedOrFailed(paymentData) &&
  hasValidSize(fees, currencies, amounts);
