// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';

export const HeaderTitle = ({ text }: { text: string }) => (
  <Text
    style={{
      fontSize: 18,
      color: '#1A1A1A',
      fontFamily: 'roboto_regular',
    }}
  >
    {text}
  </Text>
);
