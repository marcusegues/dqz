// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
import { moderateScale } from '../../../styles/Scaling';
import { type } from '../../../styles/fonts';
import { MAIN_BLACK } from '../../../styles/colors';

type FormattedTextProps = {
  text: string,
  bold?: boolean,
  style?: {},
};

export const FormattedText = ({ text, style, bold }: FormattedTextProps) => (
  <Text
    style={{
      color: MAIN_BLACK,
      fontFamily: bold ? type.bold : type.light,
      lineHeight: moderateScale(21),
      ...style,
    }}
  >
    {text}
  </Text>
);

FormattedText.defaultProps = {
  style: {},
  bold: false,
};
