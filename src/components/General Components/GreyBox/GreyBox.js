// @flow
import React from 'react';
// $FlowFixMe
import { View, StyleSheet } from 'react-native';

const ownStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#E0E0E1',
    borderRadius: 3,
  },
});

type QuantityIconProps = {
  children: any,
};

export const GreyBox = ({ children }: QuantityIconProps) => (
  <View style={ownStyles.container}>{children}</View>
);
