// @flow
import React from 'react';
// $FlowFixMe
import { View, Text, StyleSheet } from 'react-native';
import { moderateScale } from '../../../styles/Scaling';

const ownStyles = StyleSheet.create({
  quantityContainer: {
    marginTop: 5,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#EBF8DD',
    borderRadius: 3,
  },
  quantityText: {
    color: '#1A1A1A',
    fontSize: moderateScale(12),
    fontFamily: 'roboto_light',
  },
});

type AllowanceIconProps = {
  quantity: number | string,
  unit: string,
  text: string,
};

export const AllowanceIcon = ({ quantity, unit, text }: AllowanceIconProps) => (
  <View style={ownStyles.quantityContainer}>
    <Text style={ownStyles.quantityText}>{`${text} ${quantity} ${unit}`}</Text>
  </View>
);
