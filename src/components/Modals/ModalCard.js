// @flow
import React from 'react';
// $FlowFixMe
import { Platform, View } from 'react-native';
import { verticalScale } from '../../styles/Scaling';

type ModalCardProps = {
  children: any, // TODO (see list in GoodQuantityListModal)
};

export const ModalCard = ({ children }: ModalCardProps) => (
  <View
    style={{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: verticalScale(32),
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
