import React from 'react';
import { View, Text } from 'react-native';
import Touchable from 'react-native-platform-touchable';

import styles from './MenuTileComponentStyles';

const MenuTileComponent = ({ text, children, onPress }) => (
  <Touchable
    onPress={onPress}
    style={styles.container}
    background={Touchable.Ripple('#9B9B9B')}
    activeOpacity={1}
  >
    <View style={styles.contentContainer}>
      {children}
      <Text style={styles.text}>{text}</Text>
    </View>
  </Touchable>
);

export default MenuTileComponent;
