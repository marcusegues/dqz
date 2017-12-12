import React from 'react';
import { Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { moderateScale } from '../../../styles/Scaling';
import ownStyles from '../styles/ReceiptNotificationBadge';

const ReceiptNotificationBadge = ({ navigation }) => (
  <Touchable onPress={() => {}}>
    <View style={ownStyles.container}>
      <MaterialCommunityIcons
        name="receipt"
        size={moderateScale(17)}
        color="white"
        style={ownStyles.receiptIcon}
      />
      <Text style={ownStyles.amountText}>1</Text>
    </View>
  </Touchable>
);

export default ReceiptNotificationBadge;
