// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { ReceiptNotificationBadge } from './ReceiptNotificationBadge';
import { OptionsGearIcon } from './OptionsGearIcon';
import { mainMenuHeaderRightStyle } from '../styles/MainMenuHeaderRight';

import type { NavigationObject } from '../../../navigation/RootNavigation';

export const MainMenuHeaderRight = ({ navigation }: NavigationObject) => (
  <View style={mainMenuHeaderRightStyle.container}>
    <ReceiptNotificationBadge navigation={navigation} />
    <OptionsGearIcon />
  </View>
);
