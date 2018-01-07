// @flow
import React from 'react';
// $FlowFixMe
import { Platform, View } from 'react-native';
import { verticalScale } from '../../../styles/Scaling';

export const Card = ({ children }: { children: any }) => (
  <View
    style={{
      flex: 1,
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: verticalScale(16),
      marginBottom: verticalScale(16),
      backgroundColor: '#fff',
      borderRadius: 2,
      borderColor: '#ddd',
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { height: 5, width: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
        },
        android: {
          elevation: 6,
        },
      }),
    }}
  >
    {children}
  </View>
);
