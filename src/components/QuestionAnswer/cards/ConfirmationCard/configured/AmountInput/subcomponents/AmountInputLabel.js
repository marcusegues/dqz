// @flow
import React from 'react';
// $FlowFixMe
import { View, Text } from 'react-native';
import {
  moderateScale,
  scale,
  verticalScale,
} from '../../../../../../../styles/Scaling';

const ownStyles = {
  quantityContainer: {
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(2),
    backgroundColor: '#E0E0E1',
    borderRadius: 3,
  },
  quantityText: {
    color: 'black',
    fontSize: moderateScale(14),
    fontFamily: 'roboto_regular',
  },
};

type AmountInputLabelProps = {
  quantity: number,
};

export const AmountInputLabel = ({ quantity }: AmountInputLabelProps) => (
  <View style={ownStyles.quantityContainer}>
    <Text style={ownStyles.quantityText}>{`CHF ${quantity}`}</Text>
  </View>
);
