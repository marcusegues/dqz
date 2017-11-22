import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as colors from '../../styles/colors';
import Touchable from 'react-native-platform-touchable';

export default (BackArrow = ({ navigation }) => (
  <Touchable onPress={() => navigation.goBack()}>
    <Ionicons name={`md-arrow-back`} size={32} color={colors.MAIN_RED} />
  </Touchable>
));
