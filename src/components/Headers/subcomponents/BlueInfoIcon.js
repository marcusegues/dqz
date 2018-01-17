// @flow
import React from 'react';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { moderateScale } from '../../../styles/Scaling';

export const BlueInfoIcon = () => (
  <Touchable onPress={() => {}}>
    <MaterialCommunityIcons
      name="information"
      size={moderateScale(30)}
      color="#006699"
    />
  </Touchable>
);
