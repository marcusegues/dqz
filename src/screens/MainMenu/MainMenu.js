// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MenuTile } from './Subcomponents/MenuTile';
import { mainMenuStyles } from './styles/MainMenuStyles';
import { moderateScale } from '../../styles/Scaling';
import { AppTitle } from '../../components/AppTitle/AppTitle';
import type { Navigation, TFunction } from '../../types/generalTypes';

const switzerland = require('../../../assets/images/Swiss_Country.png');
const customs = require('../../../assets/images/customs.png');

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
        text={t('declareGoods')}
      >
        <MaterialIcons
          name="add-shopping-cart"
          size={moderateScale(47)}
          color="#757575"
        />
      </MenuTile>

      <MenuTile
        icon="info"
        text={t('information')}
        onPress={() => navigation.navigate('UnderConstruction')}
      >
        <MaterialIcons name="info" size={moderateScale(47)} color="#757575" />
      </MenuTile>

      <MenuTile
        icon="receipt"
        text={t('receipts')}
        onPress={() => navigation.navigate('AllReceipts')}
        style={{ alignSelf: 'center' }}
      >
        <View>
          <MaterialIcons
            name="receipt"
            size={moderateScale(47)}
            color="#757575"
          />
        </View>
      </MenuTile>

      <MenuTile
        text={t('guideline')}
        onPress={() => navigation.navigate('Information')}
      >
        <Image
          source={customs}
          style={mainMenuStyles.greyLogo}
          resizeMode="contain"
        />
      </MenuTile>
    </View>
  </View>
);

export const MainMenu = (translate(['general', 'mainMenu'])(
  MainMenuInner
): ComponentType<MainMenuProps>);
