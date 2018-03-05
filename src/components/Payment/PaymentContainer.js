/* eslint-disable react/no-unused-state,no-console */
// @flow
import React from 'react';
import uuidv1 from 'uuid/v1';
import type { ComponentType } from 'react';
// $FlowFixMe
import { connect } from 'react-redux';
// $FlowFixMe
import { View, Text } from 'react-native';
import { Overview } from '../Overview/Overview';
import Saferpay from '../../../saferpay';
import { NavBar } from '../NavBar/NavBar';
import { PaymentWebView } from './PaymentWebView';
import {
  getBasket,
  getTotalFees,
  getAmounts,
  getTotalDuty,
  getTotalVat,
  getPaymentData,
  getPeople,
  getCurrencies,
  getReceiptEntryTime,
} from '../../reducers/selectors';
import type {
  Navigation,
  PaymentData,
  PaymentTransaction,
} from '../../types/generalTypes';
import type {
  Amounts,
  Basket,
  People,
} from '../../model/types/basketPeopleAmountsTypes';
import {
  analyticsCustom,
  analyticsInitPayment,
  analyticsScreenMounted,
} from '../../analytics/analyticsApi';

import {
  totalAllAmounts,
  getConvertedLocalTimeToSwiss,
} from '../../model/utils';
import {
  MIN_DECLARED_CHF,
  MAX_DECLARED_CHF,
} from '../../constants/declaration';
import type { CurrencyObject } from '../../model/currencies';
import {
  storeClearDeclaration,
  storeReceipt,
} from '../../asyncStorage/storageApi';
import { LegalNoticeModal } from '../Modals/LegalNoticeModal/LegalNoticeModal';
import { MainContentContainer } from '../MainContentContainer/MainContentContainer';

const baseUrl = 'http://ambrite.ch';
const redirectsUrlKeys = {
  success: `/success`,
  fail: `/fail`,
  abort: `/abort`,
};

type PaymentContainerState = {
  isLoadingRedirectData: boolean,
  redirectDataLoaded: boolean,
  redirectUrl: ?string,
  paymentToken: ?string,
  paymentStatus: ?string,
  showModal: boolean,
};

type PaymentContainerProps = {
  navigation: Navigation,
  // dispatch to props
  setPaymentData: (paymentData: PaymentData) => void,
  setReceiptId: (receiptId: string) => void,
};

type ReduxInject = {
  fees: number,
  amounts: Amounts,
  currencies: CurrencyObject,
  basket: Basket,
  duty: number,
  vat: number,
  paymentData: PaymentData,
  people: People,
  resetDeclaration: () => void,
  receiptEntryTime: string,
};

class PaymentContainerInner extends React.Component<
  PaymentContainerProps & ReduxInject,
  PaymentContainerState
> {
  constructor(props: PaymentContainerProps & ReduxInject) {
    super(props);
    this.state = {
      isLoadingRedirectData: false,
      redirectDataLoaded: false,
      redirectUrl: null,
      paymentToken: null,
      paymentStatus: null,
      showModal: false,
    };
  }

  componentWillMount() {
    analyticsScreenMounted('PaymentContainer');
  }

  componentDidMount() {
    this.saferpay = new Saferpay(baseUrl, redirectsUrlKeys);
  }

  saferpay: Saferpay;

  proceedToPayment() {
    this.setState({ showModal: true });
  }

  initializePayment() {
    const {
      fees,
      duty,
      vat,
      amounts,
      basket,
      setPaymentData,
      paymentData,
    } = this.props;
    analyticsInitPayment(amounts, basket, duty, vat);
    if (fees > 0) {
      this.setState({ isLoadingRedirectData: true }, () => {
        this.saferpay
          .initializePayment(
            100 * fees,
            'CHF',
            uuidv1(),
            'Order',
            `0.5.0-${uuidv1()}` // TODO: remove and put some logic into OrderNR
          )
          .then(responseJson => {
            setPaymentData(
              paymentData
                // $FlowFixMe
                .set('specVersion', responseJson.ResponseHeader.SpecVersion)
                // $FlowFixMe
                .set('requestId', responseJson.ResponseHeader.RequestId)
                // $FlowFixMe
                .set('token', responseJson.Token)
                // $FlowFixMe
                .set('tokenExpiration', responseJson.Expiration)
                // $FlowFixMe
                .set('redirectUrl', responseJson.RedirectUrl)
            );
            this.setState({
              isLoadingRedirectData: false,
              redirectDataLoaded: true,
              // $FlowFixMe
              redirectUrl: responseJson.RedirectUrl,
              // $FlowFixMe
              paymentToken: responseJson.Token,
              paymentStatus: 'start',
            });
          })
          .catch(error => {
            console.log('Saferpay error: ', error);
          });
      });
    }
  }

  checkWebViewUrl(state) {
    const {
      setPaymentData,
      paymentData,
      amounts,
      basket,
      people,
      currencies,
      setReceiptId,
      resetDeclaration,
      receiptEntryTime,
    } = this.props;
    let stateChanged = false;
    let paymentStatus = '';
    switch (state.url) {
      case `${baseUrl}${redirectsUrlKeys.success}`:
        analyticsCustom('Successful payment');
        storeClearDeclaration();
        resetDeclaration();
        stateChanged = true;
        paymentStatus = 'success';
        break;
      case `${baseUrl}${redirectsUrlKeys.fail}`:
        analyticsCustom('Failed payment');
        stateChanged = true;
        paymentStatus = 'fail';
        break;
      case `${baseUrl}${redirectsUrlKeys.abort}`:
        analyticsCustom('Aborted payment');
        stateChanged = true;
        paymentStatus = 'abort';
        break;
      default:
        stateChanged = false;
        break;
    }

    if (stateChanged) {
      this.setState(
        {
          redirectDataLoaded: false,
          paymentStatus,
        },
        () => {
          if (paymentStatus === 'success') {
            this.saferpay
              .assertPayment(
                // $FlowFixMe
                paymentData.get('token'),
                // $FlowFixMe
                paymentData.get('requestId')
              )
              .then(responseJson => {
                const paymentTransaction: PaymentTransaction = {
                  // $FlowFixMe
                  status: responseJson.Transaction.Status,
                  // $FlowFixMe
                  id: responseJson.Transaction.Id,
                  // $FlowFixMe
                  date: responseJson.Transaction.Date,
                  // $FlowFixMe
                  amountValue: responseJson.Transaction.Amount.Value,
                  // $FlowFixMe
                  currencyCode: responseJson.Transaction.Amount.CurrencyCode,
                  // $FlowFixMe
                  paymentMethod: responseJson.PaymentMeans.Brand.PaymentMethod,
                  // $FlowFixMe
                  brandName: responseJson.PaymentMeans.Brand.Name,
                  // $FlowFixMe
                  cardNumber: responseJson.PaymentMeans.Card.MaskedNumber,
                  // $FlowFixMe
                  cardHolderName: responseJson.PaymentMeans.Card.HolderName,
                  // $FlowFixMe
                  ipAddress: responseJson.Payer.IpAddress,
                  // $FlowFixMe
                  ipLocation: responseJson.Payer.IpLocation,
                };

                const newPaymentData: PaymentData = paymentData
                  .set('status', paymentStatus)
                  .set('transaction', paymentTransaction);

                setPaymentData(newPaymentData);
                const receiptId = uuidv1();
                setReceiptId(receiptId);
                const newReceiptEntryTime =
                  receiptEntryTime === ''
                    ? getConvertedLocalTimeToSwiss().toString()
                    : receiptEntryTime;
                // $FlowFixMe
                const receipt: Receipt = {
                  receiptId,
                  receiptEntryTime: newReceiptEntryTime,
                  amounts,
                  people,
                  basket,
                  currencies,
                  paymentData: newPaymentData,
                };
                return storeReceipt(receipt).then(() =>
                  this.props.navigation.dispatch({
                    type: 'NAVIGATE',
                    screen: 'ReceiptAfterPayment',
                  })
                );
              })
              .catch(error => console.log('Saferpay error:', error));
          }
        }
      );
    }
  }

  render() {
    const { showModal } = this.state;
    const { navigation, fees, paymentData, currencies, amounts } = this.props;
    return (
      <MainContentContainer>
        <NavBar step={2} />
        {this.state.paymentStatus === 'success' ? (
          <Text style={{ color: 'green' }}>
            Payment success({paymentData.status})
          </Text>
        ) : null}
        {this.state.paymentStatus === 'abort' ? (
          <Text style={{ color: 'red' }}>
            Payment aborted({paymentData.status})
          </Text>
        ) : null}
        {this.state.paymentStatus === 'fail' ? (
          <Text style={{ color: 'red' }}>
            Payment failed({paymentData.status})
          </Text>
        ) : null}
        <Overview
          onProceedToPayment={() => this.proceedToPayment()}
          paymentDisabled={
            fees < MIN_DECLARED_CHF ||
            totalAllAmounts(amounts, currencies) > MAX_DECLARED_CHF
          }
          navigation={navigation}
        />

        {this.state.redirectDataLoaded ? (
          <View style={{ position: 'absolute', top: 0 }}>
            <PaymentWebView
              source={{ uri: this.state.redirectUrl }}
              onNavigationStateChange={e => this.checkWebViewUrl(e)}
            />
          </View>
        ) : null}
        <LegalNoticeModal
          modalVisible={showModal}
          navigation={navigation}
          onPressLegal={() => {
            this.setState({ showModal: false });
            navigation.dispatch({
              type: 'NAVIGATE',
              screen: 'LegalNoticeInfo',
            });
          }}
          toggleModalVisible={() => {
            this.setState({ showModal: false });
          }}
          onConfirm={() => {
            this.setState({ showModal: false });
            this.initializePayment();
          }}
        />
      </MainContentContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setPaymentData: (paymentData: PaymentData) =>
    dispatch({
      type: 'SET_PAYMENT_DATA',
      paymentData,
    }),
  setReceiptId: (receiptId: string) =>
    dispatch({
      type: 'SET_RECEIPT_ID',
      receiptId,
    }),
  resetDeclaration: () => {
    dispatch({
      type: 'RESET_DECLARATION',
    });
  },
});

const mapStateToProps = state => ({
  fees: getTotalFees(state),
  duty: getTotalDuty(state),
  vat: getTotalVat(state),
  amounts: getAmounts(state),
  basket: getBasket(state),
  people: getPeople(state),
  currencies: getCurrencies(state),
  paymentData: getPaymentData(state),
  receiptEntryTime: getReceiptEntryTime(state),
});

export const PaymentContainer = (connect(mapStateToProps, mapDispatchToProps)(
  PaymentContainerInner
): ComponentType<PaymentContainerProps>);
