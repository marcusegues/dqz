// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { RedButton } from '../../../Buttons/RedButton';
import { pickerModalStyle } from '../../styles/PickerModal';

type QuantityInputModalFooterProps = {
  onPress: () => void,
  text: string,
};

export const QuantityInputModalFooter = ({
  onPress,
  text,
}: QuantityInputModalFooterProps) => (
  <View style={pickerModalStyle.redButtonWrapper}>
    <RedButton onPress={onPress} text={text} />
  </View>
);
