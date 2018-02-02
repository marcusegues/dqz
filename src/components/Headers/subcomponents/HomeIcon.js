// @flow
import React from 'react';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { MaterialIcons } from '@expo/vector-icons';
import { MAIN_RED } from '../../../styles/colors';
import { moderateScale } from '../../../styles/Scaling';
import type { Navigation } from '../../../types/generalTypes';

type HomeIconProps = {
  navigation: Navigation,
};

export const HomeIcon = ({ navigation }: HomeIconProps) => (
  <Touchable onPress={() => navigation.navigate('MainMenu')}>
    <MaterialIcons name="home" size={moderateScale(28)} color={MAIN_RED} />
  </Touchable>
);
