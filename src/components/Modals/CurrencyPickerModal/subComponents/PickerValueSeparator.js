// @flow
import React from 'react';
// $FlowFixMe
import { View, Text } from 'react-native';
import { DARK_GREY } from '../../../../styles/colors';
import { moderateScale } from '../../../../styles/Scaling';

const ownStyles = {
  pickerDividerColumn: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  pickerDividerColumnText: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(16),
    color: DARK_GREY,
  },
};

type PickerValueSeparatorProps = {
  separator: string,
};

export const PickerValueSeparator = ({
  separator,
}: PickerValueSeparatorProps) => (
  <View style={ownStyles.pickerDividerColumn}>
    <Text style={ownStyles.pickerDividerColumnText}>{separator}</Text>
  </View>
);
