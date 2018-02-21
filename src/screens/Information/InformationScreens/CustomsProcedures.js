// @flow
import React from 'react';
import { Text, View } from 'react-native';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';

class CustomsProceduresInner extends React.Component<{
  t: TFunction,
  navigation: Navigation,
}> {
  // static navigationOptions = ({ screenProps }) => ({
  //   headerTitle: (
  //     <HeaderTitle text={screenProps.t('information:informationTitle')} />
  //   ),
  // });

  render() {
    const { t, navigation, infoCategory } = this.props;
    return (
      <View>
        <Text>Customs procedures</Text>
      </View>
    );
  }
}

export const CustomsProcedures = (translate(['information'])(
  CustomsProceduresInner
): ComponentType<{}>);
