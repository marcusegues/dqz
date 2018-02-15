// @flow
import React from 'react';
// $FlowFixMe
import { View, Text } from 'react-native';
import { moderateScale } from '../../../../styles/Scaling';

const ownStyles = {
  pickerDividerColumn: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 0.1,
  },
  pickerDividerColumnText: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(16),
    color: '#1a1a1a',
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
