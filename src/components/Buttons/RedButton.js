import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import * as colors from './../../styles/colors';

const RedButton = ({ text, onPress }) => (
  <View style={{ margin: 16 }}>
    <Touchable
      onPress={onPress}
      style={{ backgroundColor: colors.MAIN_RED }}
      background={Touchable.Ripple(colors.MAIN_RED)}
    >
      <Text>{text}</Text>
    </Touchable>
  </View>
);
export default RedButton;
