// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
import { moderateScale } from '../../../styles/Scaling';

type ReceiptSubTextProps = {
  text: string,
  style?: Object,
};

export const ReceiptSubText = ({ text, style }: ReceiptSubTextProps) => (
  <Text
    style={{
      color: '#757575',
      fontFamily: 'roboto_light',
      fontSize: moderateScale(14),
      paddingBottom: moderateScale(3),
      ...style,
    }}
  >
    {text}
  </Text>
);

ReceiptSubText.defaultProps = {
  style: {},
};
