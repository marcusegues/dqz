// @flow
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
// $FlowFixMe
import { Text, View } from 'react-native';
import { RedButton } from '../components/Buttons/RedButton';
import {
  storeCurrencyObject,
  fetchCurrencyObject,
} from '../asyncStorage/storageApi';
import { currencyExample } from '../model/currencies';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const UnderConstruction = () => (
  <View style={style}>
    <Text style={{ fontSize: 64 }}>🚧🛃🚧</Text>
    <Text>Async Test</Text>
    <RedButton
      text="Write"
      onPress={() => {
        storeCurrencyObject(currencyExample);
      }}
    />
    <RedButton
      text="Read"
      onPress={() => {
        fetchCurrencyObject()
          // eslint-disable-next-line no-console
          .then(v => console.log(v))
          .catch();
      }}
    />
  </View>
);
