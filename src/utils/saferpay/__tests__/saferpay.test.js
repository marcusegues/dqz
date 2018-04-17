import uuidv1 from 'uuid/v1';
import Saferpay from '../saferpay';
import { version } from '../../../../package.json';

const baseUrl = 'http://ambrite.ch';
const redirectsUrlKeys = {
  success: `/success`,
  fail: `/fail`,
  abort: `/abort`,
};

describe('Tests for Saferpay module', () => {
  test('initializePayment', () => {
    expect.assertions(5);
    const saferpay = new Saferpay(baseUrl, redirectsUrlKeys);
    const requestId = uuidv1();
    return saferpay
      .initializePayment(
        100 * 1234,
        'CHF',
        requestId,
        'Test order 1',
        `test-${version}-${uuidv1()}`
      )
      .then(responseJson => {
        expect(responseJson.ResponseHeader.RequestId).toBe(requestId);
        expect(responseJson).toHaveProperty('ResponseHeader.SpecVersion');
        expect(responseJson).toHaveProperty('Token');
        expect(responseJson).toHaveProperty('Expiration');
        expect(responseJson).toHaveProperty('RedirectUrl');
      })
      .catch(error => {
        console.log('Saferpay error: ', error);
        return error;
      });
  });
  test('initializePayment catch error', async () => {
    expect.assertions(1);
    const saferpay = new Saferpay(baseUrl, redirectsUrlKeys);
    const requestId = uuidv1();

    await expect(
      saferpay.initializePayment(
        0,
        'CHF',
        requestId,
        'Test order 2',
        `test-${version}-${uuidv1()}`
      )
    ).rejects.toMatchObject({
      Behavior: 'ABORT',
      ErrorName: 'VALIDATION_FAILED',
      ErrorMessage: 'Request validation failed',
    });
  });
  test('assertPayment - TRANSACTION_NOT_STARTED', async () => {
    expect.assertions(3);
    const saferpay = new Saferpay(baseUrl, redirectsUrlKeys);
    const requestId = uuidv1();
    await expect(
      saferpay
        .initializePayment(
          100 * 4231,
          'CHF',
          requestId,
          'Test order 3',
          `test-${version}-${uuidv1()}`
        )
        .then(async responseJson => {
          expect(responseJson).toHaveProperty(
            'ResponseHeader.RequestId',
            requestId
          );
          expect(responseJson).toHaveProperty('Token');
          const token = responseJson.Token;
          return saferpay.assertPayment(token, requestId);
        })
    ).rejects.toMatchObject({
      Behavior: 'RETRY_LATER',
      ErrorName: 'TRANSACTION_NOT_STARTED',
      ErrorMessage: 'Transaction not started',
    });
  });
});
