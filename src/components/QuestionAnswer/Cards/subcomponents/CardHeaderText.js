// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
import { verticalScale } from '../../../../styles/Scaling';

type CardHeaderTextProps = {
  text: string,
};

export const CardHeaderText = ({ text }: CardHeaderTextProps) => (
  <Text
    style={{
      fontFamily: 'roboto_regular',
      fontSize: 24, // Should we use scaling here? They're breaking the design.
      lineHeight: verticalScale(32),
      color: '#141414',
    }}
  >
    {text}
  </Text>
);
