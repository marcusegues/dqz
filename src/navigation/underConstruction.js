/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Text, View } from 'react-native';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const UnderConstruction = () => (
  <View style={style}>
    <Text style={{ fontSize: 48 }}>🚧</Text>
  </View>
);
