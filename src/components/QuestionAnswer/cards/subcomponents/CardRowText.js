import React from 'react';
import { Text } from 'react-native';
import { moderateScale } from '../../../../styles/Scaling';

const CardRowText = ({ text, style }) => (
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

export default CardRowText;
