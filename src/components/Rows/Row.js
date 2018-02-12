// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import type { Children } from '../../types/generalTypes';

type RowProps = {
  borderTop?: boolean,
  borderBottom?: boolean,
  children: Children,
  styles?: Object,
};

export const rowContainerStyles = (
  borderTop?: boolean,
  borderBottom?: boolean
) => ({
  width: '95%',
  alignSelf: 'center',
  borderBottomWidth: borderBottom ? 1 : 0,
  borderColor: '#E0E0E1',
  paddingVertical: 8,
  paddingHorizontal: 12,
  borderTopWidth: borderTop ? 1 : 0,
});

export const Row = ({
  borderTop,
  borderBottom,
  children,
  styles,
}: RowProps) => (
  <View style={[rowContainerStyles(borderTop, borderBottom), styles]}>
    {children}
  </View>
);

Row.defaultProps = {
  borderTop: false,
  borderBottom: true,
  styles: {},
};
