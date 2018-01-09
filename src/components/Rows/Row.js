// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';

type RowProp = {
  borderTop?: boolean,
  children: any,
};

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

export const Row = ({ borderTop, children }: RowProp) => (
  <View style={quantityRowContainerStyles(borderTop)}>{children}</View>
);

Row.defaultProps = {
  borderTop: false,
};
