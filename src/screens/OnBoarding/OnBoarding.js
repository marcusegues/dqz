import React from 'react';
import Touchable from 'react-native-platform-touchable';
import { translate } from 'react-i18next';
import { View, Text, Image } from 'react-native';
import { LanguageButton } from './subcomponents/LanguageButton';
import { languageCodeList } from './types';
import styles from './styles/onBoarding';
const img = require('../../../assets/icons/logo.png');

class OnBoarding extends React.Component {
  constructor(props) {
    super(props);
    this.systemLanguage = this.props.i18n.language;
  }
  render() {
    const { t, i18n, navigation } = this.props;
    console.log(i18n.language);
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.welcomeTitle}>Welcome to</Text>
          <View style={styles.appTitleWrapper}>
            <Image source={img} style={styles.logo} resizeMode="contain" />
            <Text style={styles.appTitleToll}>
              Toll
              <Text style={styles.appTitleCalc}>Calc</Text>
            </Text>
          </View>
          <Text style={styles.mainText}>{t('onBoardingMessage')}</Text>
          <LanguageButton
            size={'large'}
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
            <Text style={styles.selectLanguageText}>{t('selectLanguage')}</Text>

            <View style={styles.languageButtonsContainer}>
              {languageCodeList.map(language => {
                if (language === this.systemLanguage) {
                  return null;
                }
                return (
                  <LanguageButton
                    key={language}
                    size={'small'}
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
              <Text style={styles.saveSettingsButtonText}>SAVE SETTINGS</Text>
            </Touchable>
          </View>
        </View>
      </View>
    );
  }
}

export default translate('onBoarding')(OnBoarding);
