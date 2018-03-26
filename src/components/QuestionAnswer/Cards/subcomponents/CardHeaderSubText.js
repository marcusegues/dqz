// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
import { GREY } from '../../../../styles/colors';
import { verticalScale } from '../../../../styles/Scaling';

type CardHeaderSubTextProps = {
  text: string | Object,
  style?: Object,
};

export const CardHeaderSubText = ({ text, style }: CardHeaderSubTextProps) => (
  <Text
    style={{
      fontFamily: 'roboto_regular',
      fontSize: 14,
      color: GREY,
      paddingHorizontal: verticalScale(16),
      ...style,
    }}
  >
    {text}
  </Text>
);

CardHeaderSubText.defaultProps = {
  style: {},
};
