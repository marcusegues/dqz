// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { moderateScale } from '../../styles/Scaling';

export const RightChevronIcon = () => (
  <View style={{ alignSelf: 'center' }}>
    <Entypo name="chevron-right" size={moderateScale(25)} color="#24253D" />
  </View>
);
