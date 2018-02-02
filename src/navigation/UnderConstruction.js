// @flow
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { Text, View } from 'react-native';
import { translate } from 'react-i18next';
import { HeaderTitle } from '../components/Headers/subcomponents/HeaderTitle';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

class UnderConstructionInner extends React.Component<{}> {
  static navigationOptions = ({ screenProps }) => ({
    headerTitle: (
      <HeaderTitle text={screenProps.t('general:underConstruction')} />
    ),
  });

  render() {
    return (
      <View style={style}>
        <Text style={{ fontSize: 64 }}>🚧🛃🚧</Text>
      </View>
    );
  }
}

export const UnderConstruction = (translate('general')(
  UnderConstructionInner
): ComponentType<{}>);
