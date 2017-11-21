import React from 'react';
import { View, Text, Image } from 'react-native';

import MenuTileComponent from './Subcomponents/MenuTileComponent';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './MainMenuStyles';
import { scale, verticalScale, moderateScale } from '../../styles/Scaling';
import { Badge } from 'native-base';

const MainMenu = () => (
  <View style={styles.container}>
    <View style={styles.backgroundImageContainer}>
      <Image
        source={require('../../../assets/images/background-mountains3.jpg')}
        style={styles.backgroundImage}
        resizeMode="contain"
      />
    </View>
    <View style={styles.contentContainer}>
      <View style={styles.tileContainer}>
        <MenuTileComponent text="WAREN DEKLARIEREN">
          <MaterialIcons
            name="add-shopping-cart"
            size={moderateScale(47)}
            color="#9B9B9B"
          />
        </MenuTileComponent>

        <MenuTileComponent icon="receipt" text="MEINE QUITTUNGEN">
          <View style={styles.iconAndBadgeWrapper}>
            <MaterialIcons
              name="receipt"
              size={moderateScale(47)}
              color="#9B9B9B"
            />
            <View style={styles.redBadge}>
              <Text style={styles.badgeValue}>2</Text>
            </View>
          </View>
        </MenuTileComponent>

        <MenuTileComponent text="ZOLL-RECHNER">
          <MaterialCommunityIcons name="calculator" size={47} color="#9B9B9B" />
        </MenuTileComponent>

        <MenuTileComponent icon="info" text="NÜTZLICHE INFOS">
          <MaterialIcons name="info" size={moderateScale(47)} color="#9B9B9B" />
        </MenuTileComponent>

        <MenuTileComponent icon="shopping-cart" text="GESPEICHERTE WARENKÖRBE">
          <View style={styles.iconAndBadgeWrapper}>
            <MaterialIcons
              name="shopping-cart"
              size={moderateScale(47)}
              color="#9B9B9B"
            />
            <View style={styles.redBadge}>
              <Text style={styles.badgeValue}>2</Text>
            </View>
          </View>
        </MenuTileComponent>

        <MenuTileComponent text="EINSTELLUNGEN">
          <MaterialIcons
            name="settings"
            size={moderateScale(47)}
            color="#9B9B9B"
          />
        </MenuTileComponent>
      </View>
    </View>
  </View>
);

export default MainMenu;
