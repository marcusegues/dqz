import React from 'react';
import { View, Text } from 'react-native';

const QuantityInfo = ({ mainCategory, category, totalQuantity }) => (
  <View style={{ flexDirection: 'column' }}>
    <Text>{category}</Text>
    <Text>{mainCategory}</Text>
    <Text>{totalQuantity}</Text>
  </View>
);

export default QuantityInfo;
