import React from 'react';
import Touchable from 'react-native-platform-touchable';
import { translate } from 'react-i18next';
import { View, Text } from 'react-native';
import { LanguageButton } from './subcomponents/LanguageButton';
import { languageCodeList } from './types';
import styles from './styles/onBoarding';
import AppTitle from '../../components/AppTitle/AppTitle';

class OnBoarding extends React.Component {
  constructor(props) {
    super(props);
    this.systemLanguage = this.props.i18n.language;
  }
  render() {
    const { t, i18n, navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.welcomeTitle}>Welcome to</Text>
          <AppTitle />
          <Text style={styles.mainText}>
            {t('onBoarding:onBoardingMessage')}
          </Text>
          <LanguageButton
            size="large"
            selected={this.systemLanguage === i18n.language}
            languageCode={this.systemLanguage}
            onPress={() => i18n.changeLanguage(this.systemLanguage)}
          />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <Text style={styles.selectLanguageText}>
              {t('onBoarding:selectLanguage')}
            </Text>

            <View style={styles.languageButtonsContainer}>
              {languageCodeList.map(language => {
                if (language === this.systemLanguage) {
                  return null;
                }
                return (
                  <LanguageButton
                    key={language}
                    size="small"
                    selected={language === i18n.language}
                    languageCode={language}
                    onPress={() => i18n.changeLanguage(language)}
                  />
                );
              })}
            </View>
          </View>
          <View style={styles.saveSettingsButtonContainer}>
            <Touchable
              style={styles.saveSettingsButton}
              background={Touchable.Ripple('#006699')}
            >
              <Text
                style={styles.saveSettingsButtonText}
                onPress={() => navigation.navigate('MainMenu')}
              >
                SAVE SETTINGS
              </Text>
            </Touchable>
          </View>
        </View>
      </View>
    );
  }
}

export default translate(['general', 'onBoarding'])(OnBoarding);
