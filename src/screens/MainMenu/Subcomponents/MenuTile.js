import React from 'react';
import { View, Text } from 'react-native';
import Touchable from 'react-native-platform-touchable';

import ownStyles from '../styles/MenuTileStyles';
import globalStyles from '../../../styles/globalStyles';

const MenuTile = ({ text, children, onPress }) => (
  <Touchable
    onPress={onPress}
    style={[ownStyles.container, globalStyles.boxShadow]}
    background={Touchable.Ripple('#9B9B9B')}
    activeOpacity={1}
  >
    <View style={ownStyles.contentContainer}>
      {children}
      <Text style={ownStyles.text}>{text}</Text>
    </View>
  </Touchable>
);

export default MenuTile;
