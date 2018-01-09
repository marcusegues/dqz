// @flow
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { MAIN_RED } from '../../../styles/colors';

type BackArrowProps = {
  onPress: () => void,
};

export const BackArrow = ({ onPress }: BackArrowProps) => (
  <Touchable onPress={onPress}>
    <Ionicons name="md-arrow-back" size={32} color={MAIN_RED} />
  </Touchable>
);
