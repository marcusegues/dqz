import React from 'react';
import { View, Text } from 'react-native';

const QuantityInfo = ({ mainCategory, category, quantity }) => (
  <View style={{ flexDirection: 'column' }}>
    <Text>{category}</Text>
    <Text>{mainCategory}</Text>
    <View>{quantity}</View>
  </View>
);
