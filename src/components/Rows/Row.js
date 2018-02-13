// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import type { Children } from '../../types/generalTypes';
import { rowContainerStyles } from './styles/rowStyles';

type RowProps = {
  borderTop?: boolean,
  borderBottom?: boolean,
  fullWidth?: boolean,
  onLayout?: any => void,
  children: Children,
  styles?: Object,
};

export const Row = ({
  borderTop,
  borderBottom,
  fullWidth,
  onLayout = () => {},
  children,
  styles,
}: RowProps) => (
  <View
    style={[
      rowContainerStyles(borderTop, borderBottom, fullWidth ? '100%' : '95%'),
      styles,
    ]}
    onLayout={event => onLayout(event)}
  >
    {children}
  </View>
);

Row.defaultProps = {
  borderTop: false,
  borderBottom: true,
  fullWidth: false,
  onLayout: () => {},
  styles: {},
};
