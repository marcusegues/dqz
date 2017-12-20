import React from 'react';
import { View, Text } from 'react-native';

const QuantityInputInfo = ({ duty }) => (
  <View>
    <Text>Zollabgabe:</Text>
    <Text>{duty}</Text>
  </View>
);

export default QuantityInputInfo;
