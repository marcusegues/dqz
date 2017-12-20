import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/i18n';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import RootNavigation from './src/navigation/RootNavigation';
import configureStore from './src/configureStore';

const store = configureStore();
window.myStore = store;

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
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

  _loadResourcesAsync = async () =>
    Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),

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

        exo_thin: require('./assets/fonts/Exo-Thin.otf'),
        exo_light: require('./assets/fonts/Exo-Light.otf'),
        exo1_thin: require('./assets/fonts/Exo1-Thin.otf'),
        exo_extraLight: require('./assets/fonts/Exo-ExtraLight.otf'),

        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        // { 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf') },
      }),
    ]);

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

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
