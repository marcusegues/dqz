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
import RedButton from '../Buttons/RedButton';
import {
  getAmounts,
  getBasket,
  getCurrencies,
  getPeople,
} from '../../reducers';
import { calculateDuty } from '../../model/dutyCalculations';
import type {
  Amounts,
  Basket,
  People,
} from '../../model/types/basketPeopleAmountsTypes';
import type { CurrencyObject } from '../../model/currencies';
import { calculateVat } from '../../model/vatCalculations';
import type { TFunction } from '../../types/generalTypes';

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
  basket: Basket,
  people: People,
  amounts: Amounts,
  currencyObject: CurrencyObject,
  t: TFunction,
};

class PaymentContainerInner extends React.Component<
  PaymentContainerProps,
  PaymentContainerState
> {
  constructor(props: PaymentContainerProps) {
    super(props);
    this.state = {
      isLoadingRedirectData: false,
      redirectDataLoaded: false,
      redirectUrl: null,
      paymentToken: null,
      paymentStatus: null,
    };
  }

  componentDidMount() {
    this.saferpay = new Saferpay(baseUrl, redirectsUrlKeys);
  }

  saferpay: any; // TODO

  initializePayment() {
    const { basket, people, amounts, currencyObject } = this.props;
    const totalDuty = calculateDuty(basket, people).get('totalDuty', 0);
    const totalVat = calculateVat(amounts, people, currencyObject).get(
      'totalVat',
      0
    );
    const totalSum = totalDuty + totalVat;

    if (totalSum > 0) {
      this.setState({ isLoadingRedirectData: true }, () => {
        this.saferpay
          .initializePayment(100 * totalSum, 'CHF')
          .then(responseJson => {
            // console.log('response is', responseJson);
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
    } else {
      console.log(`totalDuty is 0!`);
    }
  }

  checkWebViewUrl(state) {
    let stateChanged = false;
    let paymentStatus = '';
    switch (state.url) {
      case `${baseUrl}${redirectsUrlKeys.success}`:
        stateChanged = true;
        paymentStatus = 'success';
        break;
      case `${baseUrl}${redirectsUrlKeys.fail}`:
        stateChanged = true;
        paymentStatus = 'fail';
        break;
      case `${baseUrl}${redirectsUrlKeys.abort}`:
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
    const { basket, people, amounts, currencyObject, t } = this.props;
    const totalSum =
      calculateDuty(basket, people).get('totalDuty') +
      calculateVat(amounts, people, currencyObject).get('totalVat');
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
          people={people}
          basket={basket}
          amounts={amounts}
          currencyObject={currencyObject}
          initializePayment={() => this.initializePayment()}
        />

        <RedButton
          onPress={() => this.initializePayment()}
          text={t('toPayment')}
          confirmationDisabled={totalSum < 1}
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
  basket: getBasket(state),
  people: getPeople(state),
  amounts: getAmounts(state),
  currencyObject: getCurrencies(state),
});

export const PaymentContainer = (connect(mapStateToProps)(
  translate(['general'])(PaymentContainerInner)
): ComponentType<PaymentContainerProps>);
