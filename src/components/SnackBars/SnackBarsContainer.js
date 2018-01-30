// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { connect } from 'react-redux';
// $FlowFixMe
import { View, StyleSheet, FlatList } from 'react-native';
import { translate } from 'react-i18next';
import { LimitExceededSB } from './SnackBar/configured/LimitExceededSB';
import { OfflineSB } from './SnackBar/configured/OfflineSB';
import { getAmounts } from '../../reducers';
import type { Amounts } from '../../model/types/basketPeopleAmountsTypes';
import { setInitStates } from './SnackBarsControl/controlSnackBarStates';

const ownStyles = StyleSheet.create({
  snackBar: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
});

type SnackBarType = 'limitExceeded' | 'offline';

export type SnackBarState = 'hidden' | 'displayed';

export type SBState = {
  snackBarStates: { [SnackBarType]: SnackBarState },
};

type SnackBarContainerProps = {
  amounts: Amounts,
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
        offline: 'hidden',
      },
    };
  }

  componentDidMount() {
    this.initState();
  }

  initState() {
    const newState = setInitStates(this.state, this.props.amounts);
    this.setState(newState);
  }

  render() {
    const { snackBarStates } = this.state;
    const flatListData = [
      {
        key: 'limitExceeded',
        component: <LimitExceededSB sbState={snackBarStates.limitExceeded} />,
      },
      {
        key: 'offline',
        component: <OfflineSB sbState={snackBarStates.offline} />,
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
});

export const SnackBarsContainer = (connect(mapStateToProps, null)(
  translate(['snackBars'])(SnackBarsContainerInner)
): ComponentType<{}>);
