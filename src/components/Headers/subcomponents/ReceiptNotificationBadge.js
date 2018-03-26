// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { Text, View } from 'react-native';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { moderateScale } from '../../../styles/Scaling';
import { receiptNotificationBadgeStyle } from '../styles/ReceiptNotificationBadge';
import { getTotalFees } from '../../../reducers/selectors';
import { MAIN_RED } from '../../../styles/colors';
import type { Navigation } from '../../../types/generalTypes';

type ReceiptNotificationBadgeProps = {
  fees: number,
  navigation: Navigation,
};

const ReceiptNotificationBadgeInner = ({
  fees,
  navigation,
}: ReceiptNotificationBadgeProps) =>
  fees ? (
    <Touchable
      onPress={() => {
        navigation.dispatch({
          type: 'NAVIGATE',
          screen: 'Payment',
        });
      }}
    >
      <View
        style={[
          receiptNotificationBadgeStyle.container,
          { backgroundColor: fees ? MAIN_RED : 'lightgray' },
        ]}
      >
        <MaterialIcons
          name="shopping-cart"
          size={moderateScale(17)}
          color="white"
          style={receiptNotificationBadgeStyle.receiptIcon}
        />
        <Text style={receiptNotificationBadgeStyle.amountText}>
          CHF {fees.toFixed(2)}
        </Text>
      </View>
    </Touchable>
  ) : null;

const mapStateToProps = state => ({
  fees: getTotalFees(state),
});

export const ReceiptNotificationBadge = (connect(mapStateToProps)(
  ReceiptNotificationBadgeInner
): ComponentType<{}>);
