// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MenuTile } from './Subcomponents/MenuTile';
import { mainMenuStyles } from './styles/MainMenuStyles';
import { moderateScale } from '../../styles/Scaling';
import { GREY } from '../../styles/colors';
import { AppTitle } from '../../components/AppTitle/AppTitle';
import type { Navigation, TFunction } from '../../types/generalTypes';

const switzerland = require('../../../assets/images/Swiss_Country.png');
const greyLogo = require('../../../assets/images/grey_logo.png');

type MainMenuProps = {
  navigation: Navigation,
};

const MainMenuInner = ({ navigation, t }: MainMenuProps & { t: TFunction }) => (
  <View style={mainMenuStyles.mainContainer}>
    <View style={mainMenuStyles.topContainer}>
      <Image source={switzerland} style={mainMenuStyles.backgroundImage} />
      <View style={mainMenuStyles.logoAndTitleContainer}>
        <AppTitle />
      </View>
    </View>
    <View style={mainMenuStyles.bottomContainer}>
      <MenuTile
        onPress={() => navigation.navigate('QuestionAnswer')}
        text={t('declareGoods').toUpperCase()}
      >
        <MaterialIcons
          name="add-shopping-cart"
          size={moderateScale(47)}
          color={GREY}
        />
      </MenuTile>

      <MenuTile
        text={t('guideline').toUpperCase()}
        onPress={() => navigation.navigate('Information')}
      >
        <Image
          source={greyLogo}
          style={mainMenuStyles.greyLogo}
          resizeMode="contain"
        />
      </MenuTile>

      <MenuTile
        icon="receipt"
        text={t('receipts').toUpperCase()}
        onPress={() => navigation.navigate('AllReceipts')}
        style={{ alignSelf: 'center' }}
      >
        <View>
          <MaterialIcons name="receipt" size={moderateScale(47)} color={GREY} />
          <View style={mainMenuStyles.redBadge}>
            <Text style={mainMenuStyles.redBadgeText}>1</Text>
          </View>
        </View>
      </MenuTile>

      <MenuTile
        icon="info"
        text={t('information').toUpperCase()}
        onPress={() => navigation.navigate('UnderConstruction')}
        // onPress={() => navigation.navigate('UnderConstruction')}
      >
        <MaterialIcons name="info" size={moderateScale(47)} color={GREY} />
      </MenuTile>
    </View>
  </View>
);

export const MainMenu = (translate(['general', 'mainMenu'])(
  MainMenuInner
): ComponentType<MainMenuProps>);
