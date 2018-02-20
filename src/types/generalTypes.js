// @flow
import * as React from 'react';
import Immutable from 'immutable';
import type { RecordFactory } from 'immutable';
/**
 * Type for the the translation function as used in
 */
export type TFunction = (field: string | Array<string>, params?: {}) => string;

/**
 * Type for the navigation object as it is used to get around in the application
 */
export type Navigation = {
  goBack: (?string) => void,
  navigate: (route: string) => void,
  state: Object,
  setParams: Object => void,
};

/**
 * very generic type for children passed to a component
 * For more information, please consult: https://flow.org/en/docs/react/children/
 */
export type Children = React.ChildrenArray<React.Element<any>>;
/**
 * Saferpay status of the transaction capture (PENDING is only used for paydirekt at the moment).
 * Possible values: PENDING, CAPTURED.
 */
type PaymentTransactionStatus = '' | 'PENDING' | 'CAPTURED';

/**
 * Type for saferpay payment transaction. Response from PaymentPage Assert.
 * https://saferpay.github.io/jsonapi/index.html#Payment_v1_PaymentPage_Assert
 */
export type PaymentTransaction = {
  status: PaymentTransactionStatus,
  id: string,
  date: string,
  amountValue: string,
  currencyCode: string,
  cardNumber: string,
  cardHolderName: string,
  paymentMethod: string,
  brandName: string,
  ipAddress: string,
  ipLocation: string,
};

/**
 * Type for payment status. Status key getting from returnURL.
 */
type PaymentStatus = 'not_started' | 'cancel' | 'fail' | 'succes';

/**
 * Type for active saferpay payment. Response from PaymentPage Initialize.
 * https://saferpay.github.io/jsonapi/index.html#Payment_v1_PaymentPage_Initialize
 */
export type PaymentData = {
  specVersion: string,
  requestId: string,
  token: string,
  tokenExpiration: string,
  redirectUrl: string,
  status: PaymentStatus,
  transaction: PaymentTransaction,
};

/**
 * Make default PaymentData record for getInitialState().
 * @type {*|Immutable.Record.Factory<{specVersion: string, requestId: string, token: string, tokenExpiration: string, redirectUrl: string, status: string,
 * transaction: {status: string, id: string, date: string, amountValue: string, currencyCode: string, cardNumber: string, cardHolderName: string}}>}
 */
export const makePaymentDataRecord: RecordFactory<
  PaymentData
> = Immutable.Record({
  specVersion: '',
  requestId: '',
  token: '',
  tokenExpiration: '',
  redirectUrl: '',
  status: 'not_started',
  transaction: {
    status: '',
    id: '',
    date: '',
    amountValue: '',
    currencyCode: '',
    cardNumber: '',
    cardHolderName: '',
    paymentMethod: '',
    brandName: '',
    ipAddress: '',
    ipLocation: '',
  },
});
