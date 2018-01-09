// @flow
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
// $FlowFixMe
import { Text, View } from 'react-native';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const UnderConstruction = () => (
  <View style={style}>
    <Text style={{ fontSize: 64 }}>🚧🛃🚧</Text>
  </View>
);
