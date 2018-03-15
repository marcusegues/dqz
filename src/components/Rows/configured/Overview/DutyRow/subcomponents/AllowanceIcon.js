// @flow
import React from 'react';
// $FlowFixMe
import { View, Text, StyleSheet } from 'react-native';
import { moderateScale } from '../../../../../../styles/Scaling';
import { MAIN_BLACK } from '../../../../../../styles/colors';
import { type } from '../../../../../../styles/fonts';

const ownStyles = StyleSheet.create({
  quantityContainer: {
    marginTop: 5,
    paddingHorizontal: 6,
    paddingVertical: 2,
    backgroundColor: '#EBF8DD',
  },
  quantityText: {
    color: MAIN_BLACK,
    fontSize: moderateScale(12),
    fontFamily: type.light,
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
