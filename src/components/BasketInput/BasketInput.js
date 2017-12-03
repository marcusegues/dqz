import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { getQuantity } from '../../model/configurationApi';
import GoodInputRow from './subcomponents/GoodInputRow';
import { moderateScale } from '../../styles/Scaling';
import RedButton from '../Buttons/RedButton';

// Notes: remember that to have a look at configurationApi to find out which methods
// are available on the basket.

const ownStyles = {
  mainContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 30,
  },
  subcomponentsContainer: {
    paddingHorizontal: 5,
  },
  scrollView: {
    borderTopWidth: 1,
    borderColor: '#E0E0E1',
    marginHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  cardMainTitle: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(24),
    color: '#141414',
    padding: 15,
  },
};

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
          mainCategory={mainCategory}
        />
      ));

      return (
        <View style={ownStyles.subcomponentsContainer} key={mainCategory}>
          {subcomponents}
        </View>
      );
    });

  return (
    <View style={ownStyles.mainContainer}>
      <ScrollView style={ownStyles.scrollView}>
        <Text style={ownStyles.cardMainTitle}>Wareneingabe:</Text>
        {components}
      </ScrollView>
      <RedButton text="ZUR BEZAHLUNG" onPress={() => {}} />
    </View>
  );
};

export default BasketInput;
