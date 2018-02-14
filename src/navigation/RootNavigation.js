// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { connect } from 'react-redux';
// $FlowFixMe
import { translate } from 'react-i18next';
// $FlowFixMe
import { StackNavigator } from 'react-navigation';
// $FlowFixMe
import { View, NetInfo } from 'react-native';
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
import { UnderConstruction } from './UnderConstruction';
import { QuestionAnswerContainer } from '../components/QuestionAnswer/QuestionAnswerContainer';
import { GoodQuantityListModal } from '../components/Modals/GoodQuantityListModal/GoodQuantityListModal';
import { OnBoardingTaxScreen } from '../screens/OnBoarding/OnBoardingTaxScreen';
import { ReceiptAfterPayment } from '../components/Receipts/ReceiptAfterPayment';
import { AllReceipts } from '../components/Receipts/AllReceipts/AllReceipts';
import { AppInfo } from '../screens/AppInfo/AppInfo';
import { LegalNoticeInfo } from '../screens/LegalNoticeInfo/LegalNoticeInfo';
import { HomeIcon } from '../components/Headers/subcomponents/HomeIcon';
import { DownloadIcon } from '../components/Headers/subcomponents/DownloadIcon';
import { Information } from '../screens/Information/Information';
import { SearchIcon } from '../components/Headers/subcomponents/SearchIcon';
import type { Navigation } from '../types/generalTypes';
import { BackArrow } from '../components/Headers/subcomponents/BackArrow';
import { UsefulInfoScreenTemplate } from '../screens/Information/subComponents/UsefulInfoScreenTemplate';
import { SnackBarsContainer } from '../components/SnackBars/SnackBarsContainer';
import type { ConnectivityType } from '../types/connectivity';

export type NavigationObject = { navigation: Navigation };

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
  },
  Information: {
    screen: Information,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerLeft: <HomeIcon navigation={navigation} />,
      headerRight: <SearchIcon navigation={navigation} />,
    }),
  },
  UsefulInfoScreenTemplate: {
    screen: UsefulInfoScreenTemplate,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerLeft: (
        <BackArrow
          navigation={navigation}
          onPress={() => navigation.goBack()}
        />
      ),
      headerTitle: <HeaderTitle text="Wissenswertes" />,
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
  AllReceipts: {
    screen: AllReceipts,
    navigationOptions: ({
      navigationOptions,
      navigation,
    }: {
      navigationOptions: any,
      navigation: Navigation,
    }) => ({
      headerLeft: (
        <BackArrow
          navigation={navigation}
          onPress={() => navigation.goBack()}
        />
      ),
      headerStyle: {
        ...navigationOptions.headerStyle,
        paddingRight: 0,
      },
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
  LegalNoticeInfo: {
    screen: LegalNoticeInfo,
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

type ReduxInject = {
  setConnectivity: (connectionInfo: ConnectivityType) => void,
};

class WrappedRootStackNavigator extends React.Component<ReduxInject, {}> {
  componentDidMount() {
    NetInfo.addEventListener('connectionChange', connectionInfo =>
      this.handleConnectivityChange(connectionInfo)
    );
  }

  handleConnectivityChange(connectionInfo: ConnectivityType) {
    this.props.setConnectivity(connectionInfo);
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'column',
          width: '100%',
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <RootStackNavigator
          screenProps={{ t: i18nImplementation.getFixedT() }}
        />
        <SnackBarsContainer />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setConnectivity: (connectionInfo: ConnectivityType) =>
    dispatch({ type: 'SET_CONNECTIVITY', connectionInfo }),
});

const ReloadAppOnLanguageChange = (connect(null, mapDispatchToProps)(
  translate(null, {
    bindI18n: 'languageChanged',
    bindStore: false,
  })(WrappedRootStackNavigator)
): ComponentType<{}>);

export const RootNavigator = () => <ReloadAppOnLanguageChange />;
