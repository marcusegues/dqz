/* eslint-disable global-require */
/* global window, fetch */
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';

import i18n from './src/i18n';
import RootNavigation from './src/navigation/RootNavigation';
import configureStore from './src/configureStore';
import { parseCurrencyXML } from './src/model/currencies';

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

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  handleLoadingError = error => {
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
          <I18nextProvider i18n={i18n}>
            <RootNavigation />
          </I18nextProvider>
        </Provider>
      </View>
    );
  }
}
