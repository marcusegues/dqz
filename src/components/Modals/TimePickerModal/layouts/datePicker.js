// @flow
import React from 'react';
// $FlowFixMe
import { Picker, Platform } from 'react-native';
import { PickerComponent } from '../../../Pickers/PickerComponent';
import { pickerDates } from '../../QuantityInputModal/pickerData';

export const DatePicker = ({
  date,
  onValueChange,
}: {
  date: string,
  onValueChange: (val: string) => void,
}) => (
  <PickerComponent
    selectedValue={date}
    onValueChange={onValueChange}
    mode="dropdown"
    prompt=""
    itemStyle={{}}
    style={{
      flex: Platform.OS === 'ios' ? 0.4 : 0.45,

      paddingVertical: 10,
    }}
  >
    {pickerDates.map(i => (
      <Picker.Item key={i.id} label={i.label} value={i.value} />
    ))}
  </PickerComponent>
);
