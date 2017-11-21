import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';

import { scale, verticalScale, moderateScale } from '../../../styles/Scaling';
import styles from './MenuTileComponentStyles';

const MenuTileComponent = props => (
  <Touchable style={styles.container} background={Touchable.Ripple('#0A5287')}>
    <View style={styles.contentContainer}>
      <MaterialIcons
        name={props.icon}
        size={moderateScale(65)}
        color="#006699"
      />
      <Text style={styles.text}>
        {props.text}
        {props.children}
      </Text>
    </View>
  </Touchable>
);

export default MenuTileComponent;
