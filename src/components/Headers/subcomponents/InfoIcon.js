// @flow
import React from 'react';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { moderateScale } from '../../../styles/Scaling';
import { GREY } from '../../../styles/colors';
import type { Navigation } from '../../../types/generalTypes';

export const InfoIcon = ({ navigation }: { navigation: Navigation }) => (
  <Touchable
    onPress={() => {
      navigation.navigate('AppInfo');
    }}
  >
    <MaterialCommunityIcons
      name="information"
      size={moderateScale(23)}
      color={GREY}
    />
  </Touchable>
);
