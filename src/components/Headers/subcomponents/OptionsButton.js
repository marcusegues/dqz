// @flow
import React from 'react';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import type { Navigation } from '../../../types/generalTypes';

export const OptionsButton = ({ navigation }: { navigation: Navigation }) => (
  <Touchable
    onPress={() => {
      navigation.navigate('UnderConstruction');
    }}
  >
    <Ionicons name="ios-menu" size={30} />
  </Touchable>
);
