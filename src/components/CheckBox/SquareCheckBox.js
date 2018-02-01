// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { moderateScale } from '../../styles/Scaling';

export const SquareCheckBox = ({ checked }: { checked: boolean }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    {checked ? (
      <MaterialCommunityIcons
        name="checkbox-marked"
        size={moderateScale(25)}
        color="#4A4A4A"
      />
    ) : (
      <MaterialCommunityIcons
        name="checkbox-blank-outline"
        size={moderateScale(25)}
        color="#4A4A4A"
      />
    )}
  </View>
);
