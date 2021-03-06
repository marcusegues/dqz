// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, Image, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MenuTile } from './Subcomponents/MenuTile';
import { mainMenuStyles } from './styles/MainMenuStyles';
import { moderateScale } from '../../styles/Scaling';
import type { Navigation, TFunction } from '../../types/generalTypes';
import { SavedBasketModal } from '../../components/Modals/SavedBasketModal/SavedBasketModal';
import { AcceptRateModal } from '../../components/Modals/AcceptRateModal/AcceptRateModal';
import type { NavigateFromSavedBasket } from '../../components/Modals/SavedBasketModal/SavedBasketModal';
import {
  fetchAmounts,
  fetchBasket,
  fetchMainCategories,
  fetchPeople,
  fetchQAState,
  fetchReceiptEntryTime,
  fetchSettingsAcceptRate,
  storeSettingsAcceptRate,
} from '../../asyncStorage/storageApi';
import { isInitBasket } from '../../utils/declaration/declaration';
import {
  getAmounts,
  getBasket,
  getMainCategories,
  getPeople,
  getReceiptEntryTime,
} from '../../reducers/selectors';
import type {
  Amounts,
  Basket,
  People,
} from '../../model/types/basketPeopleAmountsTypes';
import type { MainCategories } from '../../types/reducers/declaration';

const logo = require('../../../assets/images/mainMenuLogo.png');
const customs = require('../../../assets/images/customs.png');

type MainMenuState = {
  savedBasketModalVisible: boolean,
  acceptRateModalVisible: boolean,
};

type MainMenuProps = {
  navigation: Navigation,
};

type ReduxInject = {
  initABP: () => void,
  people: People,
  basket: Basket,
  amounts: Amounts,
  mainCategories: MainCategories,
  receiptEntryTime: string,
};

class MainMenuInner extends React.Component<
  MainMenuProps & ReduxInject & { t: TFunction },
  MainMenuState
> {
  constructor(props) {
    super(props);
    this.state = {
      savedBasketModalVisible: false,
      acceptRateModalVisible: false,
    };
  }

  componentWillMount() {
    this.props.initABP();
  }

  setSavedBasketModalVisibleTrue() {
    this.setState({ savedBasketModalVisible: true });
  }

  setSavedBasketModalVisibleFalse(navigateTo: NavigateFromSavedBasket) {
    this.setState({ savedBasketModalVisible: false }, () => {
      if (navigateTo !== 'doNotNavigate') {
        this.props.navigation.dispatch({
          type: 'NAVIGATE',
          screen: navigateTo,
        });
      }
    });
  }

  setAcceptRateModalVisibleFalse() {
    this.setState({ acceptRateModalVisible: false });
  }

  handleGoToDeclaration() {
    const {
      people,
      basket,
      mainCategories,
      amounts,
      receiptEntryTime,
    } = this.props;
    if (
      isInitBasket(people, basket, mainCategories, amounts, receiptEntryTime)
    ) {
      this.props.navigation.dispatch({
        type: 'NAVIGATE',
        screen: 'QuestionAnswer',
      });
    } else {
      this.setSavedBasketModalVisibleTrue();
    }
  }

  checkSettingsAcceptRate() {
    fetchSettingsAcceptRate().then(accepted => {
      if (accepted === 'accepted') {
        this.handleGoToDeclaration();
      } else {
        this.setState({ acceptRateModalVisible: true });
      }
    });
  }

  render() {
    const { navigation, t } = this.props;
    return (
      <View style={mainMenuStyles.mainContainer}>
        <View style={mainMenuStyles.topContainer}>
          <Image source={logo} style={mainMenuStyles.backgroundImage} />
        </View>
        <SafeAreaView style={mainMenuStyles.bottomContainer}>
          <MenuTile
            onPress={() => this.checkSettingsAcceptRate()}
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
            onPress={() =>
              navigation.dispatch({
                type: 'NAVIGATE',
                screen: 'LegalNoticeInfo',
              })
            }
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
            onPress={() =>
              navigation.dispatch({
                type: 'NAVIGATE',
                screen: 'AllReceipts',
              })
            }
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
            onPress={() =>
              navigation.dispatch({
                type: 'NAVIGATE',
                screen: 'InformationMainCategories',
              })
            }
          >
            <Image
              source={customs}
              style={mainMenuStyles.greyLogo}
              resizeMode="contain"
            />
          </MenuTile>
        </SafeAreaView>
        <SavedBasketModal
          modalVisible={this.state.savedBasketModalVisible}
          setModalVisibleFalse={(navigateTo: NavigateFromSavedBasket) =>
            this.setSavedBasketModalVisibleFalse(navigateTo)
          }
        />
        <AcceptRateModal
          modalVisible={this.state.acceptRateModalVisible}
          setModalVisibleFalse={() => this.setAcceptRateModalVisibleFalse()}
          onAcceptRate={() => {
            storeSettingsAcceptRate('accepted').then(() => {
              this.setState({
                acceptRateModalVisible: false,
              });
            });
          }}
          onDismiss={() => this.handleGoToDeclaration()}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  basket: getBasket(state),
  people: getPeople(state),
  amounts: getAmounts(state),
  mainCategories: getMainCategories(state),
  receiptEntryTime: getReceiptEntryTime(state),
});

const mapDispatchToProps = dispatch => ({
  initABP: () => {
    fetchQAState().then(qaState => {
      dispatch({
        type: 'SET_QA_STATE',
        qaState,
      });
    });
    fetchBasket().then(basket => {
      dispatch({
        type: 'SET_BASKET',
        basket,
      });
    });
    fetchPeople().then(people => {
      dispatch({
        type: 'SET_PEOPLE',
        people,
      });
    });
    fetchAmounts().then(amounts => {
      dispatch({
        type: 'SET_AMOUNTS',
        amounts,
      });
    });
    fetchMainCategories().then(mainCategories => {
      dispatch({
        type: 'SET_MAIN_CATEGORIES',
        mainCategories,
      });
    });
    fetchReceiptEntryTime().then(receiptEntryTime => {
      dispatch({
        type: 'SET_RECEIPT_ENTRY_TIME',
        receiptEntryTime,
      });
    });
  },
});

export const MainMenu = (connect(mapStateToProps, mapDispatchToProps)(
  translate(['general', 'mainMenu'])(MainMenuInner)
): ComponentType<MainMenuProps>);
