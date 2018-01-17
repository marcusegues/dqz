// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import type { Children } from '../../types/generalTypes';

type RowProp = {
  borderTop?: boolean,
  children: Children,
};

const quantityRowContainerStyles = borderTop => ({
  flex: 1,
  width: '95%',
  alignSelf: 'center',
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
