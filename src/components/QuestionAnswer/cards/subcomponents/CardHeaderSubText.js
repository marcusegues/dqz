import React from 'react';
import { Text } from 'react-native';
import { GREY } from '../../../../styles/colors';

const CardHeaderSubText = ({ text }) => (
  <Text
    style={{
      fontFamily: 'roboto_regular',
      fontSize: 14, // Should we use scaling here? They're breaking the design.
      color: GREY,
    }}
  >
    {text}
  </Text>
);

export default CardHeaderSubText;
