/* eslint-disable react/no-unused-state,no-console */
// @flow
import React from 'react';
import uuidv1 from 'uuid/v1';
import type { ComponentType } from 'react';
// $FlowFixMe
import { connect } from 'react-redux';
// $FlowFixMe
import { View, ActivityIndicator } from 'react-native';
import { Overview } from '../Overview/Overview';
import Saferpay from '../../../saferpay';
import { NavBar } from '../NavBar/NavBar';
import { PaymentWebView } from './PaymentWebView';
import {
  getBasket,
  getTotalFees,
  getAmounts,
  getPaymentData,
  getPeople,
  getCurrencies,
  getReceiptEntryTime,
  getConnectivity,
} from '../../reducers/selectors';
import type {
  Navigation,
  PaymentData,
  PaymentStatus,
  PaymentTransaction,
} from '../../types/generalTypes';
import type {
  Amounts,
  Basket,
  People,
} from '../../model/types/basketPeopleAmountsTypes';

import { getConvertedLocalTimeToSwiss } from '../../model/utils';
import type { CurrencyObject } from '../../model/currencies';
import {
  storeClearDeclaration,
  storeReceipt,
} from '../../asyncStorage/storageApi';
import { LegalNoticeModal } from '../Modals/LegalNoticeModal/LegalNoticeModal';
import { MainContentContainer } from '../MainContentContainer/MainContentContainer';
import type { ConnectivityType } from '../../types/connectivity';
import { AppLogo } from '../AppLogo/AppLogo';
import { MAIN_RED } from '../../styles/colors';
import { isPaymentEnabled } from './helpers/validatePayment';

const baseUrl = 'http://ambrite.ch';
const redirectsUrlKeys = {
  success: `/success`,
  fail: `/fail`,
  abort: `/abort`,
};

type PaymentContainerState = {
  isLoadingRedirectData: boolean,
  redirectDataLoaded: boolean,
  showModal: boolean,
  showLoading: boolean,
};

type PaymentContainerProps = {
  navigation: Navigation,
};

type ReduxInject = {
  fees: number,
  amounts: Amounts,
  currencies: CurrencyObject,
  basket: Basket,
  paymentData: PaymentData,
  people: People,
  resetDeclaration: () => void,
  receiptEntryTime: string,
  connectivity: ConnectivityType,
  // dispatch to props
  setPaymentData: (paymentData: PaymentData) => Promise<void>,
  setReceiptId: (receiptId: string) => void,
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
      showModal: false,
      showLoading: false,
    };
  }

  componentDidMount() {
    this.saferpay = new Saferpay(baseUrl, redirectsUrlKeys);
  }

  saferpay: Saferpay;

  proceedToPayment() {
    this.setState({ showModal: true });
  }

  initializePayment() {
    const { fees, setPaymentData, paymentData } = this.props;
    if (fees > 0) {
      this.setState({ isLoadingRedirectData: true }, () => {
        this.saferpay
          .initializePayment(
            100 * fees,
            'CHF',
            uuidv1(),
            'Order',
            `1.0.0-${uuidv1()}` // TODO: remove and put some logic into OrderNR
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
                .set('status', 'started')
            );
            this.setState({
              isLoadingRedirectData: false,
              redirectDataLoaded: true,
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
    let paymentStatus: PaymentStatus = paymentData.status;
    switch (state.url) {
      case `${baseUrl}${redirectsUrlKeys.success}`:
        stateChanged = true;
        paymentStatus = 'success';
        break;
      case `${baseUrl}${redirectsUrlKeys.fail}`:
        stateChanged = true;
        paymentStatus = 'failed';
        break;
      case `${baseUrl}${redirectsUrlKeys.abort}`:
        stateChanged = true;
        paymentStatus = 'aborted';
        break;
      default:
        stateChanged = false;
        break;
    }

    if (stateChanged) {
      this.setState(
        {
          redirectDataLoaded: false,
          showLoading: paymentStatus === 'success',
        },
        () => {
          setPaymentData(paymentData.set('status', paymentStatus)).then(() => {
            if (paymentStatus === 'success') {
              this.saferpay
                .assertPayment(
                  // $FlowFixMe
                  paymentData.get('token'),
                  // $FlowFixMe
                  paymentData.get('requestId')
                )
                .then(responseJson => {
                  // Transaction.Status
                  // Current status of the transaction. One of 'AUTHORIZED', 'CAPTURED' or 'PENDING' (PENDING is only used for paydirekt at the moment)
                  // Possible values: AUTHORIZED, CAPTURED, PENDING.
                  if (responseJson.Transaction.Status !== 'CAPTURED') {
                    return this.saferpay
                      .captureTransaction(
                        paymentData.get('requestId'),
                        responseJson.Transaction.Id
                      )
                      .then(captureResponseJson => {
                        if (captureResponseJson.Status !== 'CAPTURED') {
                          setPaymentData(
                            paymentData.set('status', 'failed')
                          ).then(() => {
                            this.setState({
                              showLoading: false,
                            });
                          });
                          return false;
                        }
                        return responseJson;
                      });
                  }
                  return responseJson;
                })
                .then(responseJson => {
                  if (!responseJson) return false;
                  storeClearDeclaration();
                  resetDeclaration();

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
                    paymentMethod:
                      responseJson.PaymentMeans.Brand.PaymentMethod,
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

                  const newPaymentData: PaymentData = paymentData.set(
                    'transaction',
                    paymentTransaction
                  );

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
                  return storeReceipt(receipt).then(() => {
                    this.props.navigation.dispatch({
                      type: 'NAVIGATE',
                      screen: 'SuccessfulPayment',
                    });
                    setTimeout(() => {
                      this.props.navigation.dispatch({
                        type: 'NAVIGATE',
                        screen: 'ReceiptAfterPayment',
                      });
                    }, 3000);
                  });
                })
                .catch(error => console.log('Saferpay error:', error));
            }
          });
        }
      );
    }
  }

  render() {
    const { showModal } = this.state;
    const {
      navigation,
      paymentData,
      connectivity,
      fees,
      currencies,
      amounts,
    } = this.props;

    return (
      <MainContentContainer>
        <NavBar step={2} />
        <Overview
          onProceedToPayment={() => this.proceedToPayment()}
          paymentDisabled={
            !isPaymentEnabled(
              connectivity,
              paymentData,
              fees,
              currencies,
              amounts
            )
          }
          navigation={navigation}
        />
        {this.state.showLoading ? (
          <View
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              backgroundColor: '#e6e6e6',
              width: '100%',
            }}
          >
            <AppLogo />
            <ActivityIndicator
              size="large"
              color={MAIN_RED}
              style={{ paddingTop: 30 }}
            />
          </View>
        ) : null}
        {this.state.redirectDataLoaded ? (
          <View style={{ position: 'absolute', top: 0, bottom: 0 }}>
            <PaymentWebView
              source={{ uri: paymentData.redirectUrl }}
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
    new Promise(resolve => {
      dispatch({
        type: 'SET_PAYMENT_DATA',
        paymentData,
      });
      resolve();
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
  amounts: getAmounts(state),
  basket: getBasket(state),
  people: getPeople(state),
  currencies: getCurrencies(state),
  paymentData: getPaymentData(state),
  receiptEntryTime: getReceiptEntryTime(state),
  connectivity: getConnectivity(state),
});

export const PaymentContainer = (connect(mapStateToProps, mapDispatchToProps)(
  PaymentContainerInner
): ComponentType<PaymentContainerProps>);
