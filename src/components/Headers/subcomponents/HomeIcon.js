// @flow
import React from 'react';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import Entypo from '@expo/vector-icons/Entypo';
import { moderateScale } from '../../../styles/Scaling';
import type { Navigation } from '../../../types/generalTypes';
import { GREY } from '../../../styles/colors';

type HomeIconProps = {
  navigation: Navigation,
};

export const HomeIcon = ({ navigation }: HomeIconProps) => (
  <Touchable
    onPress={() =>
      navigation.dispatch({ type: 'NAVIGATE', screen: 'MainMenu' })
    }
  >
    <Entypo name="home" size={moderateScale(27)} color={GREY} />
  </Touchable>
);
