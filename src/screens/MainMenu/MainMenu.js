// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, Image, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MenuTile } from './Subcomponents/MenuTile';
import { mainMenuStyles } from './styles/MainMenuStyles';
import { moderateScale } from '../../styles/Scaling';
import { AppTitle } from '../../components/AppTitle/AppTitle';
import type { Navigation, TFunction } from '../../types/generalTypes';
import { SavedBasketModal } from '../../components/Modals/SavedBasketModal/SavedBasketModal';

const switzerland = require('../../../assets/images/Swiss_Country.png');
const customs = require('../../../assets/images/customs.png');

type MainMenuState = {
  modalVisible: boolean,
};

type MainMenuProps = {
  navigation: Navigation,
};

class MainMenuInner extends React.Component<
  MainMenuProps & { t: TFunction },
  MainMenuState
> {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  componentWillMount() {
    this.props.navigation.setParams({
      setModalVisibleTrue: this.setModalVisibleTrue.bind(this),
    });
  }

  setModalVisibleTrue() {
    this.setState({ modalVisible: true });
  }

  setModalVisibleFalse() {
    this.setState({ modalVisible: false });
  }

  render() {
    const { navigation, t } = this.props;
    return (
      <View style={mainMenuStyles.mainContainer}>
        <View style={mainMenuStyles.topContainer}>
          <Image source={switzerland} style={mainMenuStyles.backgroundImage} />
          <View style={mainMenuStyles.logoAndTitleContainer}>
            <AppTitle />
          </View>
        </View>
        <SafeAreaView style={mainMenuStyles.bottomContainer}>
          <MenuTile
            onPress={() => navigation.navigate('QuestionAnswer')}
            text={t('declareGoods')}
          >
            <MaterialIcons
              name="add-shopping-cart"
              size={moderateScale(40)}
              color="#757575"
            />
          </MenuTile>

          <MenuTile
            icon="info"
            text={t('information')}
            onPress={() => navigation.navigate('LegalNoticeInfo')}
          >
            <MaterialIcons
              name="info"
              size={moderateScale(40)}
              color="#757575"
            />
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
                size={moderateScale(40)}
                color="#757575"
              />
            </View>
          </MenuTile>

          <MenuTile
            icon="info"
            text={t('guideline')}
            onPress={() => navigation.navigate('Information')}
          >
            <Image
              source={customs}
              style={mainMenuStyles.greyLogo}
              resizeMode="contain"
            />
          </MenuTile>
        </SafeAreaView>
        <SavedBasketModal
          modalVisible={this.state.modalVisible}
          setModalVisibleFalse={() => this.setModalVisibleFalse()}
          navigation={navigation}
        />
      </View>
    );
  }
}

export const MainMenu = (translate(['general', 'mainMenu'])(
  MainMenuInner
): ComponentType<MainMenuProps>);
