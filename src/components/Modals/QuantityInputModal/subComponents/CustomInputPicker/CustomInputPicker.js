// @flow
import React from 'react';
// $FlowFixMe
import { View, Picker } from 'react-native';
import { rangeItemsPicker } from '../../pickerData';
import { pickerModalStyle } from '../../../styles/PickerModal';
import { PickerComponent } from '../../../../PickerComponent/PickerComponent';
import { PickerUnitColumn } from '../PickerUnitColumn';

type CustomInputPickerProps = {
  wholePart: string,
  unit: string,
  onWholePartValueChange: (text: string) => void,
};

export const CustomInputPicker = ({
  wholePart,
  unit,
  onWholePartValueChange,
}: CustomInputPickerProps) => {
  return (
    <View style={pickerModalStyle.pickerContainer}>
      <PickerComponent
        selectedValue={wholePart}
        onValueChange={onWholePartValueChange}
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
