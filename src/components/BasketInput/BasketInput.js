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
  categoriesByMainCategory.entrySeq().forEach(([mainCategory, categories]) => {
    const subcomponents = [];
    categories.forEach(category => {
      subcomponents.push(
        <GoodInputRow
          key={category}
          mainCategory={mainCategory}
          category={category}
          quantity={getQuantity(basket, category)}
          onDeclarationBasketChangeQuantity={onDeclarationBasketChangeQuantity}
        />,
      );
    });
    components.push(
      <View key={mainCategory}>
        <Text>{`${mainCategory}`}</Text>
        {subcomponents}
      </View>,
    );
  });
  console.log(components);
  return <View>{components}</View>;
};

export default BasketInput;
