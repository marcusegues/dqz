import React from 'react';
import { Text } from 'react-native';
import { moderateScale } from '../../../styles/Scaling';

const ReceiptSubText = ({ text, style }) => (
  <Text
    style={{
      color: '#757575',
      fontFamily: 'roboto_light',
      fontSize: moderateScale(14),
      ...style,
    }}
  >
    {text}
  </Text>
);

export default ReceiptSubText;
