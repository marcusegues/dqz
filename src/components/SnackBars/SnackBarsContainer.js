// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { connect } from 'react-redux';
// $FlowFixMe
import { View, StyleSheet, FlatList } from 'react-native';
import { LimitExceededSnackBar } from './SnackBar/configured/LimitExceededSnackBar';
import { getAmounts, getCurrencies } from '../../reducers';
import type { Amounts } from '../../model/types/basketPeopleAmountsTypes';
import { updateSnackBarVisibilities } from './SnackBarsControl/controlSnackBarStates';
import type { CurrencyObject } from '../../model/currencies';

const ownStyles = StyleSheet.create({
  snackBar: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
});

type SnackBarType = 'limitExceeded';

export type SnackBarVisibility = 'hidden' | 'visible';

type SnackBarStatesObjectType = { [SnackBarType]: SnackBarVisibility };

export type SnackBarState = {
  snackBarVisibilities: SnackBarStatesObjectType,
};

export type SnackBarStateEnriched = {
  snackBarVisibilities: SnackBarStatesObjectType,
  amounts: Amounts,
  currencies: CurrencyObject,
};

type SnackBarContainerProps = {
  // eslint-disable-next-line react/no-unused-prop-types
  amounts: Amounts,
  // eslint-disable-next-line react/no-unused-prop-types
  currencies: CurrencyObject,
};

class SnackBarsContainerInner extends React.Component<
  SnackBarContainerProps,
  SnackBarState
> {
  constructor(props) {
    super(props);
    this.state = {
      snackBarVisibilities: {
        limitExceeded: 'hidden',
      },
    };
  }

  componentDidMount() {
    this.updateState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.updateState(nextProps);
  }

  enrichState(props: SnackBarContainerProps): SnackBarStateEnriched {
    const { snackBarVisibilities } = this.state;
    const { amounts, currencies } = props;
    return {
      snackBarVisibilities,
      amounts,
      currencies,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  simplifyState(enrichedState: SnackBarStateEnriched): SnackBarState {
    return {
      snackBarVisibilities: enrichedState.snackBarVisibilities,
    };
  }

  updateState(props: SnackBarContainerProps): void {
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
        component: (
          <LimitExceededSnackBar
            visibility={snackBarVisibilities.limitExceeded}
          />
        ),
      },
    ];
    return (
      <View style={ownStyles.snackBar}>
        <FlatList
          style={{ width: '100%' }}
          data={flatListData}
          renderItem={({ item }) => item.component}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  amounts: getAmounts(state),
  currencies: getCurrencies(state),
});

export const SnackBarsContainer = (connect(mapStateToProps, null)(
  SnackBarsContainerInner
): ComponentType<{}>);
