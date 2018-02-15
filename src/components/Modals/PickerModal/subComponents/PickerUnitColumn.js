// @flow
import React from 'react';
// $FlowFixMe
import { Text, View } from 'react-native';
import { moderateScale } from '../../../../styles/Scaling';

const ownStyles = {
  pickerUnitColumn: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  pickerUnitColumnText: {
    fontFamily: 'roboto_medium',
    fontSize: moderateScale(14),
    color: '#1A1A1A',
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
