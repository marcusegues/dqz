// @flow
import React from 'react';
// $FlowFixMe
import { View, Text, StyleSheet } from 'react-native';

const ownStyles = StyleSheet.create({
  quantityContainer: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#E0E0E1',
    borderRadius: 3,
  },
  quantityText: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'roboto_regular',
  },
});

type QuantityIconProps = {
  quantity: number,
  unit: string,
};

const QuantityIcon = ({ quantity, unit }: QuantityIconProps) => (
  <View style={ownStyles.quantityContainer}>
    <Text style={ownStyles.quantityText}>{`${quantity} ${unit}`}</Text>
  </View>
);

export default QuantityIcon;
