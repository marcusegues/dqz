import React from 'react';
import { Picker, View } from 'react-native';

const ownStyles = {
  pickerColumn: {
    flex: 0.25,
  },
};

const PickerComponent = ({
  selectedValue,
  onValueChange,
  prompt,
  children,
  itemStyle,
  style,
}) => (
  <View style={[ownStyles.pickerColumn, { ...style }]}>
    <Picker
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      mode="dropdown"
      prompt={prompt}
      itemStyle={itemStyle}
    >
      {children}
    </Picker>
  </View>
);

export default PickerComponent;
