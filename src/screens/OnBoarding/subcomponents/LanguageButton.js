// @flow
import React from 'react';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
// $FlowFixMe
import { Text } from 'react-native';
import { languageButton, languageButtonText } from '../styles/languageButton';
import type { Language } from '../../../i18n/types/locale';

export type LanguageButtonSizeType = 'small' | 'large';
export type LanguageButtonSelectedType = boolean;

type PropsType = {
  size: LanguageButtonSizeType,
  selected: LanguageButtonSelectedType,
  languageCode: Language,
  onPress: () => any,
};

export const LanguageButton = (props: PropsType) => {
  const { size, selected, languageCode, onPress } = props;
  return (
    <Touchable
      key={languageCode}
      background={Touchable.Ripple('#006699')}
      style={languageButton({
        size,
        selected,
      })}
      onPress={onPress}
    >
      <Text
        style={languageButtonText({
          size,
          selected,
        })}
      >
        {languageCode.toUpperCase()}
      </Text>
    </Touchable>
  );
};
