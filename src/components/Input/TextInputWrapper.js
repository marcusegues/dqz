// @flow
import React from 'react';
// $FlowFixMe
import { TextInput } from 'react-native';
import { pickerModalStyle } from '../Modals/styles/PickerModal';

type TextInputWrapperProps = {
  onChangeText: (text: string) => void,
  value: string,
};

export const TextInputWrapper = ({
  onChangeText,
  value,
}: TextInputWrapperProps) => (
    <TextInput
      keyboardType="numeric"
      maxLength={5}
      underlineColorAndroid="transparent"
      blurOnSubmit
      style={[pickerModalStyle.textInput, { alignSelf: 'center' }]}
      onChangeText={onChangeText}
      value={value}
    />
  );
