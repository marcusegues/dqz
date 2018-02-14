// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import type { Children } from '../../types/generalTypes';
import { rowContainerStyles } from './styles/rowStyles';

type RowProps = {
  borderTop?: boolean,
  borderBottom?: boolean,
  width: string,
  onLayout?: any => void,
  children: Children,
  styles?: Object,
};

export const Row = ({
  borderTop,
  borderBottom,
  width,
  onLayout = () => {},
  children,
  styles,
}: RowProps) => (
  <View
    style={[
      rowContainerStyles(borderTop, borderBottom, width ? width : '95%'),
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
  width: '95%',
  onLayout: () => {},
  styles: {},
};
