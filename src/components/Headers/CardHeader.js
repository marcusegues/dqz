import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as colors from '../../styles/colors';
import { View } from 'react-native';

class CardHeader extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flexBasis: '10%' }}>
          <Ionicons name={`md-arrow-back`} size={32} color={colors.MAIN_RED} />
        </View>
        <View style={{ flexBasis: '70%' }}>
          <Text>{`Testing`}</Text>
        </View>
        <View style={{ flexBasis: '20%' }} />
      </View>
    );
  }
}

export default CardHeader;
