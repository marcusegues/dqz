// @flow
import React from 'react';
// $FlowFixMe
import { Text, StyleSheet } from 'react-native';
import { GreyBox } from '../GreyBox';

const ownStyles = StyleSheet.create({
  quantityText: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'roboto_regular',
  },
});

type QuantityIconProps = {
  quantity: number | string,
  unit: string,
};

export const QuantityIcon = ({ quantity, unit }: QuantityIconProps) => (
  <GreyBox>
    <Text style={ownStyles.quantityText}>{`${quantity} ${unit}`}</Text>
  </GreyBox>
);
