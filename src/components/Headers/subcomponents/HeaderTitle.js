import React from 'react';

import { Text } from 'react-native';

const HeaderTitle = ({ text }) => (
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

export default HeaderTitle;
