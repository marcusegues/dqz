// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
import { moderateScale } from '../../../../styles/Scaling';

type CardRowSubTextProps = {
  text: string,
  style?: {},
};

export const CardRowSubText = ({ text, style }: CardRowSubTextProps) => (
  <Text
    style={{
      fontFamily: 'roboto_regular',
      fontSize: moderateScale(12),
      color: '#898989',
      ...style,
    }}
  >
    {text}
  </Text>
);

CardRowSubText.defaultProps = {
  style: {},
};
