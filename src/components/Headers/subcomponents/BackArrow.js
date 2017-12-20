import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';
import { MAIN_RED } from '../../../styles/colors';

const BackArrow = ({ onPress }) => (
  <Touchable onPress={onPress}>
    <Ionicons name="md-arrow-back" size={32} color={MAIN_RED} />
  </Touchable>
);

export default BackArrow;
