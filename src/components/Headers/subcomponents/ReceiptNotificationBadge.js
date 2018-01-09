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
import {
  getBasket,
  getPeople,
  getCurrencies,
  getAmounts,
} from '../../../reducers';
import { calculateDuty } from '../../../model/dutyCalculations';
import { MAIN_RED } from '../../../styles/colors';
import { calculateVat } from '../../../model/vatCalculations';
import type {
  Amounts,
  Basket,
  People,
} from '../../../model/types/basketPeopleAmountsTypes';
import type { CurrencyObject } from '../../../model/currencies';

type ReceiptNotificationBadgeProps = {
  basket: Basket,
  people: People,
  amounts: Amounts,
  currencyObject: CurrencyObject,
};

const ReceiptNotificationBadgeInner = ({
  basket,
  people,
  amounts,
  currencyObject,
}: ReceiptNotificationBadgeProps) => {
  // TODO -> add vat!
  const duty = calculateDuty(basket, people).get('totalDuty', 0);
  const vat = calculateVat(amounts, people, currencyObject).get('totalVat', 0);
  return (
    <Touchable onPress={() => {}}>
      <View
        style={[
          receiptNotificationBadgeStyle.container,
          { backgroundColor: duty + vat ? MAIN_RED : 'lightgray' },
        ]}
      >
        <MaterialIcons
          name="shopping-cart"
          size={moderateScale(17)}
          color="white"
          style={receiptNotificationBadgeStyle.receiptIcon}
        />
        <Text style={receiptNotificationBadgeStyle.amountText}>
          CHF {(vat + duty).toFixed(2)}
        </Text>
      </View>
    </Touchable>
  );
};

const mapStateToProps = state => ({
  basket: getBasket(state),
  people: getPeople(state),
  currencyObject: getCurrencies(state),
  amounts: getAmounts(state),
});

export const ReceiptNotificationBadge = (connect(mapStateToProps)(
  ReceiptNotificationBadgeInner
): ComponentType<{}>);
