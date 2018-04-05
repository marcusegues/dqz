// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { GREY_BAR } from '../../styles/colors';

export const GreyBar = () => (
  <View
    style={{
      width: 8,
      height: 4,
      alignSelf: 'flex-end',
      right: 24,
      backgroundColor: GREY_BAR,
    }}
  />
);
