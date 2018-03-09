// @flow
import React from 'react';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { MaterialIcons } from '@expo/vector-icons';
import { moderateScale } from '../../../styles/Scaling';
import type { Navigation } from '../../../types/generalTypes';
import { receiptNotificationBadgeStyle } from '../styles/ReceiptNotificationBadge';
import { MAIN_RED } from '../../../styles/colors';

type CartIconProps = {
  navigation: Navigation,
};

export const CartIcon = ({ navigation }: CartIconProps) => (
  <Touchable
    onPress={() =>
      navigation.dispatch({ type: 'NAVIGATE', screen: 'QuestionAnswer' })
    }
  >
    <MaterialIcons
      name="shopping-cart"
      size={moderateScale(30)}
      color={MAIN_RED}
      style={receiptNotificationBadgeStyle.receiptIcon}
    />
  </Touchable>
);
