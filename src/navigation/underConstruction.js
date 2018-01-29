// @flow
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
// $FlowFixMe
import { Text, View } from 'react-native';
import { RedButton } from '../components/Buttons/RedButton';
import { fetchGenericData, storeItem } from '../asyncStorage/storageApi';

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
        storeItem('test', new Date());
      }}
    />
    <RedButton
      text="Read"
      onPress={() => {
        fetchGenericData('test')
          // eslint-disable-next-line no-console
          .then(v => console.log(`Value: ${v}`))
          .catch();
      }}
    />
  </View>
);
