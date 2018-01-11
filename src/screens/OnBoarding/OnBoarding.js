// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import type { ComponentType } from 'react';
// $FlowFixMe
import { Amplitude } from 'expo';
import { translate } from 'react-i18next';
import { LanguageButton } from './subcomponents/LanguageButton';
import { onBoardingStyles } from './styles/onBoarding';
import { OnBoardingContainer } from './subcomponents/OnBoardingContainer';
import { OnBoardingParagraph } from './subcomponents/OnBoardingParagraph';
import { DoneButton } from './subcomponents/DoneButton';
import { languages } from '../../i18n';
import type { Navigation, TFunction } from '../../types/generalTypes';
import type { Language } from '../../i18n/types/locale';

type OnBoardingState = {
  systemLanguage: Language,
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
                  onPress={() => {
                    Amplitude.logEventWithProperties('Language changed', {
                      language,
                    });
                    i18n.changeLanguage(language);
                  }}
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

export const OnBoarding = (translate(['general', 'onBoarding'])(
  OnBoardingInner
): ComponentType<OnBoardingProps>);
