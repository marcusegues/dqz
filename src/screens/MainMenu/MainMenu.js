import React from 'react';
import { translate } from 'react-i18next';
import { View, Text, Image } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import MenuTile from './Subcomponents/MenuTile';
import ownStyles from './styles/MainMenuStyles';
import { moderateScale } from '../../styles/Scaling';
import { GREY } from '../../styles/colors';
import AppTitle from '../../components/AppTitle/AppTitle';

const switzerland = require('../../../assets/images/Swiss_Country.png');

const MainMenu = ({ navigation }) => (
  <View style={ownStyles.mainContainer}>
    <View style={ownStyles.topContainer}>
      <Image source={switzerland} style={ownStyles.backgroundImage} />
      <View style={ownStyles.logoAndTitleContainer}>
        <AppTitle />
      </View>
    </View>
    <View style={ownStyles.bottomContainer}>
      <MenuTile
        onPress={() => navigation.navigate('QuestionAnswer')}
        text="WAREN DEKLARIEREN"
      >
        <MaterialIcons
          name="add-shopping-cart"
          size={moderateScale(47)}
          color={GREY}
        />
      </MenuTile>

      <MenuTile
        text="ZOLL-RECHNER"
        onPress={() => navigation.navigate('UnderConstruction')}
      >
        <MaterialCommunityIcons name="calculator" size={47} color={GREY} />
      </MenuTile>

      <MenuTile
        icon="receipt"
        text="ZOLL-BELEGE"
        onPress={() => navigation.navigate('UnderConstruction')}
        style={{ alignSelf: 'center' }}
      >
        <View>
          <MaterialIcons name="receipt" size={moderateScale(47)} color={GREY} />
          <View style={ownStyles.redBadge}>
            <Text style={ownStyles.redBadgeText}>1</Text>
          </View>
        </View>
      </MenuTile>

      <MenuTile
        icon="info"
        text="WISSENSWERTES"
        onPress={() => navigation.navigate('UnderConstruction')}
      >
        <MaterialIcons name="info" size={moderateScale(47)} color={GREY} />
      </MenuTile>
    </View>
  </View>
);

export default translate(['general', 'mainMenu'])(MainMenu);
