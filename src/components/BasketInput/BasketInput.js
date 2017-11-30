import React from 'react';
import { View, Text, Button } from 'react-native';
import { getQuantity } from '../../model/configurationApi';
import GoodInputRow from './subcomponents/GoodInputRow';

// Notes: remember that to have a look at configurationApi to find out which methods
// are available on the basket.

const BasketInput = ({
  basket,
  categoriesByMainCategory,
  onDeclarationBasketChangeQuantity,
}) => {
  const components = [];
  const whatever = categoriesByMainCategory
    .entrySeq()
    .map(([mainCategory, categories]) => (
      <View key={mainCategory}>
        <Text>{`${mainCategory}`}</Text>
        <View>
          {components}
          <View>
            <Text>Example of usage of methods:</Text>
            <Text>{`Meat quantity: ${getQuantity(basket, 'Meat')}`}</Text>
            <Button
              title="Add meat"
              onPress={() => onDeclarationBasketChangeQuantity('Meat', 5)}
            />
          </View>
        </View>
      </View>
    ));
  console.log(whatever);
  // eslint-disable-next-line no-debugger
  debugger;
};

export default BasketInput;
