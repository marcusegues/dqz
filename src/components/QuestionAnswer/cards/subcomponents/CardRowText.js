// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
import { moderateScale } from '../../../../styles/Scaling';

type CardRowTextProps = {
  text: string,
  style?: {}, // TODO
};

const CardRowText = ({ text, style }: CardRowTextProps) => (
  <Text
    style={{
      fontFamily: 'roboto_medium',
      fontSize: moderateScale(14),
      color: '#24253D',
      ...style,
    }}
  >
    {text}
  </Text>
);

CardRowText.defaultProps = {
  style: {},
};

export default CardRowText;
