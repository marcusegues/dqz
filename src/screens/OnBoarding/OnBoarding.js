// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { translate } from 'react-i18next';
import { LanguageButton } from './subcomponents/LanguageButton';
import styles from './styles/onBoarding';
import OnBoardingContainer from './subcomponents/OnBoardingContainer';
import OnBoardingParagraph from './subcomponents/OnBoardingParagraph';
import DoneButton from './subcomponents/DoneButton';
import { languages } from '../../i18n';
import type { Navigation, TFunction } from '../../types/generalTypes';
import type { Language } from '../../i18n/types/locale';

type OnBoardingState = {
  systemLanguage: Language,
};

type OnBoardingProps = {
  t: TFunction,
  i18n: { language: Language, changeLanguage: Language => void },
  navigation: Navigation,
};

class OnBoarding extends React.Component<OnBoardingProps, OnBoardingState> {
  constructor(props) {
    super(props);
    this.state = { systemLanguage: this.props.i18n.language };
  }
  render() {
    const { t, i18n, navigation } = this.props;
    const { systemLanguage } = this.state;
    return (
      <OnBoardingContainer>
        <OnBoardingParagraph text={t('onBoarding:onBoardingMessage')} />
        <LanguageButton
          size="large"
          selected={systemLanguage === i18n.language}
          languageCode={systemLanguage}
          onPress={() => i18n.changeLanguage(systemLanguage)}
        />

        <View style={styles.languageButtonsSection}>
          <OnBoardingParagraph text={t('onBoarding:selectLanguage')} />
          <View style={styles.languageButtons}>
            {languages.map(language => {
              if (language === systemLanguage) {
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
          onPress={() => navigation.navigate('OnBoardingTaxScreen')}
        />
      </OnBoardingContainer>
    );
  }
}

export default translate(['general', 'onBoarding'])(OnBoarding);
