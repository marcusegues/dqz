// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { connect } from 'react-redux';
// $FlowFixMe
import { translate } from 'react-i18next';
// $FlowFixMe
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
// $FlowFixMe
import { View } from 'react-native';
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
import { InformationMainCategories } from '../screens/Information/InformationMainCategories';
import { InformationSubCategories } from '../screens/Information/InformationSubCategories';
import { CustomsProcedures } from '../screens/Information/InformationScreens/mainCategories/CustomsProcedures';
import { TravelDocuments } from '../screens/Information/InformationScreens/mainCategories/TravelDocuments';
import type { Navigation } from '../types/generalTypes';
import { BackArrow } from '../components/Headers/subcomponents/BackArrow';
import { UsefulInfoScreenTemplate } from '../screens/Information/subComponents/UsefulInfoScreenTemplate';
import { SnackBarsContainer } from '../components/SnackBars/SnackBarsContainer';
import { VatAllowance } from '../screens/Information/InformationScreens/mainCategories/VatAllowance';
import { DutyAllowance } from '../screens/Information/InformationScreens/mainCategories/DutyAllowance';
import { PersonalEffects } from '../screens/Information/InformationScreens/mainCategories/PersonalEffects';
import { ForeignVat } from '../screens/Information/InformationScreens/mainCategories/ForeignVat';
import { EntryByTrain } from '../screens/Information/InformationScreens/mainCategories/EntryByTrain';
import { Animals } from '../screens/Information/InformationScreens/subCategories/Animals';
import { Plants } from '../screens/Information/InformationScreens/subCategories/Plants';
import { SouvenirsAndSpeciesProtection } from '../screens/Information/InformationScreens/subCategories/SouvenirsAndSpeciesProtection';
import { HighwayVignette } from '../screens/Information/InformationScreens/subCategories/HighwayVignette';
import { RoadTax } from '../screens/Information/InformationScreens/subCategories/RoadTax';
import { FuelAndRepairs } from '../screens/Information/InformationScreens/subCategories/FuelAndRepairs';
import { Forgery } from '../screens/Information/InformationScreens/subCategories/Forgery';
import { Cash } from '../screens/Information/InformationScreens/subCategories/Cash';
import { Food } from '../screens/Information/InformationScreens/subCategories/Food';
import { AuthorisationRequirements } from '../screens/Information/InformationScreens/subCategories/AuthorisationRequirements';
import { PurchasesOnlineOffline } from '../screens/Information/InformationScreens/mainCategories/PurchasesOnlineOffline';
import { addListener } from './reactNavigation';
import { CartIcon } from '../components/Headers/subcomponents/CartIcon';

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
      screenProps,
    }: {
      navigationOptions: any,
      navigation: Navigation,
      screenProps: any,
    }) => ({
      ...navigationOptions,
      headerLeft: <InfoIcon navigation={navigation} />,
      headerRight: (
        <MainMenuHeaderRight
          navigation={navigation}
          language={screenProps.language}
        />
      ),
      headerStyle: {
        ...navigationOptions.headerStyle,
        elevation: 0,
      },
    }),
  },

  UnderConstruction: {
    screen: UnderConstruction,
  },
  InformationMainCategories: {
    screen: InformationMainCategories,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerLeft: <HomeIcon navigation={navigation} />,
    }),
  },
  InformationSubCategories: {
    screen: InformationSubCategories,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerLeft: (
        <BackArrow
          onPress={() =>
            navigation.dispatch({
              type: 'NAVIGATE',
              screen: 'InformationMainCategories',
            })
          }
        />
      ),
      headerRight: <CartIcon navigation={navigation} />,
    }),
  },
  CustomsProcedures: {
    screen: CustomsProcedures,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerRight: <CartIcon navigation={navigation} />,
      headerLeft: (
        <BackArrow
          onPress={() =>
            navigation.dispatch({
              type: 'NAVIGATE',
              screen: 'InformationMainCategories',
            })
          }
        />
      ),
    }),
  },
  VatAllowance: {
    screen: VatAllowance,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerRight: <CartIcon navigation={navigation} />,
      headerLeft: (
        <BackArrow
          onPress={() =>
            navigation.dispatch({
              type: 'NAVIGATE',
              screen: 'InformationSubCategories',
              params: { infoCategory: 'declaration' },
            })
          }
        />
      ),
    }),
  },
  DutyAllowance: {
    screen: DutyAllowance,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerRight: <CartIcon navigation={navigation} />,
      headerLeft: (
        <BackArrow
          onPress={() =>
            navigation.dispatch({
              type: 'NAVIGATE',
              screen: 'InformationSubCategories',
              params: { infoCategory: 'declaration' },
            })
          }
        />
      ),
    }),
  },
  PersonalEffects: {
    screen: PersonalEffects,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerRight: <CartIcon navigation={navigation} />,
      headerLeft: (
        <BackArrow
          onPress={() =>
            navigation.dispatch({
              type: 'NAVIGATE',
              screen: 'InformationSubCategories',
              params: { infoCategory: 'declaration' },
            })
          }
        />
      ),
    }),
  },
  ForeignVat: {
    screen: ForeignVat,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerRight: <CartIcon navigation={navigation} />,
      headerLeft: (
        <BackArrow
          onPress={() =>
            navigation.dispatch({
              type: 'NAVIGATE',
              screen: 'InformationSubCategories',
              params: { infoCategory: 'declaration' },
            })
          }
        />
      ),
    }),
  },
  TravelDocuments: {
    screen: TravelDocuments,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerRight: <CartIcon navigation={navigation} />,
      headerLeft: (
        <BackArrow
          onPress={() =>
            navigation.dispatch({
              type: 'NAVIGATE',
              screen: 'InformationMainCategories',
            })
          }
        />
      ),
    }),
  },
  EntryByTrain: {
    screen: EntryByTrain,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerRight: <CartIcon navigation={navigation} />,
      headerLeft: (
        <BackArrow
          onPress={() =>
            navigation.dispatch({
              type: 'NAVIGATE',
              screen: 'InformationMainCategories',
            })
          }
        />
      ),
    }),
  },
  PurchasesOnlineOffline: {
    screen: PurchasesOnlineOffline,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerRight: <CartIcon navigation={navigation} />,
      headerLeft: (
        <BackArrow
          onPress={() =>
            navigation.dispatch({
              type: 'NAVIGATE',
              screen: 'InformationMainCategories',
            })
          }
        />
      ),
    }),
  },
  Animals: {
    screen: Animals,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerRight: <CartIcon navigation={navigation} />,
      headerLeft: (
        <BackArrow
          onPress={() =>
            navigation.dispatch({
              type: 'NAVIGATE',
              screen: 'InformationSubCategories',
              params: { infoCategory: 'animalsAndPlants' },
            })
          }
        />
      ),
    }),
  },
  Plants: {
    screen: Plants,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerRight: <CartIcon navigation={navigation} />,
      headerLeft: (
        <BackArrow
          onPress={() =>
            navigation.dispatch({
              type: 'NAVIGATE',
              screen: 'InformationSubCategories',
              params: { infoCategory: 'animalsAndPlants' },
            })
          }
        />
      ),
    }),
  },
  SouvenirsAndSpeciesProtection: {
    screen: SouvenirsAndSpeciesProtection,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerRight: <CartIcon navigation={navigation} />,
      headerLeft: (
        <BackArrow
          onPress={() =>
            navigation.dispatch({
              type: 'NAVIGATE',
              screen: 'InformationSubCategories',
              params: { infoCategory: 'animalsAndPlants' },
            })
          }
        />
      ),
    }),
  },
  HighwayVignette: {
    screen: HighwayVignette,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerRight: <CartIcon navigation={navigation} />,
      headerLeft: (
        <BackArrow
          onPress={() =>
            navigation.dispatch({
              type: 'NAVIGATE',
              screen: 'InformationSubCategories',
              params: { infoCategory: 'vehicles' },
            })
          }
        />
      ),
    }),
  },
  RoadTax: {
    screen: RoadTax,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerRight: <CartIcon navigation={navigation} />,
      headerLeft: (
        <BackArrow
          onPress={() =>
            navigation.dispatch({
              type: 'NAVIGATE',
              screen: 'InformationSubCategories',
              params: { infoCategory: 'vehicles' },
            })
          }
        />
      ),
    }),
  },
  FuelAndRepairs: {
    screen: FuelAndRepairs,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerRight: <CartIcon navigation={navigation} />,
      headerLeft: (
        <BackArrow
          onPress={() =>
            navigation.dispatch({
              type: 'NAVIGATE',
              screen: 'InformationSubCategories',
              params: { infoCategory: 'vehicles' },
            })
          }
        />
      ),
    }),
  },
  Forgery: {
    screen: Forgery,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerRight: <CartIcon navigation={navigation} />,
      headerLeft: (
        <BackArrow
          onPress={() =>
            navigation.dispatch({
              type: 'NAVIGATE',
              screen: 'InformationSubCategories',
              params: { infoCategory: 'prohibitionsAndRestrictions' },
            })
          }
        />
      ),
    }),
  },
  Cash: {
    screen: Cash,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerRight: <CartIcon navigation={navigation} />,
      headerLeft: (
        <BackArrow
          onPress={() =>
            navigation.dispatch({
              type: 'NAVIGATE',
              screen: 'InformationSubCategories',
              params: { infoCategory: 'prohibitionsAndRestrictions' },
            })
          }
        />
      ),
    }),
  },
  Food: {
    screen: Food,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerRight: <CartIcon navigation={navigation} />,
      headerLeft: (
        <BackArrow
          onPress={() =>
            navigation.dispatch({
              type: 'NAVIGATE',
              screen: 'InformationSubCategories',
              params: { infoCategory: 'prohibitionsAndRestrictions' },
            })
          }
        />
      ),
    }),
  },
  AuthorisationRequirements: {
    screen: AuthorisationRequirements,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerRight: <CartIcon navigation={navigation} />,
      headerLeft: (
        <BackArrow
          onPress={() =>
            navigation.dispatch({
              type: 'NAVIGATE',
              screen: 'InformationSubCategories',
              params: { infoCategory: 'prohibitionsAndRestrictions' },
            })
          }
        />
      ),
    }),
  },
  UsefulInfoScreenTemplate: {
    screen: UsefulInfoScreenTemplate,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerLeft: (
        <BackArrow onPress={() => navigation.dispatch({ type: 'GO_BACK' })} />
      ),
      headerTitle: <HeaderTitle text="Wissenswertes" />,
    }),
  },
  ReceiptAfterPayment: {
    screen: ReceiptAfterPayment,
    navigationOptions: ({ navigation }: NavigationObject) => ({
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
        <BackArrow onPress={() => navigation.dispatch({ type: 'GO_BACK' })} />
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
        <BackArrow onPress={() => navigation.dispatch({ type: 'GO_BACK' })} />
      ),
    }),
  },
  LegalNoticeInfo: {
    screen: LegalNoticeInfo,
    navigationOptions: ({ navigation }: NavigationObject) => ({
      headerLeft: (
        <BackArrow onPress={() => navigation.dispatch({ type: 'GO_BACK' })} />
      ),
    }),
  },
};

export const stackNavigatorConfig = {
  navigationOptions: defaultNavigationOptions,
  cardStyle: { backgroundColor: MAIN_BACKGROUND_COLOR },
  initialRouteName: 'OnBoarding',
};

export const RootStackNavigator = StackNavigator(
  stackNavigatorScreens,
  stackNavigatorConfig
);

type ReduxInject = {
  dispatch: Function,
  nav: Object,
};

// eslint-disable-next-line react/prefer-stateless-function
class WrappedRootStackNavigator extends React.Component<ReduxInject, {}> {
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
          navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
            addListener,
          })}
          screenProps={{
            t: i18nImplementation.getFixedT(),
            language: i18nImplementation.language,
            changeLanguage: i18nImplementation.changeLanguage,
          }}
        />
        <SnackBarsContainer />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const ReloadAppOnLanguageChange = (connect(mapStateToProps, mapDispatchToProps)(
  translate(null, {
    bindI18n: 'languageChanged',
    bindStore: false,
  })(WrappedRootStackNavigator)
): ComponentType<{}>);

export const RootNavigator = () => <ReloadAppOnLanguageChange />;
