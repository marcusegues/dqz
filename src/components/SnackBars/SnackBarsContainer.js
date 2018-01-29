// @flow
import React from 'react';
import { connect } from 'react-redux';
// $FlowFixMe
import { View, StyleSheet, FlatList } from 'react-native';
import { translate } from 'react-i18next';
import { LimitExceededSB } from './SnackBar/configured/LimitExceededSB';
import { OfflineSB } from './SnackBar/configured/OfflineSB';

const ownStyles = StyleSheet.create({
  snackBar: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});

type SnackBarType = 'declaredLimitExceeded' | 'offline';

type SnackBarState = 'hidden' | 'displayed';

type SnackBarsState = {
  snackBarstate: { [SnackBarType]: SnackBarState },
};

type SnackBarProps = {};

class SnackBarsContainerInner extends React.Component<
  SnackBarProps,
  SnackBarsState
> {
  render() {
    const flatListData = [
      {
        key: 'limitExceeded',
        component: <LimitExceededSB />,
      },
      {
        key: 'offline',
        component: <OfflineSB />,
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export const SnackBarsContainer = (connect(mapStateToProps, mapDispatchToProps)(
  translate(['snackBars'])(SnackBarsContainerInner)
): ComponentType<{}>);
