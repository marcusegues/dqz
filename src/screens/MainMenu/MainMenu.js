import React from 'react';
import { View, Text, Image } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import MenuTileComponent from './Subcomponents/MenuTileComponent';

import styles from './MainMenuStyles';
import { moderateScale } from '../../styles/Scaling';

const mountains = require('../../../assets/images/background-mountains3.jpg');

const MainMenu = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.backgroundImageContainer}>
      <Image
        source={mountains}
        style={styles.backgroundImage}
        resizeMode="contain"
      />
    </View>
    <View style={styles.contentContainer}>
      <View style={styles.tileContainer}>
        <MenuTileComponent
          onPress={() => navigation.navigate('QuestionAnswer')}
          text="WAREN DEKLARIEREN"
        >
          <MaterialIcons
            name="add-shopping-cart"
            size={moderateScale(47)}
            color="#9B9B9B"
          />
        </MenuTileComponent>

        <MenuTileComponent
          icon="receipt"
          text="MEINE QUITTUNGEN"
          onPress={() => navigation.navigate('UnderConstruction')}
        >
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

        <MenuTileComponent
          text="ZOLL-RECHNER"
          onPress={() => navigation.navigate('UnderConstruction')}
        >
          <MaterialCommunityIcons name="calculator" size={47} color="#9B9B9B" />
        </MenuTileComponent>

        <MenuTileComponent
          icon="info"
          text="NÜTZLICHE INFOS"
          onPress={() => navigation.navigate('UnderConstruction')}
        >
          <MaterialIcons name="info" size={moderateScale(47)} color="#9B9B9B" />
        </MenuTileComponent>

        <MenuTileComponent
          icon="shopping-cart"
          text="GESPEICHERTE WARENKÖRBE"
          onPress={() => navigation.navigate('UnderConstruction')}
        >
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

        <MenuTileComponent
          text="EINSTELLUNGEN"
          onPress={() => navigation.navigate('UnderConstruction')}
        >
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
