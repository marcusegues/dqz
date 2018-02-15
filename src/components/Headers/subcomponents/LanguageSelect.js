// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import type { Language } from '../../../i18n/types/locale';
import type { Navigation } from '../../../types/generalTypes';

type LanguageSelectProps = {
  language: Language,
  navigation: Navigation,
};

export const LanguageSelect = ({
  language,
  navigation,
}: LanguageSelectProps) => (
  <Touchable onPress={() => navigation.navigate('OnBoarding')}>
    <Text style={{ fontFamily: 'roboto_regular', color: '#757575' }}>
      {language.toUpperCase()}
    </Text>
  </Touchable>
);
