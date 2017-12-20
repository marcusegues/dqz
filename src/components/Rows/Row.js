import React from 'react';
import { View } from 'react-native';

const quantityRowContainerStyles = borderTop => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  borderBottomWidth: 1,
  borderColor: '#E0E0E1',
  paddingVertical: 8,
  paddingHorizontal: 12,
  marginHorizontal: 4,
  borderTopWidth: borderTop ? 1 : 0,
});

const Row = ({ borderTop = false, children }) => (
  <View style={quantityRowContainerStyles(borderTop)}>{children}</View>
);

export default Row;
