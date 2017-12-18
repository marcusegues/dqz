import React from 'react';
import { Platform, View } from 'react-native';
import { verticalScale } from '../../styles/Scaling';

const ModalCard = ({ children }) => (
  <View
    style={{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      marginHorizontal: 16,
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

export default ModalCard;
