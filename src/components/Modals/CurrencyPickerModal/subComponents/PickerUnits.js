import React from 'react';
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

const PickerUnits = ({ unit }) => (
  <View style={ownStyles.pickerUnitColumn}>
    <Text style={ownStyles.pickerUnitColumnText}>{unit}</Text>
  </View>
);

export default PickerUnits;
