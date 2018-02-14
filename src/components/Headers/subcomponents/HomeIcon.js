// @flow
import React from 'react';
// $FlowFixMe
import { Image } from 'react-native';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { moderateScale } from '../../../styles/Scaling';
import type { Navigation } from '../../../types/generalTypes';

type HomeIconProps = {
  navigation: Navigation,
};

const homeIcon = require('../../../../assets/images/logo_red.png');

export const HomeIcon = ({ navigation }: HomeIconProps) => (
  <Touchable onPress={() => navigation.navigate('MainMenu')}>
    <Image
      source={homeIcon}
      style={{ width: moderateScale(27), height: moderateScale(30) }}
      resizeMode="contain"
    />
  </Touchable>
);
