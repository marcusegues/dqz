import React from 'react';
import { Text } from 'react-native';
import { GREY } from '../../../../styles/colors';
import { verticalScale } from '../../../../styles/Scaling';

const CardHeaderSubText = ({ text, style }) => (
  <Text
    style={{
      fontFamily: 'roboto_regular',
      fontSize: 14, // Should we use scaling here? They're breaking the design.
      color: GREY,
      marginHorizontal: verticalScale(16),
      ...style,
    }}
  >
    {text}
  </Text>
);

export default CardHeaderSubText;
