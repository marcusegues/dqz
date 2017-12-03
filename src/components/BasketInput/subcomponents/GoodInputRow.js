import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { CategoriesInfo } from '../../../model/constants';
import { moderateScale } from '../../../styles/Scaling';
import * as colors from '../../../styles/colors';

const ownStyles = {
  container: {
    borderTopWidth: 1,
    borderColor: '#E0E0E1',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  leftSquare: {
    height: 64,
    width: 64,
    backgroundColor: '#D8D8D8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftSquareText: {
    fontSize: moderateScale(14),
    color: '#898989',
    fontFamily: 'roboto_regular',
  },
  rowMainTextContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: 16,
  },
  mainCategoryText: {
    fontFamily: 'roboto_medium',
    fontSize: moderateScale(14),
    color: '#24253D',
  },
  categoryText: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(12),
    color: '#898989',
  },
  priceAndQuantityContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  priceText: {
    paddingRight: 8,
    fontFamily: 'roboto_regular',
    fontSize: 18,
    color: '#24253D',
  },
  quantityContainer: {
    paddingHorizontal: 6,
    backgroundColor: '#9B9B9B',
    borderRadius: 3,
  },
  quantityText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'roboto_regular',
  },
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableImage: {
    width: 30,
    height: 30,
  },
};

const GoodInputRow = ({
  category,
  quantity,
  onDeclarationBasketChangeQuantity,
  mainCategory,
}) => (
  <View style={ownStyles.container}>
    <View style={ownStyles.leftSquare} />

    <View style={ownStyles.rowMainTextContainer}>
      <View>
        <Text style={ownStyles.mainCategoryText}>{category}</Text>
        <Text style={ownStyles.categoryText}>{mainCategory}</Text>
      </View>
      <View style={ownStyles.priceAndQuantityContainer}>
        <View style={ownStyles.quantityContainer}>
          <Text style={ownStyles.quantityText}>{`${
            quantity
          } ${CategoriesInfo.get(category).get('unit')}`}</Text>
        </View>
      </View>
    </View>

    <TouchableOpacity
      onPress={() => onDeclarationBasketChangeQuantity(category, -10)}
      style={ownStyles.touchable}
    >
      <Entypo
        name="circle-with-minus"
        size={moderateScale(50)}
        color={quantity ? colors.MAIN_RED : 'lightgray'}
      />
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => onDeclarationBasketChangeQuantity(category, -1)}
      style={ownStyles.touchable}
    >
      <Entypo
        name="circle-with-minus"
        size={moderateScale(30)}
        color={quantity ? colors.MAIN_RED : 'lightgray'}
      />
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => onDeclarationBasketChangeQuantity(category, 1)}
      style={ownStyles.touchable}
    >
      <Entypo
        name="circle-with-plus"
        size={moderateScale(30)}
        color={colors.MAIN_RED}
      />
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => onDeclarationBasketChangeQuantity(category, 10)}
      style={ownStyles.touchable}
    >
      <Entypo
        name="circle-with-plus"
        size={moderateScale(50)}
        color={colors.MAIN_RED}
      />
    </TouchableOpacity>
  </View>
);

export default GoodInputRow;
