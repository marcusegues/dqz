// @flow
import React from 'react';
// $FlowFixMe
import { View, Picker } from 'react-native';
import { amountsPicker, rangeItemsPicker } from '../../Modals/QuantityInputModal/pickerData';
import { pickerModalStyle } from '../../Modals/styles/PickerModal';
import { PickerComponent } from '../PickerComponent';
import { PickerValueSeparator } from '../../Modals/CurrencyPickerModal/subComponents/PickerValueSeparator';
import { PickerUnitColumn } from '../../Modals/QuantityInputModal/subComponents/PickerUnitColumn';
import type { Category } from '../../../model/types/basketPeopleAmountsTypes';

type StandardInputPickerProps = {
  multiplier: string,
  amount: string,
  category: Category,
  unit: string,
  onMultiplierValueChange: (text: string) => void,
  onAmountValueChange: (text: string) => void,
};

export const StandardInputPicker = ({
  multiplier,
  amount,
  category,
  unit,
  onMultiplierValueChange,
  onAmountValueChange,
}: StandardInputPickerProps) => {
  return (
    <View style={pickerModalStyle.pickerContainer}>
      <PickerComponent
        selectedValue={multiplier}
        onValueChange={onMultiplierValueChange}
        mode="dropdown"
        prompt=""
        itemStyle={{}}
      >
        {rangeItemsPicker(1, 100, 1).map(i => (
          <Picker.Item key={i.id} label={i.label} value={i.value} />
        ))}
      </PickerComponent>

      <PickerValueSeparator separator="X" />

      <PickerComponent
        selectedValue={amount}
        onValueChange={onAmountValueChange}
        style={{}}
        mode="dropdown"
        prompt=""
        itemStyle={{}}
      >
        {amountsPicker(category).map(i => (
          <Picker.Item key={i.id} label={i.label} value={i.value} />
        ))}
      </PickerComponent>

      <PickerUnitColumn unit={unit} />
    </View>
  );
};
