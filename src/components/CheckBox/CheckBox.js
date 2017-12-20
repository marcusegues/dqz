import React from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { MAIN_RED, GREY } from '../../styles/colors';
import { moderateScale } from '../../styles/Scaling';

const CheckBox = ({ checked }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    {checked ? (
      <MaterialIcons
        name="check-circle"
        size={moderateScale(35)}
        color={MAIN_RED}
      />
    ) : (
      <MaterialIcons
        name="radio-button-unchecked"
        size={moderateScale(35)}
        color={GREY}
      />
    )}
  </View>
);

export default CheckBox;
