import React from 'react';
import { View } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { MAIN_RED } from '../../styles/colors';

const CheckBox = ({ checked, onPress }) => (
  <Touchable
    style={{
      height: 17,
      width: 17,
      borderRadius: 8.5,
      borderColor: 'black',
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    onPress={onPress}
  >
    {checked ? (
      <View
        checked={checked}
        style={{
          height: 12,
          width: 12,
          borderRadius: 6,
          backgroundColor: MAIN_RED,
        }}
      />
    ) : (
      <View />
    )}
  </Touchable>
);

export default CheckBox;
