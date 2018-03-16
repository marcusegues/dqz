// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { pickerModalStyle } from '../../Modals/styles/PickerModal';
import { TextInputWrapper } from '../../Input/TextInputWrapper';
import { PickerUnitColumn } from '../../Modals/QuantityInputModal/subComponents/PickerUnitColumn';

type ManualInputPickerProps = {
  value: string,
  onChangeText: (text: string) => void,
  unit: string,
};

export const ManualInputPicker = ({
  value,
  onChangeText,
  unit,
}: ManualInputPickerProps) => (
  <View style={pickerModalStyle.textInputContainer}>
    <TextInputWrapper onChangeText={onChangeText} value={value} focus />
    <PickerUnitColumn unit={unit} style={{ flex: 0.3 }} />
  </View>
);
