// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import type { Children } from '../../types/generalTypes';

type MainContentContainerProps = {
  children: Children,
};

export const MainContentContainer = ({
  children,
}: MainContentContainerProps) => (
  <View
    style={{
      flex: 1,
      height: '100%',
      marginHorizontal: 16,
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    {children}
  </View>
);
