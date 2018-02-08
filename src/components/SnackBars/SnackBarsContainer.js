// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { connect } from 'react-redux';
// $FlowFixMe
import { View, StyleSheet, FlatList } from 'react-native';
import { LimitExceededSnackBar } from './SnackBar/configured/LimitExceededSnackBar';
import { getAmounts, getConnectivity, getCurrencies } from '../../reducers';
import type { Amounts } from '../../model/types/basketPeopleAmountsTypes';
import { updateSnackBarVisibilities } from './SnackBarsControl/controlSnackBarStates';
import type { CurrencyObject } from '../../model/currencies';
import type { ConnectivityType } from '../../types/connectivity';
import { OfflineSnackBar } from './SnackBar/configured/OfflineSnackBar';
import type { AppState } from '../../types/reducers';

const ownStyles = StyleSheet.create({
  snackBar: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
});

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
};

type ReduxInject = {
  // eslint-disable-next-line react/no-unused-prop-types
  amounts: Amounts,
  // eslint-disable-next-line react/no-unused-prop-types
  currencies: CurrencyObject,
  // eslint-disable-next-line react/no-unused-prop-types
  connectivity: ConnectivityType,
};

class SnackBarsContainerInner extends React.Component<
  ReduxInject,
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
    const { amounts, currencies, connectivity } = props;
    return {
      snackBarVisibilities,
      amounts,
      currencies,
      connectivity,
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
    const flatListData = [
      {
        key: 'limitExceeded',
        visibility: snackBarVisibilities.limitExceeded,
        component: LimitExceededSnackBar,
      },
      {
        key: 'offline',
        visibility: snackBarVisibilities.offline,
        component: OfflineSnackBar,
      },
    ];

    // determine which element in flatListData is the last one that has visibility === 'visible'
    const reverseIndex = flatListData
      .slice()
      .reverse()
      .findIndex(el => el.visibility === 'visible');
    const bottomMostVisibleSnackBarIndex =
      reverseIndex !== -1
        ? flatListData.length - 1 - reverseIndex
        : reverseIndex;
    return (
      <View style={ownStyles.snackBar}>
        <FlatList
          style={{ width: '100%' }}
          data={flatListData}
          renderItem={({ item, index }) => React.createElement(item.component, {
              visibility: item.visibility,
              bottomMost: index === bottomMostVisibleSnackBarIndex,
            })}
        />
      </View>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  amounts: getAmounts(state),
  currencies: getCurrencies(state),
  connectivity: getConnectivity(state),
});

export const SnackBarsContainer = (connect(mapStateToProps, null)(
  SnackBarsContainerInner
): ComponentType<{}>);
