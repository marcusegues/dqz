// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { ReceiptNotificationBadge } from './ReceiptNotificationBadge';
import { mainMenuHeaderRightStyle } from '../styles/MainMenuHeaderRight';

import type { Language } from '../../../i18n/types/locale';
import type { Navigation } from '../../../types/generalTypes';
import { LanguageSelect } from './LanguageSelect';

type MainMenuHeaderRightProps = {
  language: Language,
  navigation: Navigation,
};

export const MainMenuHeaderRight = ({
  navigation,
  language,
}: MainMenuHeaderRightProps) => (
  <View style={mainMenuHeaderRightStyle.container}>
    <ReceiptNotificationBadge navigation={navigation} />
    <LanguageSelect language={language} navigation={navigation} />
  </View>
);
