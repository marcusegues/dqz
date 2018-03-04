// @flow
import React from 'react';
// $FlowFixMe
import { View, Picker } from 'react-native';
import { rangeItemsPicker } from '../../Modals/QuantityInputModal/pickerData';
import { pickerModalStyle } from '../../Modals/styles/PickerModal';
import { PickerComponent } from '../PickerComponent';
import { PickerUnitColumn } from '../../Modals/QuantityInputModal/subComponents/PickerUnitColumn';

type CustomInputPickerProps = {
  wholePart: string,
  unit: string,
  onCustomWholePartValueChange: (text: string) => void,
};

export const CustomInputPicker = ({
  wholePart,
  unit,
  onCustomWholePartValueChange,
}: CustomInputPickerProps) => {
  return (
    <View style={pickerModalStyle.pickerContainer}>
      <PickerComponent
        selectedValue={wholePart}
        onValueChange={onCustomWholePartValueChange}
        mode="dropdown"
        prompt=""
      >
        {rangeItemsPicker(1, 100, 1).map(i => (
          <Picker.Item key={i.id} label={i.label} value={i.value} />
        ))}
      </PickerComponent>

      <PickerUnitColumn unit={unit} />
    </View>
  );
};
