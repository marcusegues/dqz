import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Immutable from 'immutable';
import { AllReceipts } from '../AllReceipts/AllReceipts';
import { fetchReceipts } from '../../../asyncStorage/storageApi';
import { deserializeReceipts } from '../../../asyncStorage/deserializers';

const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialState = {
  receipts: Immutable.List(),
};

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

jest.mock('../../../asyncStorage/storageApi', () => ({
  fetchReceipts: jest.fn(),
}));
fetchReceipts.mockImplementation(
  () =>
    new Promise(resolve =>
      resolve(
        deserializeReceipts([
          {
            amounts: {
              EUR: {
                amounts: [
                  {
                    amount: 444,
                    id: '6dbd4271-bd13-46f5-916e-233dab7c6fe5',
                  },
                ],
                largeAmounts: [],
              },
            },
            basket: {
              AlcHard: {
                volume: {
                  quantities: [],
                },
              },
              AlcSoft: {
                volume: {
                  quantities: [],
                },
              },
              AnimalFeed: {
                volume: {
                  quantities: [],
                },
              },
              Books: {
                volume: {
                  quantities: [],
                },
              },
              Butter: {
                volume: {
                  quantities: [],
                },
              },
              Cigarettes: {
                volume: {
                  quantities: [],
                },
              },
              Fertilizer: {
                volume: {
                  quantities: [],
                },
              },
              Flowers: {
                volume: {
                  quantities: [],
                },
              },
              Magazines: {
                volume: {
                  quantities: [],
                },
              },
              Meat: {
                volume: {
                  quantities: [],
                },
              },
              Meds: {
                volume: {
                  quantities: [],
                },
              },
              Oils: {
                volume: {
                  quantities: [],
                },
              },
              Other: {
                volume: {
                  quantities: [],
                },
              },
              OtherFood: {
                volume: {
                  quantities: [],
                },
              },
              Tobacco: {
                volume: {
                  quantities: [],
                },
              },
            },
            currencies: {
              AED: 0.2631566,
              ALL: 0.0092876,
              ARS: 0.04788,
              AUD: 0.74573,
              AZN: 0.57872,
              BAM: 0.6090296,
              BDT: 0.011627400000000001,
              BGN: 0.6090679,
              BHD: 2.57656,
              BRL: 0.2825107,
              CAD: 0.76166,
              CHF: 1,
              CLP: 0.00160065,
              CNY: 0.15331039999999999,
              COP: 0.000348177,
              CRC: 0.00171214,
              CZK: 0.047020099999999995,
              DKK: 0.1598426,
              DOP: 0.0195642,
              EGP: 0.054740399999999995,
              ETB: 0.0354824,
              EUR: 1.19027,
              GBP: 1.36532,
              GTQ: 0.1306198,
              HKD: 0.12311899999999999,
              HNL: 0.0408636,
              HRK: 0.16054569999999999,
              HUF: 0.00382563,
              IDR: 0.000070268,
              ILS: 0.27517,
              INR: 0.0148951,
              ISK: 0.0098438,
              JPY: 0.0090377,
              KES: 0.009569,
              KHR: 0.00024156200000000002,
              KRW: 0.0009054,
              KWD: 3.23201,
              KYD: 1.17862,
              KZT: 0.00301682,
              LBP: 0.000640471,
              LKR: 0.00624092,
              LYD: 0.72667,
              MAD: 0.10567,
              MUR: 0.0298477,
              MXN: 0.05281,
              MYR: 0.2501214,
              NGN: 0.00269211,
              NOK: 0.1241705,
              NZD: 0.70722,
              OMR: 2.5156,
              PAB: 0.96647,
              PEN: 0.2987078,
              PHP: 0.0185824,
              PKR: 0.0083525,
              PLN: 0.2839049,
              QAR: 0.26547699999999996,
              RON: 0.2556661,
              RSD: 0.010066299999999999,
              RUB: 0.0159255,
              SAR: 0.2577113,
              SEK: 0.1156551,
              SGD: 0.73742,
              THB: 0.030926999999999996,
              TND: 0.401191,
              TRY: 0.2371819,
              TWD: 0.0331141,
              TZS: 0.00042745,
              UAH: 0.0376666,
              USD: 0.9664,
              UYU: 0.0344552,
              VEF: 0.000019,
              VND: 0.000042470000000000005,
              ZAR: 0.08007,
            },
            paymentData: {
              redirectUrl:
                'https://test.saferpay.com/vt2/api/PaymentPage/242565/17875435/6x0w3xkuclvukxmwr47ihqk08',
              requestId: 'ec7f12b0-3d7c-11e8-a4ed-a7739dcf82a3',
              specVersion: '1.8',
              status: 'started',
              token: '6x0w3xkuclvukxmwr47ihqk08',
              tokenExpiration: '2018-04-11T14:38:59.400+02:00',
              transaction: {
                amountValue: '4065',
                brandName: 'VISA',
                cardHolderName: 'Yamada Taro',
                cardNumber: 'xxxxxxxxxxxx0004',
                currencyCode: 'CHF',
                date: '2018-04-11T13:39:17.917+02:00',
                id: 'K5Y2OnA5W477UA7nhf9IAMz5vKIb',
                ipAddress: '81.198.116.84',
                ipLocation: 'LV',
                paymentMethod: 'VISA',
                status: 'AUTHORIZED',
              },
            },
            people: {
              adults: 1,
              minors: 0,
            },
            receiptEntryTime: '2018-04-11T14:34:59.763+03:00',
            receiptId: 'f8c48d70-3d7c-11e8-a4ed-a7739dcf82a3',
          },
          {
            amounts: {
              EUR: {
                amounts: [
                  {
                    amount: 456,
                    id: '4795ded5-3609-43e7-815c-a3cb3eac966f',
                  },
                  {
                    amount: 123,
                    id: '1bb526b5-d2a7-4309-8a92-9de9599025ca',
                  },
                ],
                largeAmounts: [],
              },
            },
            basket: {
              AlcHard: {
                volume: {
                  quantities: [],
                },
              },
              AlcSoft: {
                volume: {
                  quantities: [],
                },
              },
              AnimalFeed: {
                volume: {
                  quantities: [],
                },
              },
              Books: {
                volume: {
                  quantities: [],
                },
              },
              Butter: {
                volume: {
                  quantities: [
                    {
                      date: '2018-04-12T12:03:03.811+03:00',
                      number: 5.99,
                    },
                    {
                      date: '2018-04-12T12:03:07.647+03:00',
                      number: 0.01,
                    },
                    {
                      date: '2018-04-12T12:03:22.846+03:00',
                      number: 0.001,
                    },
                  ],
                },
              },
              Cigarettes: {
                volume: {
                  quantities: [],
                },
              },
              Fertilizer: {
                volume: {
                  quantities: [],
                },
              },
              Flowers: {
                volume: {
                  quantities: [],
                },
              },
              Magazines: {
                volume: {
                  quantities: [],
                },
              },
              Meat: {
                volume: {
                  quantities: [
                    {
                      date: '2018-04-12T12:02:50.497+03:00',
                      number: 1.7,
                    },
                    {
                      date: '2018-04-12T12:02:55.553+03:00',
                      number: 3.56,
                    },
                  ],
                },
              },
              Meds: {
                volume: {
                  quantities: [],
                },
              },
              Oils: {
                volume: {
                  quantities: [],
                },
              },
              Other: {
                volume: {
                  quantities: [],
                },
              },
              OtherFood: {
                volume: {
                  quantities: [],
                },
              },
              Tobacco: {
                volume: {
                  quantities: [],
                },
              },
            },
            currencies: {
              AED: 0.2632116,
              ALL: 0.009285999999999999,
              ARS: 0.04799,
              AUD: 0.74994,
              AZN: 0.57884,
              BAM: 0.611005,
              BDT: 0.0116889,
              BGN: 0.610619,
              BHD: 2.57724,
              BRL: 0.2836809,
              CAD: 0.76726,
              CHF: 1,
              CLP: 0.00160897,
              CNY: 0.1539015,
              COP: 0.000349016,
              CRC: 0.0017186200000000001,
              CZK: 0.047229799999999995,
              DKK: 0.1603577,
              DOP: 0.0195682,
              EGP: 0.054751799999999996,
              ETB: 0.035489799999999995,
              EUR: 1.19433,
              GBP: 1.37017,
              GTQ: 0.1305942,
              HKD: 0.12313919999999999,
              HNL: 0.040868299999999996,
              HRK: 0.16119779999999997,
              HUF: 0.0038382800000000003,
              IDR: 0.000070349,
              ILS: 0.27679,
              INR: 0.014877499999999998,
              ISK: 0.00986,
              JPY: 0.0090257,
              KES: 0.0095663,
              KHR: 0.000241612,
              KRW: 0.0009067999999999999,
              KWD: 3.23366,
              KYD: 1.17887,
              KZT: 0.0029509500000000004,
              LBP: 0.000639754,
              LKR: 0.006237390000000001,
              LYD: 0.72682,
              MAD: 0.106,
              MUR: 0.0298816,
              MXN: 0.053,
              MYR: 0.25007660000000004,
              NGN: 0.0026852,
              NOK: 0.1239974,
              NZD: 0.71171,
              OMR: 2.51613,
              PAB: 0.96667,
              PEN: 0.29844740000000003,
              PHP: 0.0186149,
              PKR: 0.0083528,
              PLN: 0.2851537,
              QAR: 0.2655325,
              RON: 0.2568406,
              RSD: 0.0101243,
              RUB: 0.0153208,
              SAR: 0.2577721,
              SEK: 0.11688330000000001,
              SGD: 0.73848,
              THB: 0.030993,
              TND: 0.40524479999999996,
              TRY: 0.2347485,
              TWD: 0.0331426,
              TZS: 0.00042753999999999996,
              UAH: 0.0376804,
              USD: 0.96677,
              UYU: 0.0343522,
              VEF: 0.000019,
              VND: 0.000042481,
              ZAR: 0.0804,
            },
            paymentData: {
              redirectUrl:
                'https://test.saferpay.com/vt2/api/PaymentPage/242565/17875435/jmfa55y3sz7jr9t7ryoixrnpk',
              requestId: '68813290-3e30-11e8-8d55-e733ef170bd1',
              specVersion: '1.8',
              status: 'started',
              token: 'jmfa55y3sz7jr9t7ryoixrnpk',
              tokenExpiration: '2018-04-12T12:03:47.368+02:00',
              transaction: {
                amountValue: '20790',
                brandName: 'VISA',
                cardHolderName: 'Yamada Taro',
                cardNumber: 'xxxxxxxxxxxx0004',
                currencyCode: 'CHF',
                date: '2018-04-12T11:03:59.723+02:00',
                id: 'Ev8OA7b8bE7xvAr90Q4Ub20vb0Ib',
                ipAddress: '81.198.116.84',
                ipLocation: 'LV',
                paymentMethod: 'VISA',
                status: 'AUTHORIZED',
              },
            },
            people: {
              adults: 1,
              minors: 0,
            },
            receiptEntryTime: '2018-04-11T13:03:00.000+03:00',
            receiptId: '70f9c6d0-3e30-11e8-8d55-e733ef170bd1',
          },
        ])
      )
    )
);

describe('AllReceipts with mocked data', () => {
  test('Renders empty AllReceipts component to snapshot', async () => {
    const tree = await renderer.create(
      <AllReceipts store={mockStore(initialState)} i18n={{ language: 'de' }} />
    );
    const json = await tree.toJSON();
    expect(json).toMatchSnapshot();
  });
});
