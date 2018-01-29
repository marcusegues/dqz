export default class Saferpay {
  constructor(
    baseUrl = 'http://ambrite.ch',
    redirectsUrlKeys = {
      success: `/success`,
      fail: `/fail`,
      abort: `/abort`,
    }
  ) {
    this.baseUrl = baseUrl;
    this.redirectsUrlKeys = redirectsUrlKeys;
  }

  initializePayment(amountValue, currency = 'EUR', requestId) {
    const requestJson = {
      RequestHeader: {
        SpecVersion: '1.8',
        CustomerId: '242565',
        RequestId: requestId,
        RetryIndicator: 0,
        ClientInfo: {
          ShopInfo: 'My Shop',
          OsInfo: 'ubuntu 16',
        },
      },
      TerminalId: '17875435',
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
      fetch('https://test.saferpay.com/api/Payment/v1/PaymentPage/Initialize', {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Basic QVBJXzI0MjU2NV83MTYyMjc0MTpIMzM0cHF3ZXF3MXF3ZUh1WkF0UiE=',
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
  assertPayment(token, requestId) {
    const requestJson = {
      RequestHeader: {
        SpecVersion: '1.8',
        CustomerId: '242565',
        RequestId: requestId,
        RetryIndicator: 0,
      },
      Token: token,
    };

    return (
      fetch('https://test.saferpay.com/api/Payment/v1/PaymentPage/Assert', {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Basic QVBJXzI0MjU2NV83MTYyMjc0MTpIMzM0cHF3ZXF3MXF3ZUh1WkF0UiE=',
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
