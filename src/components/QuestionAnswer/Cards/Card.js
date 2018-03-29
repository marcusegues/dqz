// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import type { Children } from '../../../types/generalTypes';
import { globalStyles } from '../../../styles/globalStyles';

export const Card = ({ children }: { children: Children }) => (
  <View
    style={[
      globalStyles.boxShadow,
      {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 2,
        borderColor: '#ddd',
      },
    ]}
  >
    {children}
  </View>
);
