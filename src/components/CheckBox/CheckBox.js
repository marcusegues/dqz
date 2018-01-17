// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { MAIN_RED, GREY } from '../../styles/colors';
import { moderateScale } from '../../styles/Scaling';

export const CheckBox = ({ checked }: { checked: boolean }) => (
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
