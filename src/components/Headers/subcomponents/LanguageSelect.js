// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import type { Language } from '../../../i18n/types/locale';
import type { Navigation } from '../../../types/generalTypes';
import { moderateScale } from '../../../styles/Scaling';

type LanguageSelectProps = {
  language: Language,
  navigation: Navigation,
};

export const LanguageSelect = ({
  language,
  navigation,
}: LanguageSelectProps) => (
  <Touchable
    onPress={() =>
      navigation.dispatch({
        type: 'NAVIGATE',
        screen: 'OnBoarding',
      })
    }
  >
    <Text
      style={{
        fontFamily: 'roboto_regular',
        color: '#757575',
        fontSize: moderateScale(16),
      }}
    >
      {language.toUpperCase()}
    </Text>
  </Touchable>
);
