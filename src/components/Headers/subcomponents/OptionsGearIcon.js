// @flow
import React from 'react';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { moderateScale } from '../../../styles/Scaling';
import { GREY } from '../../../styles/colors';

export const OptionsGearIcon = () => (
  <Touchable onPress={() => {}}>
    <MaterialCommunityIcons
      name="settings"
      size={moderateScale(23)}
      color={GREY}
    />
  </Touchable>
);
