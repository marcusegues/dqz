import React from 'react';
import Touchable from 'react-native-platform-touchable';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { CategoriesInfo } from '../../../../../../../model/constants';
import { moderateScale } from '../../../../../../../styles/Scaling';
import * as colors from '../../../../../../../styles/colors';

const ownStyles = {
  container: {
    flex: 1,
    width: '100%',
    borderTopWidth: StyleSheet.hairlineWidth,
    justifyContent: 'space-between',

    borderColor: '#E0E0E1',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 0,
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
    justifyContent: 'flex-start',
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
    flex: 1,
    // borderWidth: 1,

    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  priceText: {
    paddingRight: 8,
    fontFamily: 'roboto_regular',
    fontSize: 18,
    color: '#24253D',
  },
  chevronRight: {
    alignSelf: 'center',
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
  onShowQuantityInputModal,
  category,
  quantity,
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
          <Text
            style={ownStyles.quantityText}
          >{`${quantity} ${CategoriesInfo.get(category).get('unit')}`}</Text>
        </View>
        <View>
          <Touchable onPress={onShowQuantityInputModal}>
            <MaterialIcons
              name="info-outline"
              size={moderateScale(13)}
              color={colors.BLACK}
            />
          </Touchable>
        </View>
      </View>
    </View>
    <View style={ownStyles.chevronRight}>
      <Touchable onPress={onShowQuantityInputModal}>
        <Entypo
          name="chevron-right"
          size={moderateScale(22)}
          color={colors.BLACK}
        />
      </Touchable>
    </View>
  </View>
);

export default GoodInputRow;
