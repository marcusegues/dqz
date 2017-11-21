import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';

const MenuTileComponent = ({ text, icon, children }) => (
  <Touchable style={styles.container} background={Touchable.Ripple('#9B9B9B')}>
    <View style={styles.contentContainer}>
      {/*<MaterialIcons name={icon} size={moderateScale(40)} color="#9B9B9B" />*/}
      {/*<MaterialCommunityIcons name="calculator" size={40} color="#9B9B9B" />*/}
      {children}
      <Text style={styles.text}>{text}</Text>
    </View>
  </Touchable>
);
import { scale, verticalScale, moderateScale } from '../../../styles/Scaling';

import styles from './MenuTileComponentStyles';

export default MenuTileComponent;
