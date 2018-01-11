/* eslint-disable react/no-unused-state,no-console */
// @flow
import React from 'react';
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
} from '../../reducers';
import type { TFunction } from '../../types/generalTypes';
import type { DutyReport, VatReport } from '../../model/types/calculationTypes';
import type { Basket } from '../../model/types/basketPeopleAmountsTypes';
import {
  analyticsCustom,
  analyticsScreenMounted,
} from '../../analytics/analyticsApi';

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

type PaymentContainerProps = {};

type ReduxInject = {
  fees: number,
  basket: Basket,
  dutyReport: DutyReport,
  vatReport: VatReport,
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

  saferpay: any; // TODO

  initializePayment() {
    const { fees } = this.props;

    if (fees > 0) {
      this.setState({ isLoadingRedirectData: true }, () => {
        this.saferpay
          .initializePayment(100 * fees, 'CHF')
          .then(responseJson => {
            this.setState({
              isLoadingRedirectData: false,
              redirectDataLoaded: true,
              redirectUrl: responseJson.RedirectUrl,
              paymentToken: responseJson.Token,
              paymentStatus: 'start',
            });
          })
          .catch(error => console.log('Error is', error));
      });
    }
  }

  checkWebViewUrl(state) {
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
      this.setState(
        {
          redirectDataLoaded: false,
          paymentStatus,
        },
        () => {
          console.log('Payment finished');
        }
      );
    }
  }

  render() {
    const { basket, t, dutyReport, vatReport, fees } = this.props;
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
          <Text style={{ color: 'green' }}>Payment success</Text>
        ) : null}
        {this.state.paymentStatus === 'abort' ? (
          <Text style={{ color: 'red' }}>Payment aborted</Text>
        ) : null}
        {this.state.paymentStatus === 'fail' ? (
          <Text style={{ color: 'red' }}>Payment failed</Text>
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
          confirmationDisabled={fees < 1}
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

const mapStateToProps = state => ({
  fees: getTotalFees(state),
  dutyReport: getDutyReport(state),
  vatReport: getVatReport(state),
  basket: getBasket(state),
});

export const PaymentContainer = (connect(mapStateToProps)(
  translate(['general'])(PaymentContainerInner)
): ComponentType<PaymentContainerProps>);
