// @flow
import React from 'react';
import { Text, View } from 'react-native';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';

class TravelDocumentsInner extends React.Component<{
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
        <Text>Travel Documents</Text>
      </View>
    );
  }
}

export const TravelDocuments = (translate(['information'])(
  TravelDocumentsInner
): ComponentType<{}>);
