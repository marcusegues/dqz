import React from 'react';
import { View, Text } from 'react-native';
import { getQuantity } from '../../model/configurationApi';
import GoodInputRow from './subcomponents/GoodInputRow';

// Notes: remember that to have a look at configurationApi to find out which methods
// are available on the basket.

const BasketInput = ({
  basket,
  categoriesByMainCategory,
  onDeclarationBasketChangeQuantity,
}) => {
  const components = categoriesByMainCategory
    .entrySeq()
    .map(([mainCategory, categories]) => {
      const subcomponents = categories.map(category => (
        <GoodInputRow
          key={category}
          category={category}
          quantity={getQuantity(basket, category)}
          onDeclarationBasketChangeQuantity={onDeclarationBasketChangeQuantity}
        />
      ));

      return (
        <View key={mainCategory}>
          <Text>{`${mainCategory}`}</Text>
          {subcomponents}
        </View>
      );
    });

  return <View>{components}</View>;
};

export default BasketInput;
