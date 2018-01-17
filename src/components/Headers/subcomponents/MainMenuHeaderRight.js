// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { ReceiptNotificationBadge } from './ReceiptNotificationBadge';
import { OptionsGearIcon } from './OptionsGearIcon';
import { mainMenuHeaderRightStyle } from '../styles/MainMenuHeaderRight';

export const MainMenuHeaderRight = () => (
  <View style={mainMenuHeaderRightStyle.container}>
    <ReceiptNotificationBadge />
    <OptionsGearIcon />
  </View>
);
