// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
import { moderateScale } from '../../../styles/Scaling';

export const HeaderTitle = ({ text }: { text: string }) => (
  <Text
    style={{
      fontSize: moderateScale(18),
      color: '#1A1A1A',
      fontFamily: 'roboto_regular',
    }}
  >
    {text}
  </Text>
);
