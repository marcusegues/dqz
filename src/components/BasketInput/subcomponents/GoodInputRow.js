import React from 'react';
import { View, Text, Button } from 'react-native';

const GoodInputRow = ({
  category,
  quantity,
  onDeclarationBasketChangeQuantity,
}) => (
  <View>
    <Text>{`Category: ${category} Quantity: ${quantity}`}</Text>
    <Button
      title={`Add ${category}`}
      onPress={() => onDeclarationBasketChangeQuantity(category, 5)}
    />
  </View>
);

export default GoodInputRow;
