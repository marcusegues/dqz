// @flow
/* eslint-disable global-require */
/* global fetch */
import React from 'react';
import { I18nextProvider } from 'react-i18next';

import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  AppState,
  NetInfo,
  Text,
  // $FlowFixMe
} from 'react-native';
// $FlowFixMe
import { SafeAreaView } from 'react-navigation';

// $FlowFixMe
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { Provider } from 'react-redux';

import { i18nImplementation } from './src/i18n';
import { RootNavigator } from './src/navigation/RootNavigation';
import { configureStore } from './src/configureStore';
import { parseCurrencyXML } from './src/model/currencies';
import { appShouldUpdate } from './src/utils/checkversion/checkversion';
import type { ConnectivityType } from './src/types/connectivity';
import { UpdateTheApp } from './src/screens/UpdateTheApp/UpdateTheApp';
import { fetchSettingsHasLanguage } from './src/asyncStorage/storageApi';
import { KeyNotSet } from './src/asyncStorage/asyncStorage';

const store = configureStore();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

if (Platform.OS === 'android') {
  SafeAreaView.setStatusBarHeight(0);
}

Text.defaultProps.allowFontScaling = false;

type AppProps = {};
type AppStateT = { isLoadingComplete: boolean, appHaveNewVersion: boolean };

export type ExpoAppState = 'active' | 'inactive' | 'background';

export default class App extends React.Component<AppProps, AppStateT> {
  state = {
    isLoadingComplete: false,
    appHaveNewVersion: false,
  };

  componentDidMount() {
    AppState.addEventListener('change', next =>
      this.handleAppStateChange(next)
    );
    NetInfo.addEventListener('connectionChange', connectionInfo =>
      this.handleConnectivityChange(connectionInfo)
    );
  }

  handleConnectivityChange(connectionInfo: ConnectivityType) {
    store.dispatch({ type: 'SET_CONNECTIVITY', connectionInfo });
  }

  // eslint-disable-next-line class-methods-use-this, no-unused-vars
  handleAppStateChange(nextAppState: ExpoAppState) {
    // will add async storage here
  }

  handleLoadingError = (error: string) => {
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  loadResourcesAsync = async () =>
    Promise.all([
      Asset.loadAsync([
        require('./assets/images/done_big.png'),
        require('./assets/images/logo_red.png'),
        require('./assets/images/logo.png'),
        require('./assets/images/quickZollLogo.png'),
        require('./assets/images/quickZollLogoWithShadow.png'),
        require('./assets/images/mainMenuLogo.png'),
        require('./assets/images/complete.png'),
        require('./assets/images/incomplete.png'),
        require('./assets/images/grey_logo.png'),
        require('./assets/images/kreuz.png'),
        require('./assets/images/logo_with_text.png'),
        require('./assets/images/ambrite_logo.png'),
        require('./assets/images/infoImage.png'),
        require('./assets/images/visaAndMaestroLogo.png'),
        require('./assets/images/customs.png'),
        require('./assets/images/successfulPayment.png'),
        require('./assets/images/redSquare.png'),
        require('./assets/images/info/bus.png'),
        require('./assets/images/info/camper.png'),
        require('./assets/images/info/pendant.png'),
        require('./assets/images/info/trailer.png'),
        require('./assets/images/updateTheAppTopImage.jpg'),
        require('./assets/images/updateTheAppBottomIcon.png'),
        require('./assets/images/info/van.png'),
        require('./assets/icons/shoppingCartWithArrow.png'),
        require('./assets/images/info/vatAllowanceInfographic1_DE.png'),
        require('./assets/images/info/vatAllowanceInfographic1_EN.png'),
        require('./assets/images/info/vatAllowanceInfographic1_IT.png'),
        require('./assets/images/info/vatAllowanceInfographic1_FR.png'),
        require('./assets/images/info/vatAllowanceInfographic2_DE.png'),
        require('./assets/images/info/vatAllowanceInfographic2_EN.png'),
        require('./assets/images/info/vatAllowanceInfographic2_IT.png'),
        require('./assets/images/info/vatAllowanceInfographic2_FR.png'),
        require('./assets/images/info/dutyAllowanceDiagram_DE.png'),
        require('./assets/images/info/dutyAllowanceDiagram_EN.png'),
        require('./assets/images/info/dutyAllowanceDiagram_FR.png'),
        require('./assets/images/info/dutyAllowanceDiagram_IT.png'),
        require('./assets/images/info/vatAllowanceOver300Diagram_IT.png'),
        require('./assets/images/info/vatAllowanceOver300Diagram_EN.png'),
        require('./assets/images/info/vatAllowanceOver300Diagram_FR.png'),
        require('./assets/images/info/vatAllowanceOver300Diagram_DE.png'),

        require('./assets/icons/mwst.png'),
        require('./assets/icons/iva.png'),
        require('./assets/icons/tva.png'),
        require('./assets/icons/vat.png'),
        require('./assets/icons/zoll.png'),
        require('./assets/icons/dogana.png'),
        require('./assets/icons/duoane.png'),
        require('./assets/icons/customs.png'),
        require('./assets/icons/mainCategories.png'),
        require('./assets/icons/travellers.png'),
        require('./assets/icons/adult.png'),
        require('./assets/icons/kids.png'),
        require('./assets/icons/kids.png'),

        require('./assets/icons/AlcHard.png'),
        require('./assets/icons/AlcSoft.png'),
        require('./assets/icons/Butter.png'),
        require('./assets/icons/Meat.png'),
        require('./assets/icons/Oils.png'),
        require('./assets/icons/OtherGoods.png'),
        require('./assets/icons/OtherTobacco.png'),

        require('./assets/icons/info/Above300.png'),
        require('./assets/icons/info/AlcoCigarettesMeat.png'),
        require('./assets/icons/info/Basket.png'),
        require('./assets/icons/info/Below300.png'),
        require('./assets/icons/info/BelowCHF300.png'),
        require('./assets/icons/info/Car.png'),
        require('./assets/icons/info/CreditCard.png'),
        require('./assets/icons/info/ID.png'),
        require('./assets/icons/info/Meat.png'),
        require('./assets/icons/info/Pets.png'),
        require('./assets/icons/info/Railway.png'),
        require('./assets/icons/info/Restricted.png'),
        require('./assets/icons/info/Sign.png'),
        require('./assets/icons/info/Suitcase.png'),
        require('./assets/icons/info/Syringe.png'),
        require('./assets/icons/info/Animals.png'),
        require('./assets/icons/info/Plants.png'),
        require('./assets/icons/info/Souvenirs.png'),
        require('./assets/icons/info/MotorwayTaxSticker.png'),
        require('./assets/icons/info/HeavyVehicles.png'),
        require('./assets/icons/info/Fuel.png'),
        require('./assets/icons/info/Watches.png'),
        require('./assets/icons/info/Cash.png'),
        require('./assets/icons/info/Food.png'),
        require('./assets/icons/info/AuthorisationRequirements.png'),
        require('./assets/icons/info/InternetShoppingAndMail.png'),
        require('./assets/icons/info/Turnpike.png'),
      ]),
      Font.loadAsync({
        open_sans_extra_bold: require('./assets/fonts/OpenSans-ExtraBold.ttf'),
        open_sans_bold: require('./assets/fonts/OpenSans-Bold.ttf'),

        open_sans_semi_bold: require('./assets/fonts/OpenSans-SemiBold.ttf'),
        open_sans_regular: require('./assets/fonts/OpenSans-Regular.ttf'),
        open_sans_light: require('./assets/fonts/OpenSans-Light.ttf'),

        roboto_bold: require('./assets/fonts/Roboto-Bold.ttf'),
        roboto_italic: require('./assets/fonts/Roboto-Italic.ttf'),
        roboto_regular: require('./assets/fonts/Roboto-Regular.ttf'),
        roboto_light: require('./assets/fonts/Roboto-Light.ttf'),
        roboto_medium: require('./assets/fonts/Roboto-Medium.ttf'),
        roboto_thin: require('./assets/fonts/Roboto-Thin.ttf'),

        // $FlowFixMe
        exo_extraLight: require('./assets/fonts/Exo-ExtraLight.otf'),

        ...Ionicons.font,
        ...Entypo.font, // fixes major bug related to using onLayout on Views with Entypo icons as children
      }),
      fetch('https://dazit1.ambrite.ch/getrates')
        .then(response => response.text())
        .then(rawdata => parseCurrencyXML(rawdata, store))
        .catch(() => {
          fetch('https://dazit2.ambrite.ch/getrates')
            .then(response => response.text())
            .then(rawdata => parseCurrencyXML(rawdata, store))
            .catch(() => parseCurrencyXML('invalid', store));
        }),
      fetch('https://dazit1.ambrite.ch/getversion')
        .then(response => response.json())
        .then(jsonData => {
          if (appShouldUpdate(jsonData.version)) {
            this.setState({ appHaveNewVersion: true });
          }
        })
        .catch(() => {
          fetch('https://dazit2.ambrite.ch/getversion')
            .then(response => response.json())
            .then(jsonData => {
              if (appShouldUpdate(jsonData.version)) {
                this.setState({ appHaveNewVersion: true });
              }
            })
            .catch(e => {
              console.log(e);
            });
        }),
      fetchSettingsHasLanguage().then(language => {
        if (language !== KeyNotSet) {
          i18nImplementation.changeLanguage(language);
        }
      }),
    ]);

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }
    if (this.state.appHaveNewVersion) {
      return (
        <View style={styles.container} store={store}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && (
            <View style={styles.statusBarUnderlay} />
          )}
          <Provider store={store}>
            <I18nextProvider i18n={i18nImplementation}>
              <UpdateTheApp t={i18nImplementation.getFixedT()} />
            </I18nextProvider>
          </Provider>
        </View>
      );
    }
    return (
      <View style={styles.container} store={store}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
        <Provider store={store}>
          <I18nextProvider i18n={i18nImplementation}>
            <RootNavigator />
          </I18nextProvider>
        </Provider>
      </View>
    );
  }
}
