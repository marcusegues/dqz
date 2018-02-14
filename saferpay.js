// @flow
/* global fetch */
import type { Currency } from './src/model/currencies';

type RedirectsUrlKeys = {
  success: string,
  fail: string,
  abort: string,
};

declare var __DEV__: boolean;

export default class Saferpay {
  baseUrl: string;
  redirectsUrlKeys: RedirectsUrlKeys;
  saferpayConfig: any; // TODO: create Flow type object for saferpayConfig

  constructor(
    baseUrl: string = 'http://ambrite.ch',
    redirectsUrlKeys: RedirectsUrlKeys = {
      success: `/success`,
      fail: `/fail`,
      abort: `/abort`,
    },
    saferpayConfig: any // TODO: need change to type Object
  ) {
    this.baseUrl = baseUrl;
    this.redirectsUrlKeys = redirectsUrlKeys;

    // saferPay production config
    this.saferpayConfig = {
      specVersion: '1.8',
      customerId: '253992',
      terminalId: '17923391',
      baseURL: 'https://www.saferpay.com/api',
      requestURLs: {
        paymentPageInitialize: '/Payment/v1/PaymentPage/Initialize',
        PaymentPageAssert: '/Payment/v1/PaymentPage/Assert',
      },
      authorization:
        'Basic QVBJXzI1Mzk5Ml8xMjY4MTQxMzpoJHRhNHVxZWJBWnU0QWhlOQ==',
    };

    // saferPay dev config
    if (__DEV__) {
      this.saferpayConfig = Object.assign(this.saferpayConfig, {
        customerId: '242565',
        terminalId: '17875435',
        baseURL: 'https://test.saferpay.com/api',
        authorization:
          'Basic QVBJXzI0MjU2NV83MTYyMjc0MTpIMzM0cHF3ZXF3MXF3ZUh1WkF0UiE=',
      });
    }

    this.saferpayConfig = Object.assign(this.saferpayConfig, saferpayConfig);
  }

  // OrderId
  // recommended, string
  // Unambiguous order identifier defined by the merchant/ shop. This identifier might be used as reference later on.
  // Id[1..80]
  // Example: c52ad18472354511ab2c33b59e796901

  // Description
  // mandatory, string
  // A human readable description provided by the merchant that will be displayed in Payment Page.
  // Utf8[1..1000]
  // Example: Description of payment

  /**
   * @param amountValue
   * @param currency
   * @param requestId
   * @param description
   * @param orderId recommended, string
   * @param languageCode recommended, string
   * @returns {Promise<any>}
   */
  initializePayment(
    amountValue: number,
    currency: Currency,
    requestId: string,
    description: string,
    orderId: string,
    languageCode: string = 'de-CH'
  ) {
    const requestJson = {
      RequestHeader: {
        SpecVersion: this.saferpayConfig.specVersion,
        CustomerId: this.saferpayConfig.customerId,
        RequestId: requestId,
        RetryIndicator: 0,
      },
      TerminalId: this.saferpayConfig.terminalId,
      Payment: {
        Amount: {
          Value: amountValue,
          CurrencyCode: currency,
        },
        OrderId: orderId,
        Description: description,
      },
      Payer: {
        // IpAddress: '192.168.178.1', // user ip
        LanguageCode: languageCode,
      },
      ReturnUrls: {
        Success: this.baseUrl + this.redirectsUrlKeys.success,
        Fail: this.baseUrl + this.redirectsUrlKeys.fail,
        Abort: this.baseUrl + this.redirectsUrlKeys.abort,
      },
    };

    return (
      fetch(
        this.saferpayConfig.baseURL +
          this.saferpayConfig.requestURLs.paymentPageInitialize,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: this.saferpayConfig.authorization,
          },
          method: 'POST',
          body: JSON.stringify(requestJson),
        }
      )
        // need to check response status
        .then(response => response.json())
        .catch(error => {
          // TODO: add logger/amplitude
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
        SpecVersion: this.saferpayConfig.specVersion,
        CustomerId: this.saferpayConfig.customerId,
        RequestId: requestId,
        RetryIndicator: 0,
      },
      Token: token,
    };

    return (
      fetch(
        this.saferpayConfig.baseURL +
          this.saferpayConfig.requestURLs.PaymentPageAssert,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: this.saferpayConfig.authorization,
          },
          method: 'POST',
          body: JSON.stringify(requestJson),
        }
      )
        // need to check response status
        .then(response => response.json())
        .catch(error => {
          // TODO: add logger/amplitude
          console.error(error);
        })
    );
  }
}
