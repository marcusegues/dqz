// @flow
/* eslint-disable global-require */
/* global window, fetch */
import React from 'react';
import { I18nextProvider } from 'react-i18next';
// $FlowFixMe
import { Platform, StatusBar, StyleSheet, View, AppState } from 'react-native';
// $FlowFixMe
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';

import { i18nImplementation } from './src/i18n';
import { RootNavigator } from './src/navigation/RootNavigation';
import { configureStore } from './src/configureStore';
import { parseCurrencyXML } from './src/model/currencies';
import {
  analyticsAppStateChanged,
  analyticsCustom,
} from './src/analytics/analyticsApi';
import { initAmplitude } from './src/analytics/amplitude';

const store = configureStore();
window.myStore = store;

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

type AppProps = {};
type AppStateT = { isLoadingComplete: boolean };

export type ExpoAppState = 'active' | 'inactive' | 'background';

export default class App extends React.Component<AppProps, AppStateT> {
  state = {
    isLoadingComplete: false,
  };

  componentWillMount() {
    analyticsCustom('DAZIT started');
  }

  componentDidMount() {
    AppState.addEventListener('change', next =>
      this.handleAppStateChange(next)
    );
    initAmplitude();
  }

  componentWillUnmount() {
    analyticsCustom('DAZIT unmounted');
  }

  // eslint-disable-next-line class-methods-use-this
  handleAppStateChange(nextAppState: ExpoAppState) {
    analyticsAppStateChanged(nextAppState);
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
        require('./assets/images/complete.png'),
        require('./assets/images/incomplete.png'),
        require('./assets/images/Swiss_Country.png'),
        require('./assets/images/grey_logo.png'),
        require('./assets/images/kreuz.png'),

        require('./assets/icons/mwst.png'),
        require('./assets/icons/mainCategories.png'),
        require('./assets/icons/travellers.png'),
        require('./assets/icons/adult.png'),
        require('./assets/icons/kids.png'),
        require('./assets/icons/cigarette_new.png'),
        require('./assets/icons/meat_new.png'),
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
      }),
      fetch(
        'http://www.pwebapps.ezv.admin.ch/apps/rates/rate/getxml?activeSearchType=yesterday'
      )
        .then(response => response.text())
        .then(rawdata => parseCurrencyXML(rawdata, store)),
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
