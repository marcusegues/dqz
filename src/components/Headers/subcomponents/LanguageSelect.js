// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { moderateScale } from '../../../styles/Scaling';
import { GREY } from '../../../styles/colors';
import type { Language } from '../../../i18n/types/locale';
import type { Navigation } from '../../../types/generalTypes';

type LanguageSelectProps = {
  language: Language,
};

export const LanguageSelect = ({ language }: LanguageSelectProps) => (
  <Touchable onPress={() => {}}>
    <Text>{language}</Text>
  </Touchable>
);
