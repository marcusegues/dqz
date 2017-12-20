import React from 'react';
import { View, ScrollView } from 'react-native';
import { getTotalQuantity } from '../../../../../../model/configurationApi';
import GoodInputRow from './subcomponents/GoodInputRow';
import { moderateScale } from '../../../../../../styles/Scaling';

const ownStyles = {
  mainContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  subcomponentsContainer: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#E0E0E1',
  },
  scrollView: {
    width: '100%',
    borderColor: '#E0E0E1',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  cardMainTitle: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(24),
    color: '#141414',
    padding: 15,
  },
};

const QuantityInput = ({
  onShowQuantityInputModal,
  basket,
  categoriesByMainCategory,
}) => {
  const components = categoriesByMainCategory
    .entrySeq()
    .map(([mainCategory, categories]) => {
      const subcomponents = categories.map(category => (
        <GoodInputRow
          onShowQuantityInputModal={() => {
            onShowQuantityInputModal({ mainCategory, category });
          }}
          key={category}
          category={category}
          totalQuantity={getTotalQuantity(basket, category)}
          basket={basket}
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

export default QuantityInput;
