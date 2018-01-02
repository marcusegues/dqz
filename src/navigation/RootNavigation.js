import React from 'react';
import { Notifications } from 'expo';
import { translate } from 'react-i18next';
import { StackNavigator } from 'react-navigation';
import i18n from '../i18n';
import OnBoarding from '../screens/OnBoarding/OnBoarding';
import ScreensView from '../screens/ScreensView/ScreensView';
import { MAIN_RED, MAIN_BACKGROUND_COLOR } from '../styles/colors';
import { defaultNavigationOptions } from './navigationOptions';
import HeaderTitle from '../components/Headers/subcomponents/HeaderTitle';
import Logo from '../components/Headers/subcomponents/Logo';
import OptionsButton from '../components/Headers/subcomponents/OptionsButton';
import InfoIcon from '../components/Headers/subcomponents/InfoIcon';
import MainMenuHeaderRight from '../components/Headers/subcomponents/MainMenuHeaderRight';
import MainMenu from '../screens/MainMenu/MainMenu';
import PaymentContainer from '../components/Payment/PaymentContainer';
import registerForPushNotificationsAsync from '../../api/registerForPushNotificationsAsync';
import { UnderConstruction } from './underConstruction';
import QuestionAnswerContainer from '../components/QuestionAnswer/QuestionAnswerContainer';
import UnderConstructionWithSums from './underConstructionWithSums';
import GoodQuantityListModal from '../components/Modals/GoodQuantityListModal/GoodQuantityListModal';
import OnBoardingTaxScreen from '../screens/OnBoarding/OnBoardingTaxScreen';
import ReceiptAfterPayment from '../components/Receipts/ReceiptAfterPayment';
import HomeIcon from '../components/Headers/subcomponents/HomeIcon';
import DownloadIcon from '../components/Headers/subcomponents/DownloadIcon';

export const stackNavigatorScreens = {
  Screens: {
    screen: ScreensView,
    navigationOptions: ({ navigationOptions }) => ({
      ...navigationOptions,
      headerTitle: <HeaderTitle text="Screens" />,
      headerLeft: <Logo />,
      headerRight: <OptionsButton />,
      headerStyle: {
        ...navigationOptions.headerStyle,
        borderBottomWidth: 5,
        borderBottomColor: MAIN_RED,
      },
    }),
  },
  QuestionAnswer: {
    screen: QuestionAnswerContainer,
  },
  Payment: {
    screen: PaymentContainer,
  },
  OnBoarding: {
    screen: OnBoarding,
    navigationOptions: () => ({
      header: null,
    }),
  },
  OnBoardingTaxScreen: {
    screen: OnBoardingTaxScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  GoodQuantityListModal: {
    screen: GoodQuantityListModal,
  },
  MainMenu: {
    screen: MainMenu,
    navigationOptions: ({ navigationOptions, navigation }) => ({
      ...navigationOptions,
      headerLeft: <InfoIcon navigation={navigation} />,
      headerRight: <MainMenuHeaderRight navigation={navigation} />,
      headerStyle: {
        ...navigationOptions.headerStyle,
        elevation: 0,
      },
    }),
  },

  UnderConstruction: {
    screen: UnderConstruction,
    navigationOptions: () => ({
      headerTitle: <HeaderTitle text="In Bearbeitung" />,
    }),
  },
  UnderConstructionWithSums: {
    screen: UnderConstructionWithSums,
    navigationOptions: () => ({
      headerTitle: <HeaderTitle text="In Bearbeitung" />,
    }),
  },
  ReceiptAfterPayment: {
    screen: ReceiptAfterPayment,
    navigationOptions: ({ navigation }) => ({
      headerTitle: <HeaderTitle text="Quittung Schweizer Zoll" />,
      headerLeft: <HomeIcon navigation={navigation} />,
      headerRight: <DownloadIcon navigation={navigation} />,
    }),
  },
};

export const stackNavigatorConfig = {
  navigationOptions: defaultNavigationOptions,
  cardStyle: { backgroundColor: MAIN_BACKGROUND_COLOR },
  initialRouteName: 'ReceiptAfterPayment',
};

const RootStackNavigator = StackNavigator(
  stackNavigatorScreens,
  stackNavigatorConfig
);

const WrappedRootStackNavigator = () => (
  <RootStackNavigator screenProps={{ t: i18n.getFixedT() }} />
);

const ReloadAppOnLanguageChange = translate(null, {
  bindI18n: 'languageChanged',
  bindStore: false,
})(WrappedRootStackNavigator);

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    // eslint-disable-next-line
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  _handleNotification = () => {};

  render() {
    return <ReloadAppOnLanguageChange />;
  }
}
