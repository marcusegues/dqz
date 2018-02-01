// @flow
/* global fetch */

import type { Currency } from './src/model/currencies';

type RedirectsUrlKeys = {
  success: string,
  fail: string,
  abort: string,
};

export default class Saferpay {
  baseUrl: string;
  redirectsUrlKeys: RedirectsUrlKeys;

  constructor(
    baseUrl: string = 'http://ambrite.ch',
    redirectsUrlKeys: RedirectsUrlKeys = {
      success: `/success`,
      fail: `/fail`,
      abort: `/abort`,
    }
  ) {
    this.baseUrl = baseUrl;
    this.redirectsUrlKeys = redirectsUrlKeys;
  }

  initializePayment(
    amountValue: number,
    currency: Currency,
    requestId: string
  ) {
    const requestJson = {
      RequestHeader: {
        SpecVersion: '1.8',
        CustomerId: '253992', // prod
        // CustomerId: '242565', // test
        RequestId: requestId,
        RetryIndicator: 0,
        ClientInfo: {
          ShopInfo: 'My Shop',
          OsInfo: 'ubuntu 16',
        },
      },
      TerminalId: '17923391', // prod
      // TerminalId: '17875435', // test
      Payment: {
        Amount: {
          Value: amountValue,
          CurrencyCode: currency,
        },
        OrderId: 2,
        Description: 'Test Order #2',
      },
      Payer: {
        // IpAddress: '192.168.178.1', // user ip
        LanguageCode: 'de-CH',
      },
      ReturnUrls: {
        Success: `${this.baseUrl}${this.redirectsUrlKeys.success}`,
        Fail: `${this.baseUrl}${this.redirectsUrlKeys.fail}`,
        Abort: `${this.baseUrl}${this.redirectsUrlKeys.abort}`,
      },
    };
    // console.log(requestJson);
    return (
      // prod
      fetch('https://www.saferpay.com/api/Payment/v1/PaymentPage/Initialize', {
        // fetch('https://test.saferpay.com/api/Payment/v1/PaymentPage/Initialize', { // test
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Basic QVBJXzI1Mzk5Ml8xMjY4MTQxMzpoJHRhNHVxZWJBWnU0QWhlOQ==', // prod
          // 'Basic QVBJXzI0MjU2NV83MTYyMjc0MTpIMzM0cHF3ZXF3MXF3ZUh1WkF0UiE=', // test
        },
        method: 'POST',
        body: JSON.stringify(requestJson),
      })
        // need to check response status
        .then(response => response.json())
        .catch(error => {
          console.error(error);
        })
    );
  }
  // With the PaymentPage Assert, the results of a transaction are requested.
  // The returned data may be stored on the merchant side.

  // Important: The Assert does NOT do the transaction itself.
  // The PaymentPage will do that automatically for you.
  // The Assert only calls for the result!
  // So, if you call the Assert, the transaction already happened!
  // eslint-disable-next-line class-methods-use-this
  assertPayment(token: string, requestId: string) {
    const requestJson = {
      RequestHeader: {
        SpecVersion: '1.8',
        CustomerId: '253992', // prod
        // CustomerId: '242565', // test
        RequestId: requestId,
        RetryIndicator: 0,
      },
      Token: token,
    };

    return (
      // prod
      fetch('https://www.saferpay.com/api/Payment/v1/PaymentPage/Assert', {
        // fetch('https://test.saferpay.com/api/Payment/v1/PaymentPage/Assert', { // test
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Basic QVBJXzI1Mzk5Ml8xMjY4MTQxMzpoJHRhNHVxZWJBWnU0QWhlOQ==', // prod
          // 'Basic QVBJXzI0MjU2NV83MTYyMjc0MTpIMzM0cHF3ZXF3MXF3ZUh1WkF0UiE=', // test
        },
        method: 'POST',
        body: JSON.stringify(requestJson),
      })
        // need to check response status
        .then(response => response.json())
        .catch(error => {
          console.error(error);
        })
    );
  }
}
