import React from 'react';
import { Text } from 'react-native';
import { verticalScale } from '../../../../styles/Scaling';

const CardHeaderText = ({ text }) => (
  <Text
    style={{
      fontFamily: 'roboto_regular',
      fontSize: 24, // Should we use scaling here? They're breaking the design.
      lineHeight: verticalScale(32),
      color: '#141414',
      marginHorizontal: verticalScale(16),
    }}
  >
    {text}
  </Text>
);

export default CardHeaderText;
