// @flow
import React from 'react';
import Touchable from 'react-native-platform-touchable';
import { Text } from 'react-native';
import { languageButton, languageButtonText } from '../styles/languageButton';
import type {
  LanguageButtonSizeType,
  LanguageButtonSelectedType,
  LanguageCodeType,
} from '../types';

type PropsType = {
  size: LanguageButtonSizeType,
  selected: LanguageButtonSelectedType,
  languageCode: LanguageCodeType,
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
