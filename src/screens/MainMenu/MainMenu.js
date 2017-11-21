import React from 'react';
import { View, Text, Image } from 'react-native';

import MenuTileComponent from './Subcomponents/MenuTileComponent';
import styles from './MainMenuStyles';

const MainMenu = props => (
  <View style={styles.container}>
    <View style={styles.backgroundImageContainer}>
      <Image
        source={require('../../../assets/images/background-mountains.png')}
        style={styles.backgroundImage}
        resizeMode="contain"
      />
    </View>
    <View style={styles.contentContainer}>
      <Text style={styles.mainMenuTitle}>Main menu:</Text>
      <View style={styles.tileContainer}>
        <MenuTileComponent icon="add-shopping-cart" text="DECLARE GOODS" />
        <MenuTileComponent icon="receipt" text="YOUR RECEIPTS">
          <Text>(2)</Text>
        </MenuTileComponent>

        <MenuTileComponent icon="note-add" text="QUOTA CALCULATOR" />
        <MenuTileComponent icon="info" text="ABOUT THE APP" />
      </View>
    </View>
  </View>
);

export default MainMenu;
