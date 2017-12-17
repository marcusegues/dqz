import React from 'react';
import Touchable from 'react-native-platform-touchable';
import { Animated, Platform, Text } from 'react-native';
import { verticalScale } from '../../../styles/Scaling';

const GoodQuantityListModal = ({ positionTop, onHideQuantityInputModal }) => (
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
      <Text>Text</Text>
      <Touchable onPress={onHideQuantityInputModal}>
        <Text>Hide</Text>
      </Touchable>
    </Animated.View>
  );

export default GoodQuantityListModal;
