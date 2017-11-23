import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';
import { MAIN_RED } from '../../../styles/colors';

export default (BackArrow = ({ navigation }) => (
  <Touchable onPress={() => navigation.goBack()}>
    <Ionicons name={`md-arrow-back`} size={32} color={MAIN_RED} />
  </Touchable>
));
