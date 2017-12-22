import React from 'react';
import { View } from 'react-native';
import { translate } from 'react-i18next';
import { LanguageButton } from './subcomponents/LanguageButton';
import { languageCodeList } from './types';
import styles from './styles/onBoarding';
import OnBoardingContainer from './subcomponents/OnBoardingContainer';
import OnBoardingParagraph from './subcomponents/OnBoardingParagraph';
import DoneButton from './subcomponents/DoneButton';

class OnBoarding extends React.Component {
  constructor(props) {
    super(props);
    this.systemLanguage = this.props.i18n.language;
  }
  render() {
    const { t, i18n, navigation } = this.props;
    return (
      <OnBoardingContainer>
        <OnBoardingParagraph text={t('onBoarding:onBoardingMessage')} />
        <LanguageButton
          size="large"
          selected={this.systemLanguage === i18n.language}
          languageCode={this.systemLanguage}
          onPress={() => i18n.changeLanguage(this.systemLanguage)}
        />

        <View style={styles.languageButtonsSection}>
          <OnBoardingParagraph text={t('onBoarding:selectLanguage')} />
          <View style={styles.languageButtons}>
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
        <DoneButton
          handlePress={() => navigation.navigate('OnBoardingTaxScreen')}
        />
      </OnBoardingContainer>
    );
  }
}

export default translate(['general', 'onBoarding'])(OnBoarding);
