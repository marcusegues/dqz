// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import type { Children } from '../../types/generalTypes';
import { collapsibleRowStyles, rowContainerStyles } from './styles/rowStyles';

type RowProps = {
  borderTop?: boolean,
  borderBottom?: boolean,
  onLayout?: any => void,
  children: Children,
  styles?: Object,
};

export const Row = ({
  borderTop,
  borderBottom,
  onLayout = () => {},
  children,
  styles,
}: RowProps) => (
  <View
    style={[rowContainerStyles(borderTop, borderBottom), styles]}
    onLayout={event => onLayout(event)}
  >
    {children}
  </View>
);

Row.defaultProps = {
  borderTop: false,
  borderBottom: true,
  styles: {},
};
