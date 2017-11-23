import React from 'react';
import { Text } from 'react-native';

const MainScreenHeaderTitle = () => (
  <Text
    style={{
      fontSize: 24,
      color: '#1A1A1A',
      fontFamily: 'roboto_bold',
    }}
  >
    We
    <Text
      style={{
        fontSize: 24,
        color: '#1A1A1A',
        fontFamily: 'roboto_regular',
        fontWeight: '300',
      }}
    >
      Declare
    </Text>
  </Text>
);

export default MainScreenHeaderTitle;
