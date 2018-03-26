// @flow
import React from 'react';
// $FlowFixMe
import { Image } from 'react-native';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { moderateScale } from '../../../styles/Scaling';
import type { Navigation } from '../../../types/generalTypes';

type CartIconProps = {
  navigation: Navigation,
};

const cartIcon = require('../../../../assets/icons/shoppingCartWithArrow.png');

export const CartIcon = ({ navigation }: CartIconProps) => (
  <Touchable
    onPress={() =>
      navigation.dispatch({ type: 'NAVIGATE', screen: 'QuestionAnswer' })
    }
  >
    <Image
      source={cartIcon}
      resizeMode="contain"
      style={{ height: moderateScale(24), width: moderateScale(39) }}
    />
  </Touchable>
);
