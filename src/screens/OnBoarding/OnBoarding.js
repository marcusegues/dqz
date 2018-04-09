// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import { LanguageButton } from './subcomponents/LanguageButton';
import { onBoardingStyles } from './styles/onBoarding';
import { OnBoardingContainer } from './subcomponents/OnBoardingContainer';
import { OnBoardingParagraph } from './subcomponents/OnBoardingParagraph';
import { DoneButton } from './subcomponents/DoneButton';
import { languages } from '../../i18n';
import type { Navigation, TFunction } from '../../types/generalTypes';
import type { Language } from '../../i18n/types/locale';
import {
  fetchSettingsAcceptRate,
  fetchSettingsHasLanguage,
  storeSettingsHasLanguage,
} from '../../asyncStorage/storageApi';
import { KeyNotSet } from '../../asyncStorage/asyncStorage';

type NextScreenType = 'OnBoardingTaxScreen' | 'MainMenu';

type OnBoardingState = {
  systemLanguage: Language,
  nextScreen: NextScreenType,
  settingsHasLanguage: boolean,
};

type OnBoardingProps = {
  i18n: { language: Language, changeLanguage: Language => void },
  navigation: Navigation,
};

class OnBoardingInner extends React.Component<
  OnBoardingProps & { t: TFunction },
  OnBoardingState
> {
  constructor(props) {
    super(props);
    this.state = {
      systemLanguage: this.props.i18n.language,
      nextScreen: 'OnBoardingTaxScreen',
      settingsHasLanguage: false,
    };
  }

  componentWillMount() {
    this.checkSettingsAcceptRate();

    fetchSettingsHasLanguage().then(language => {
      const { navigation } = this.props;
      const { nextScreen } = this.state;
      if (language !== KeyNotSet) {
        this.setState({ settingsHasLanguage: true }, () => {
          // $FlowFixMe
          this.changeLanguage(language);
          navigation.dispatch({ type: 'NAVIGATE', screen: nextScreen });
        });
      }
    });
  }

  componentWillReceiveProps() {
    this.checkSettingsAcceptRate();
  }

  setNextScreen(nextScreen: NextScreenType) {
    this.setState({ nextScreen });
  }

  checkSettingsAcceptRate() {
    fetchSettingsAcceptRate().then(accepted => {
      if (accepted === 'accepted' || accepted === 'skipped') {
        this.setNextScreen('MainMenu');
      } else if (accepted === 'notAccepted') {
        this.setNextScreen('OnBoardingTaxScreen');
      }
    });
  }

  changeLanguage(language: Language) {
    this.props.i18n.changeLanguage(language);
  }

  render() {
    const { t, i18n, navigation } = this.props;
    const { systemLanguage, nextScreen, settingsHasLanguage } = this.state;
    return (
      <OnBoardingContainer>
        <OnBoardingParagraph
          text={
            settingsHasLanguage
              ? t('onBoarding:currentLanguageMessage')
              : t('onBoarding:onBoardingMessage')
          }
        />
        <LanguageButton
          size="large"
          selected={systemLanguage === i18n.language}
          languageCode={systemLanguage}
          onPress={() => this.changeLanguage(systemLanguage)}
        />

        <View style={onBoardingStyles.languageButtonsSection}>
          <OnBoardingParagraph text={t('onBoarding:selectLanguage')} />
          <View style={onBoardingStyles.languageButtons}>
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
                  onPress={() => this.changeLanguage(language)}
                />
              );
            })}
          </View>
        </View>
        <DoneButton
          onPress={() => {
            storeSettingsHasLanguage(i18n.language);
            navigation.dispatch({ type: 'NAVIGATE', screen: nextScreen });
          }}
        />
      </OnBoardingContainer>
    );
  }
}

export const OnBoarding = (translate(['general', 'onBoarding'])(
  OnBoardingInner
): ComponentType<OnBoardingProps>);
