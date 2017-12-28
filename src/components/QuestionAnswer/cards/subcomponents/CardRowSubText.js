import React from 'react';
import { Text } from 'react-native';
import { moderateScale } from '../../../../styles/Scaling';

const CardRowSubText = ({ text }) => (
  <Text
    style={{
      fontFamily: 'roboto_regular',
      fontSize: moderateScale(12),
      color: '#898989',
    }}
  >
    {text}
  </Text>
);

export default CardRowSubText;