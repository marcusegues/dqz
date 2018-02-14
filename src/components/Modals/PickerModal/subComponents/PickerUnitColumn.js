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

type PickerUnitColumnProps = {
  unit: string,
  style?: {},
};

export const PickerUnitColumn = ({ unit, style }: PickerUnitColumnProps) => (
  <View style={[ownStyles.pickerUnitColumn, { ...style }]}>
    <Text style={ownStyles.pickerUnitColumnText}>{unit}</Text>
  </View>
);

PickerUnitColumn.defaultProps = {
  style: {},
};
