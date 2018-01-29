// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import type { Children } from '../../types/generalTypes';

type RowProp = {
  borderTop?: boolean,
  borderBottomNone?: boolean,
  children: Children,
};

const quantityRowContainerStyles = (borderTop, borderBottomNone) => ({
  width: '95%',
  alignSelf: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  borderBottomWidth: borderBottomNone ? 0 : 1,
  borderColor: '#E0E0E1',
  paddingVertical: 8,
  paddingHorizontal: 12,
  marginHorizontal: 4,
  borderTopWidth: borderTop ? 1 : 0,
});

export const Row = ({ borderTop, borderBottomNone, children }: RowProp) => (
  <View style={quantityRowContainerStyles(borderTop, borderBottomNone)}>
    {children}
  </View>
);

Row.defaultProps = {
  borderTop: false,
  borderBottomNone: false,
};
