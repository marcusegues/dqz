import React from 'react';
import { View, Text, Button } from 'react-native';
import { getQuantity } from '../../model/configurationApi';

// Notes: remember that to have a  look at configurationApi to find out which methods
// are available on the basket.

const BasketInput = ({
  basket,
  categoriesByMainCategory,
  onDeclarationBasketChangeQuantity,
}) => (
  <View>
    <Text>{`Meat quantity: ${getQuantity(basket, 'Meat')}`}</Text>
    <Button
      title="Add meat"
      onPress={() => onDeclarationBasketChangeQuantity('Meat', 5)}
    />
  </View>
);

export default BasketInput;
