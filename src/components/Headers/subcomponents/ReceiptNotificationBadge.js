import React from 'react';
import { Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { MaterialIcons } from '@expo/vector-icons';
import { moderateScale } from '../../../styles/Scaling';
import ownStyles from '../styles/ReceiptNotificationBadge';

const ReceiptNotificationBadge = () => (
  <Touchable onPress={() => {}}>
    <View style={ownStyles.container}>
      <MaterialIcons
        name="shopping-cart"
        size={moderateScale(17)}
        color="white"
        style={ownStyles.receiptIcon}
      />
      <Text style={ownStyles.amountText}>6.00 CHF</Text>
    </View>
  </Touchable>
);

export default ReceiptNotificationBadge;
