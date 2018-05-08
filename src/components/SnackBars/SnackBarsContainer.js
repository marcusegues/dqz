/* eslint-disable react/no-unused-prop-types */
// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
// $FlowFixMe
import { Linking, View } from 'react-native';
import {
  getAmounts,
  getConnectivity,
  getCurrencies,
  getTotalFees,
} from '../../reducers/selectors';
import type { Amounts } from '../../model/types/basketPeopleAmountsTypes';
import { updateSnackBarVisibilities } from './SnackBarsControl/controlSnackBarStates';
import type { CurrencyObject } from '../../model/currencies';
import type { ConnectivityType } from '../../types/connectivity';
import type { AppState } from '../../types/reducers';
import { SnackBar } from './SnackBar/SnackBar';
import type {
  PaymentData,
  PaymentStatus,
  TFunction,
} from '../../types/generalTypes';
import type { NavState } from '../../types/reducers/nav';
import type { SnackBarType } from './SnackBarsControl/controlSnackBarStates';
import type { Language } from '../../i18n/types/locale';
import { borderCrossingsLinks } from '../../screens/Information/types/information';

export type SnackBarVisibility = 'hidden' | 'visible';

type SnackBarStatesObjectType = { [SnackBarType]: SnackBarVisibility };

export type SnackBarState = {
  snackBarVisibilities: SnackBarStatesObjectType,
};

export type SnackBarStateEnriched = {
  snackBarVisibilities: SnackBarStatesObjectType,
  amounts: Amounts,
  currencies: CurrencyObject,
  connectivity: ConnectivityType,
  nav: NavState,
  fees: number,
  paymentStatus: PaymentStatus,
};

type ReduxInject = {
  amounts: Amounts,
  fees: number,
  currencies: CurrencyObject,
  connectivity: ConnectivityType,
  nav: NavState,
  paymentData: PaymentData,
  resetPaymentData: () => void,
};

class SnackBarsContainerInner extends React.Component<
  ReduxInject & { t: TFunction, i18n: { language: Language } },
  SnackBarState
> {
  constructor(props) {
    super(props);
    this.state = {
      snackBarVisibilities: {
        limitExceeded: 'hidden',
        offline: 'hidden',
        paymentAborted: 'hidden',
        paymentFailed: 'hidden',
      },
    };
  }

  componentDidMount() {
    this.updateState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.updateState(nextProps);
  }

  enrichState(props: ReduxInject): SnackBarStateEnriched {
    const { snackBarVisibilities } = this.state;
    const { amounts, currencies, connectivity, nav, paymentData, fees } = props;
    return {
      snackBarVisibilities,
      amounts,
      currencies,
      connectivity,
      nav,
      fees,
      paymentStatus: paymentData.status,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  simplifyState(enrichedState: SnackBarStateEnriched): SnackBarState {
    return {
      snackBarVisibilities: enrichedState.snackBarVisibilities,
    };
  }

  updateState(props: ReduxInject): void {
    const newState: SnackBarStateEnriched = updateSnackBarVisibilities(
      this.enrichState(props)
    );
    this.setState(this.simplifyState(newState));
  }

  linkToBorderCrossings = () => {
    const { i18n } = this.props;
    Linking.openURL(`${borderCrossingsLinks[i18n.language]}`);
  };

  render() {
    const { snackBarVisibilities } = this.state;
    const { t, resetPaymentData } = this.props;

    const snackBarData = [
      {
        key: 'limitExceeded',
        text: t('limitExceeded'),
        visibility: snackBarVisibilities.limitExceeded,
        component: SnackBar,
        rightText: t('limitExceededRightText'),
        onRightTextPress: () => this.linkToBorderCrossings(),
      },
      {
        key: 'offline',
        text: t('offline'),
        visibility: snackBarVisibilities.offline,
        component: SnackBar,
      },
      {
        key: 'paymentAborted',
        text: t('paymentAborted'),
        rightText: t('paymentAbortedRightText'),
        onRightTextPress: () => resetPaymentData(),
        visibility: snackBarVisibilities.paymentAborted,
        component: SnackBar,
      },
      {
        key: 'paymentFailed',
        text: t('paymentFailed'),
        rightText: t('paymentFailedRightText'),
        onRightTextPress: () => resetPaymentData(),
        visibility: snackBarVisibilities.paymentFailed,
        component: SnackBar,
      },
    ];

    // determine which element in snackBarData is the last one that has visibility === 'visible'
    const bottomMostVisibleSnackBarIndex = snackBarData.reduce(
      (acc, val, idx) => (val.visibility === 'visible' ? idx : acc),
      -1
    );
    return (
      <View
        style={{
          flexDirection: 'column',
          width: '100%',
        }}
      >
        {snackBarData.map((item, index) =>
          React.createElement(item.component, {
            key: item.key,
            text: t(item.key),
            rightText: item.rightText
              ? t(`${item.key}RightText`).toUpperCase()
              : null,
            onRightTextPress: item.onRightTextPress
              ? item.onRightTextPress
              : null,
            visibility: snackBarVisibilities[item.key],
            bottomMost: index === bottomMostVisibleSnackBarIndex,
            borderCrossings: item.key === 'limitExceeded',
          })
        )}
      </View>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  nav: state.nav,
  paymentData: state.declaration.paymentData,
  amounts: getAmounts(state),
  currencies: getCurrencies(state),
  connectivity: getConnectivity(state),
  fees: getTotalFees(state),
});

const mapDispatchToProps = dispatch => ({
  resetPaymentData: () => {
    dispatch({
      type: 'RESET_PAYMENT_DATA',
    });
  },
});

export const SnackBarsContainer = (connect(mapStateToProps, mapDispatchToProps)(
  translate(['snackBar'])(SnackBarsContainerInner)
): ComponentType<{}>);
