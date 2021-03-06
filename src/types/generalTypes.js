// @flow
import * as React from 'react';
import Immutable from 'immutable';
import type { RecordFactory, RecordOf } from 'immutable';
/**
 * Type for the the translation function as used in
 */
export type TFunction = (field: string | Array<string>, params?: {}) => string;

/**
 * Type for the navigation object as it is used to get around in the application
 */
export type Navigation = {
  goBack: (?string) => void,
  navigate: (route: string, params?: {}) => void,
  state: Object,
  setParams: Object => void,
  getParam: (param: string, fallback: string) => any,
  dispatch: Function,
};

/**
 * very generic type for children passed to a component
 * For more information, please consult: https://flow.org/en/docs/react/children/
 */
export type Children = React.ChildrenArray<?React.Element<any>>;
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

export type SettingsAcceptRate = 'accepted' | 'notAccepted' | 'skipped';

/**
 * Type for payment status. Status key getting from returnURL.
 */
export type PaymentStatus =
  | 'notStarted'
  | 'started'
  | 'aborted'
  | 'failed'
  | 'success';

/**
 * Type for active saferpay payment. Response from PaymentPage Initialize.
 * https://saferpay.github.io/jsonapi/index.html#Payment_v1_PaymentPage_Initialize
 */
type PaymentDataType = {
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
  PaymentDataType
> = Immutable.Record({
  specVersion: '',
  requestId: '',
  token: '',
  tokenExpiration: '',
  redirectUrl: '',
  status: 'notStarted',
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

export type PaymentData = RecordOf<PaymentDataType>;
