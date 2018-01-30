/* eslint-disable react/no-unused-state,no-console */
// @flow
import React from 'react';
import uuidv1 from 'uuid/v1';
import type { ComponentType } from 'react';
// $FlowFixMe
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
// $FlowFixMe
import { View, Text } from 'react-native';
import { Overview } from '../Overview/Overview';
import Saferpay from '../../../saferpay';
import { NavBar } from '../NavBar/NavBar';
import { PaymentWebView } from './PaymentWebView';
import { RedButton } from '../Buttons/RedButton';
import {
  getBasket,
  getDutyReport,
  getTotalFees,
  getVatReport,
  getAmounts,
  getTotalDuty,
  getTotalVat,
  getPaymentData,
  getCurrencies,
} from '../../reducers';
import type {
  Navigation,
  PaymentData,
  TFunction,
} from '../../types/generalTypes';
import type { DutyReport, VatReport } from '../../model/types/calculationTypes';
import type {
  Amounts,
  Basket,
} from '../../model/types/basketPeopleAmountsTypes';
import {
  analyticsCustom,
  analyticsInitPayment,
  analyticsScreenMounted,
} from '../../analytics/analyticsApi';
import { totalAllAmounts } from '../../model/utils';
import { MAX_DECLARED_CHF } from '../../constants/declaration';
import type { CurrencyObject } from '../../model/currencies';

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
};

type PaymentContainerProps = {
  navigation: Navigation,
  // dispatch to props
  setPaymentData: (paymentData: PaymentData) => void,
};

type ReduxInject = {
  fees: number,
  amounts: Amounts,
  currencies: CurrencyObject,
  basket: Basket,
  dutyReport: DutyReport,
  duty: number,
  vatReport: VatReport,
  vat: number,
  paymentData: PaymentData,
};

class PaymentContainerInner extends React.Component<
  PaymentContainerProps & ReduxInject & { t: TFunction },
  PaymentContainerState
> {
  constructor(props: PaymentContainerProps & ReduxInject & { t: TFunction }) {
    super(props);
    this.state = {
      isLoadingRedirectData: false,
      redirectDataLoaded: false,
      redirectUrl: null,
      paymentToken: null,
      paymentStatus: null,
    };
  }

  componentWillMount() {
    analyticsScreenMounted('PaymentContainer');
  }

  componentDidMount() {
    this.saferpay = new Saferpay(baseUrl, redirectsUrlKeys);
  }

  saferpay: Saferpay;

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
          .initializePayment(100 * fees, 'CHF', uuidv1())
          .then(responseJson => {
            setPaymentData(
              // $FlowFixMe
              paymentData.merge({
                // $FlowFixMe
                specVersion: responseJson.ResponseHeader.SpecVersion,
                // $FlowFixMe
                requestId: responseJson.ResponseHeader.RequestId,
                // $FlowFixMe
                token: responseJson.Token,
                // $FlowFixMe
                tokenExpiration: responseJson.Expiration,
                // $FlowFixMe
                redirectUrl: responseJson.RedirectUrl,
              })
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
          .catch(error => console.log('Error is', error));
      });
    }
  }

  checkWebViewUrl(state) {
    const { setPaymentData, paymentData } = this.props;
    let stateChanged = false;
    let paymentStatus = '';
    switch (state.url) {
      case `${baseUrl}${redirectsUrlKeys.success}`:
        analyticsCustom('Successful payment');
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
      setPaymentData(
        // $FlowFixMe
        paymentData.merge({
          status: paymentStatus,
        })
      );
      this.setState(
        {
          redirectDataLoaded: false,
          paymentStatus,
        },
        () => {
          if (paymentStatus === 'success') {
            // TODO Yuri: somewhere here should be AsyncStore.save(receipt);
            this.props.navigation.navigate('ReceiptAfterPayment');
          }
        }
      );
    }
  }

  render() {
    const {
      basket,
      t,
      dutyReport,
      vatReport,
      fees,
      paymentData,
      currencies,
      amounts,
    } = this.props;
    return (
      <View
        style={{
          flex: 1,
          height: '100%',
          marginHorizontal: 16,
          marginBottom: 16,
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
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
          dutyReport={dutyReport}
          vatReport={vatReport}
          basket={basket}
          initializePayment={() => this.initializePayment()}
        />

        <RedButton
          onPress={() => this.initializePayment()}
          text={t('toPayment')}
          confirmationDisabled={
            fees < 1 || totalAllAmounts(amounts, currencies) > MAX_DECLARED_CHF
          }
        />
        {this.state.redirectDataLoaded ? (
          <View style={{ position: 'absolute', top: 0 }}>
            <PaymentWebView
              source={{ uri: this.state.redirectUrl }}
              onNavigationStateChange={e => this.checkWebViewUrl(e)}
            />
          </View>
        ) : null}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setPaymentData: (paymentData: PaymentData) =>
    dispatch({
      type: 'SET_PAYMENT_DATA',
      paymentData,
    }),
});

const mapStateToProps = state => ({
  fees: getTotalFees(state),
  dutyReport: getDutyReport(state),
  duty: getTotalDuty(state),
  vat: getTotalVat(state),
  vatReport: getVatReport(state),
  amounts: getAmounts(state),
  basket: getBasket(state),
  currencies: getCurrencies(state),
  paymentData: getPaymentData(state),
});

export const PaymentContainer = (connect(mapStateToProps, mapDispatchToProps)(
  translate(['general'])(PaymentContainerInner)
): ComponentType<PaymentContainerProps>);
