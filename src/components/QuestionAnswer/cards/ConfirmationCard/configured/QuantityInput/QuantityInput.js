import React from 'react';
import { View, ScrollView, Platform } from 'react-native';
import { getQuantity } from '../../../../../../model/configurationApi';
import GoodInputRow from './subcomponents/GoodInputRow';
import { moderateScale } from '../../../../../../styles/Scaling';

const ownStyles = {
  mainContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 30,
    width: '100%',
  },
  subcomponentsContainer: {
    width: '100%',
    paddingHorizontal: 5,
  },
  scrollView: {
    width: '95%',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 5, width: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 6,
      },
    }),
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
  onBasketChangeQuantity,
}) => {
  const components = categoriesByMainCategory
    .entrySeq()
    .map(([mainCategory, categories]) => {
      const subcomponents = categories.map(category => (
        <GoodInputRow
          key={category}
          category={category}
          quantity={getQuantity(basket, category)}
          onBasketChangeQuantity={onBasketChangeQuantity}
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
    <View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        flexDirection: 'column',
      }}
    >
      <ScrollView contentContainerStyle={ownStyles.scrollView}>
        {components}
      </ScrollView>
    </View>
  );
};

export default BasketInput;
