import React from 'react';
import { Text } from 'react-native';
import { verticalScale } from '../../../../styles/Scaling';
import { GREY } from '../../../../styles/colors';

const CardHeaderSubText = ({ text }) => (
  <Text
    style={{
      fontFamily: 'roboto_regular',
      fontSize: 14, // Should we use scaling here? They're breaking the design.
      color: GREY,
      marginHorizontal: verticalScale(16),
    }}
  >
    {text}
  </Text>
);

export default CardHeaderSubText;
