// @flow
import React from 'react';
// $FlowFixMe
import { translate } from 'react-i18next';
// $FlowFixMe
import { StackNavigator } from 'react-navigation';
import { i18nImplementation } from '../i18n';
import { OnBoarding } from '../screens/OnBoarding/OnBoarding';
import { ScreensView } from '../screens/ScreensView/ScreensView';
import { MAIN_RED, MAIN_BACKGROUND_COLOR } from '../styles/colors';
import { defaultNavigationOptions } from './navigationOptions';
import { HeaderTitle } from '../components/Headers/subcomponents/HeaderTitle';
import { Logo } from '../components/Headers/subcomponents/Logo';
import { OptionsButton } from '../components/Headers/subcomponents/OptionsButton';
import { InfoIcon } from '../components/Headers/subcomponents/InfoIcon';
import { MainMenuHeaderRight } from '../components/Headers/subcomponents/MainMenuHeaderRight';
import { MainMenu } from '../screens/MainMenu/MainMenu';
import { PaymentContainer } from '../components/Payment/PaymentContainer';
import { UnderConstruction } from './underConstruction';
import { QuestionAnswerContainer } from '../components/QuestionAnswer/QuestionAnswerContainer';
import { GoodQuantityListModal } from '../components/Modals/GoodQuantityListModal/GoodQuantityListModal';
import { OnBoardingTaxScreen } from '../screens/OnBoarding/OnBoardingTaxScreen';
import { ReceiptAfterPayment } from '../components/Receipts/ReceiptAfterPayment';
import { AppInfo } from '../screens/AppInfo/AppInfo';
import { HomeIcon } from '../components/Headers/subcomponents/HomeIcon';
import { DownloadIcon } from '../components/Headers/subcomponents/DownloadIcon';
import { Information } from '../screens/Information/Information';
import { SearchIcon } from '../components/Headers/subcomponents/SearchIcon';
import type { Navigation } from '../types/generalTypes';
import { BackArrow } from '../components/Headers/subcomponents/BackArrow';

type NavigationObject = { navigation: Navigation };

export const stackNavigatorScreens = {
  Screens: {
    screen: ScreensView,
    navigationOptions: ({
      navigationOptions,
      navigation,
    }: {
      navigationOptions: any,
      navigation: Navigation,
    }) => ({
      ...navigationOptions,
      headerTitle: <HeaderTitle text="Screens" />,
      headerLeft: <Logo />,
      headerRight: <OptionsButton navigation={navigation} />,
      headerStyle: {
        ...navigationOptions.headerStyle,
        borderBottomWidth: 5,
        borderBottomColor: MAIN_RED,
      },
    }),
  },
  QuestionAnswer: {
    screen: QuestionAnswerContainer,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerLeft: <HomeIcon navigation={navigation} />,
    }),
  },
  Payment: {
    screen: PaymentContainer,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerLeft: <HomeIcon navigation={navigation} />,
    }),
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
    navigationOptions: ({
      navigationOptions,
      navigation,
    }: {
      navigationOptions: any,
      navigation: Navigation,
    }) => ({
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
  Information: {
    screen: Information,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerLeft: <HomeIcon navigation={navigation} />,
      headerRight: <SearchIcon navigation={navigation} />,
    }),
  },
  ReceiptAfterPayment: {
    screen: ReceiptAfterPayment,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerTitle: <HeaderTitle text="Quittung Schweizer Zoll" />,
      headerLeft: <HomeIcon navigation={navigation} />,
      headerRight: <DownloadIcon navigation={navigation} />,
    }),
  },
  AppInfo: {
    screen: AppInfo,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerLeft: (
        <BackArrow
          navigation={navigation}
          onPress={() => navigation.goBack()}
        />
      ),
    }),
  },
};

export const stackNavigatorConfig = {
  navigationOptions: defaultNavigationOptions,
  cardStyle: { backgroundColor: MAIN_BACKGROUND_COLOR },
  initialRouteName: 'OnBoarding',
};

const RootStackNavigator = StackNavigator(
  stackNavigatorScreens,
  stackNavigatorConfig
);

const WrappedRootStackNavigator = () => (
  <RootStackNavigator screenProps={{ t: i18nImplementation.getFixedT() }} />
);

const ReloadAppOnLanguageChange = translate(null, {
  bindI18n: 'languageChanged',
  bindStore: false,
})(WrappedRootStackNavigator);

export const RootNavigator = () => <ReloadAppOnLanguageChange />;
