// @flow
import React from 'react';
// $FlowFixMe
import { Picker, View } from 'react-native';
import type { Children } from '../../types/generalTypes';

const ownStyles = {
  pickerColumn: {
    flex: 0.25,
  },
};

type PickerComponentProps = {
  selectedValue: string,
  onValueChange: (text: string) => void,
  prompt: string,
  children: Children,
  itemStyle?: {},
  style?: {},
};

export const PickerComponent = ({
  selectedValue,
  onValueChange,
  prompt,
  children,
  itemStyle,
  style,
}: PickerComponentProps) => (
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

PickerComponent.defaultProps = {
  style: {},
  itemStyle: {},
};
