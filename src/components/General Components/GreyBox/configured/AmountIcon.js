// @flow
import React from 'react';
// $FlowFixMe
import { Text, StyleSheet } from 'react-native';
import { GreyBox } from '../GreyBox';

const ownStyles = StyleSheet.create({
  amountText: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'roboto_regular',
  },
});

type AmountIconProps = {
  amount: number,
  currency: string,
};

export const AmountIcon = ({ amount, currency }: AmountIconProps) => (
  <GreyBox>
    <Text style={ownStyles.quantityText}>{`${currency} ${amount.toFixed(
      2
    )}`}</Text>
  </GreyBox>
);
