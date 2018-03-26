// @flow
import React from 'react';
// $FlowFixMe
import { View, ScrollView } from 'react-native';
import type { Set as ImmutableSetType } from 'immutable';
import { getTotalQuantity } from '../../../../../../model/configurationApi';
import { GoodInputRow } from './subcomponents/GoodInputRow';
import { moderateScale } from '../../../../../../styles/Scaling';
import type {
  Basket,
  Category,
} from '../../../../../../model/types/basketPeopleAmountsTypes';
import type { MainCategory } from '../../../../../../types/reducers/declaration';
import { getSubCategories } from '../../../../../../types/reducers/declaration';

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

type QuantityInputProps = {
  onShowQuantityInputModal: (
    modalCategory: Category,
    modalMainCategory: MainCategory
  ) => void,
  basket: Basket,
  mainCategories: ImmutableSetType<MainCategory>,
};

export const QuantityInput = ({
  onShowQuantityInputModal,
  basket,
  mainCategories,
}: QuantityInputProps) => {
  const components = mainCategories
    .filter(mainCategory => mainCategory !== 'OtherGoods')
    .map(mainCategory => {
      const categories = getSubCategories(mainCategory);
      const subcomponents = categories.map(category => (
        <GoodInputRow
          onShowQuantityInputModal={() => {
            onShowQuantityInputModal(category, mainCategory);
          }}
          key={category}
          category={category}
          totalQuantity={getTotalQuantity(basket, category)}
          basket={basket}
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
