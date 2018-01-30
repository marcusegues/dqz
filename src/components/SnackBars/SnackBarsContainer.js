// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { connect } from 'react-redux';
// $FlowFixMe
import { View, StyleSheet, FlatList } from 'react-native';
import { LimitExceededSB } from './SnackBar/configured/LimitExceededSB';
import { getAmounts, getCurrencies } from '../../reducers';
import type { Amounts } from '../../model/types/basketPeopleAmountsTypes';
import { updateState } from './SnackBarsControl/controlSnackBarStates';
import type { CurrencyObject } from '../../model/currencies';

const ownStyles = StyleSheet.create({
  snackBar: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
});

type SnackBarType = 'limitExceeded';

export type SnackBarStateType = 'hidden' | 'displayed';

type SnackBarStatesObjectType = { [SnackBarType]: SnackBarStateType };

export type SBState = {
  snackBarStates: SnackBarStatesObjectType,
};

export type SBStateEnriched = {
  snackBarStates: SnackBarStatesObjectType,
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
  SBState
> {
  constructor(props) {
    super(props);
    this.state = {
      snackBarStates: {
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

  enrichState(props: SnackBarContainerProps): SBStateEnriched {
    const { snackBarStates } = this.state;
    const { amounts, currencies } = props;
    return {
      snackBarStates,
      amounts,
      currencies,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  simplifyState(enrichedState: SBStateEnriched): SBState {
    return {
      snackBarStates: enrichedState.snackBarStates,
    };
  }

  updateState(props: SnackBarContainerProps): void {
    const newState: SBStateEnriched = updateState(this.enrichState(props));
    this.setState(this.simplifyState(newState));
  }

  render() {
    const { snackBarStates } = this.state;
    const flatListData = [
      {
        key: 'limitExceeded',
        component: <LimitExceededSB sbState={snackBarStates.limitExceeded} />,
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
