// @flow

import type { ConnectivityType } from '../../../types/connectivity';
import {
  hasConnection,
  hasPaymentNotAbortedOrFailed,
  hasValidSize,
  isPaymentEnabled,
} from '../helpers/validatePayment';
import type { PaymentData } from '../../../types/generalTypes';
import { makePaymentDataRecord } from '../../../types/generalTypes';
import * as utils from '../../../model/utils';

describe('Helper functions', () => {
  const noneConn: ConnectivityType = {
    type: 'none',
    effectiveType: 'unknown',
  };
  const unknownConn: ConnectivityType = {
    type: 'unknown',
    effectiveType: 'unknown',
  };
  const wifiConn: ConnectivityType = {
    type: 'wifi',
    effectiveType: 'unknown',
  };
  const celularConn: ConnectivityType = {
    type: 'celular',
    effectiveType: 'unknown',
  };

  const notStartedPayment: PaymentData = makePaymentDataRecord();
  const startedPayment = notStartedPayment.set('status', 'started');
  const abortedPayment = notStartedPayment.set('status', 'aborted');
  const failedPayment = notStartedPayment.set('status', 'failed');
  const successPayment = notStartedPayment.set('status', 'success');

  test('connection test', () => {
    expect(hasConnection(noneConn)).toBeFalsy();
    expect(hasConnection(unknownConn)).toBeFalsy();
    expect(hasConnection(wifiConn)).toBeTruthy();
    expect(hasConnection(celularConn)).toBeTruthy();
  });

  test('payment data', () => {
    expect(hasPaymentNotAbortedOrFailed(notStartedPayment)).toBeTruthy();
    expect(hasPaymentNotAbortedOrFailed(startedPayment)).toBeTruthy();
    expect(hasPaymentNotAbortedOrFailed(abortedPayment)).toBeFalsy();
    expect(hasPaymentNotAbortedOrFailed(failedPayment)).toBeFalsy();
    expect(hasPaymentNotAbortedOrFailed(successPayment)).toBeTruthy();
  });

  test('has valid fees', () => {
    // $FlowFixMe
    utils.totalAllAmounts = jest.fn(() => 42);

    // $FlowFixMe
    expect(hasValidSize(123, null, null)).toBeTruthy();
    // $FlowFixMe
    expect(hasValidSize(0, null, null)).toBeFalsy();
    // $FlowFixMe
    expect(hasValidSize(20001, null, null)).toBeFalsy();
  });

  test('has valid amounts', () => {
    // $FlowFixMe
    utils.totalAllAmounts = jest.fn(() => 42);

    // $FlowFixMe
    expect(hasValidSize(123, null, null)).toBeTruthy();
  });

  test('amounts are not too large', () => {
    // $FlowFixMe
    utils.totalAllAmounts = jest.fn(() => 20001);

    // $FlowFixMe
    expect(hasValidSize(123, null, null)).toBeFalsy();
  });

  test('isPaymentEnabled', () => {
    // $FlowFixMe
    utils.totalAllAmounts = jest.fn(() => 321);
    expect(
      // $FlowFixMe
      isPaymentEnabled(wifiConn, startedPayment, 123, null, null)
    ).toBeTruthy();
  });

  test('isPaymentEnabled NOT if connection is not good', () => {
    // $FlowFixMe
    utils.totalAllAmounts = jest.fn(() => 321);
    expect(
      // $FlowFixMe
      isPaymentEnabled(noneConn, startedPayment, 123, null, null)
    ).toBeFalsy();
  });

  test('isPaymentEnabled NOT if payment status is bad', () => {
    // $FlowFixMe
    utils.totalAllAmounts = jest.fn(() => 321);
    expect(
      // $FlowFixMe
      isPaymentEnabled(wifiConn, abortedPayment, 123, null, null)
    ).toBeFalsy();
  });

  test('isPaymentEnabled NOT if size is bad', () => {
    // $FlowFixMe
    utils.totalAllAmounts = jest.fn(() => 54321);
    expect(
      // $FlowFixMe
      isPaymentEnabled(wifiConn, startedPayment, 123, null, null)
    ).toBeFalsy();
  });
});
