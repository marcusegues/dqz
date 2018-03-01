// @flow
import React from 'react';
// $FlowFixMe
import { TextInput } from 'react-native';
import { pickerModalStyle } from '../../styles/PickerModal';

export const PickerTextInput = ({ onChangeText, value }) => {
  return (
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
};
