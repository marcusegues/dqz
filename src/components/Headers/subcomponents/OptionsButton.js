import React from 'react';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';

const OptionsButton = () => (
  <Touchable
    onPress={() => {
      // navigation.navigate('DrawerToggle');
    }}
  >
    <Ionicons name="ios-menu" size={30} />
  </Touchable>
);

export default OptionsButton;
