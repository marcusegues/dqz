// @flow
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
// $FlowFixMe
import { Text, View } from 'react-native';
import { RedButton } from '../components/Buttons/RedButton';
import {
  storeSettingsAcceptRate,
  storeSettingsHasLanguage,
} from '../asyncStorage/storageApi';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const UnderConstruction = () => (
  <View style={style}>
    <Text style={{ fontSize: 64 }}>🚧🛃🚧</Text>
    <Text>Developer menu</Text>
    <RedButton
      text="Reset tax acceptance"
      onPress={() => {
        storeSettingsAcceptRate(false);
      }}
    />
    <RedButton
      text="Set EN language"
      onPress={() => {
        storeSettingsHasLanguage('en');
      }}
    />
    <RedButton
      text="Set DE language"
      onPress={() => {
        storeSettingsHasLanguage('de');
      }}
    />
  </View>
);
