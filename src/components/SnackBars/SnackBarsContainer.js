// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View } from 'react-native';
import {
  getAmounts,
  getConnectivity,
  getCurrencies,
} from '../../reducers/selectors';
import type { Amounts } from '../../model/types/basketPeopleAmountsTypes';
import { updateSnackBarVisibilities } from './SnackBarsControl/controlSnackBarStates';
import type { CurrencyObject } from '../../model/currencies';
import type { ConnectivityType } from '../../types/connectivity';
import type { AppState } from '../../types/reducers';
import { SnackBar } from './SnackBar/SnackBar';
import type { TFunction } from '../../types/generalTypes';
import type { NavState } from '../../types/reducers/nav';

type SnackBarType = 'limitExceeded' | 'offline';

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
};

type ReduxInject = {
  // eslint-disable-next-line react/no-unused-prop-types
  amounts: Amounts,
  // eslint-disable-next-line react/no-unused-prop-types
  currencies: CurrencyObject,
  // eslint-disable-next-line react/no-unused-prop-types
  connectivity: ConnectivityType,
  nav: NavState,
};

class SnackBarsContainerInner extends React.Component<
  ReduxInject & { t: TFunction },
  SnackBarState
> {
  constructor(props) {
    super(props);
    this.state = {
      snackBarVisibilities: {
        limitExceeded: 'hidden',
        offline: 'hidden',
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
    const { amounts, currencies, connectivity, nav } = props;
    debugger;
    return {
      snackBarVisibilities,
      amounts,
      currencies,
      connectivity,
      nav,
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

  render() {
    const { snackBarVisibilities } = this.state;
    const { t } = this.props;
    const snackBarData = ['limitExceeded', 'offline'].map(key => ({
      key,
      text: t(key),
      visibility: snackBarVisibilities[key],
      component: SnackBar,
    }));

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
            text: item.text,
            visibility: item.visibility,
            bottomMost: index === bottomMostVisibleSnackBarIndex,
          })
        )}
      </View>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  nav: state.nav,
  amounts: getAmounts(state),
  currencies: getCurrencies(state),
  connectivity: getConnectivity(state),
});

export const SnackBarsContainer = (connect(mapStateToProps, null)(
  translate(['snackBar'])(SnackBarsContainerInner)
): ComponentType<{}>);
