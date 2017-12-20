import React from 'react';
import { Text } from 'react-native';
import { moderateScale, verticalScale } from '../../../../styles/Scaling';
import { GREY } from '../../../../styles/colors';

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
