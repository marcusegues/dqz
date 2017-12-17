import React from 'react';
import { Animated, Platform } from 'react-native';
import { verticalScale } from '../../styles/Scaling';

const BottomTopModal = ({ positionTop, children }) => (
  <Animated.View
    style={{
      position: 'absolute', // Bind opacity to animated value
      top: positionTop,
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: verticalScale(16),
      backgroundColor: '#fff',
      width: '100%',
      height: '100%',
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
  </Animated.View>
);

export default BottomTopModal;
