import React from 'react';
import { View } from 'react-native';
import ReceiptNotificationBadge from './ReceiptNotificationBadge';
import OptionsGearIcon from './OptionsGearIcon';
import ownStyles from '../styles/MainMenuHeaderRight';

const MainMenuHeaderRight = ({ navigation }) => (
  <View style={ownStyles.container}>
    <ReceiptNotificationBadge />
    <OptionsGearIcon />
  </View>
);

export default MainMenuHeaderRight;
