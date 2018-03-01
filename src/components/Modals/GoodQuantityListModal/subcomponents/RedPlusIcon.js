// @flow
import React from 'react';
// $FlowFixMe
import { TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { MAIN_RED } from '../../../../styles/colors';
import { moderateScale } from '../../../../styles/Scaling';

type RedPlusIconProps = {
  onPress: () => void,
};

export const RedPlusIcon = ({ onPress }: RedPlusIconProps) => (
  <TouchableOpacity onPress={onPress}>
    <Entypo name="circle-with-plus" size={moderateScale(36)} color={MAIN_RED} />
  </TouchableOpacity>
);
