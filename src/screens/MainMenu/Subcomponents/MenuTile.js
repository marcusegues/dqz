// @flow
import React from 'react';
// $FlowFixMe
import { View, Text } from 'react-native';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';

import { menuTileStyle } from '../styles/MenuTileStyles';
import { globalStyles } from '../../../styles/globalStyles';

type MenuTileProps = {
  text: string,
  children: any,
  onPress: () => void,
};

export const MenuTile = ({ text, children, onPress }: MenuTileProps) => (
  <Touchable
    onPress={onPress}
    style={[menuTileStyle.container, globalStyles.boxShadow]}
    background={Touchable.Ripple('#9B9B9B')}
    activeOpacity={1}
  >
    <View style={menuTileStyle.contentContainer}>
      {children}
      <Text style={menuTileStyle.text}>{text}</Text>
    </View>
  </Touchable>
);
