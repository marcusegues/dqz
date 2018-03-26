// @flow
import React from 'react';
// $FlowFixMe
import { TextInput } from 'react-native';
import { pickerModalStyle } from '../Modals/styles/PickerModal';

type TextInputWrapperProps = {
  onChangeText: (text: string) => void,
  value: string,
  focus: boolean,
};

export class TextInputWrapper extends React.Component<TextInputWrapperProps> {
  componentDidMount() {
    if (this.props.focus) {
      this.textInput.focus();
    }
  }

  textInput: any;

  render() {
    const { onChangeText, value } = this.props;
    return (
      <TextInput
        keyboardType="numeric"
        maxLength={8}
        underlineColorAndroid="transparent"
        blurOnSubmit
        style={[pickerModalStyle.textInput, { alignSelf: 'center' }]}
        onChangeText={onChangeText}
        value={value}
        // eslint-disable-next-line no-return-assign
        ref={textInput => (this.textInput = textInput)}
      />
    );
  }
}
