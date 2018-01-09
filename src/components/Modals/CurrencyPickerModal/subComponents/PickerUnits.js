// @flow
import React from 'react';
// $FlowFixMe
import { Text, View } from 'react-native';
import { moderateScale } from '../../../../styles/Scaling';
import { DARK_GREY } from '../../../../styles/colors';

const ownStyles = {
  pickerUnitColumn: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  pickerUnitColumnText: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(14),
    color: DARK_GREY,
  },
};

type PickerUnitsProps = {
  unit: string,
};

export const PickerUnits = ({ unit }: PickerUnitsProps) => (
  <View style={ownStyles.pickerUnitColumn}>
    <Text style={ownStyles.pickerUnitColumnText}>{unit}</Text>
  </View>
);
