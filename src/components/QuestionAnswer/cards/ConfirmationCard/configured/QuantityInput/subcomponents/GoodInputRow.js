import React from 'react';
import Touchable from 'react-native-platform-touchable';
import { View, Text, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { CategoriesInfo } from '../../../../../../../model/constants';
import { moderateScale } from '../../../../../../../styles/Scaling';

const ownStyles = {
  container: {
    flex: 1,
    width: '100%',
    borderTopWidth: 1,
    justifyContent: 'space-between',

    borderColor: '#E0E0E1',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 0,
  },
  categoryIcon: {
    height: 64,
    width: 64,
    // backgroundColor: '#D8D8D8',
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

const cigarette = require('../../../../../../../../assets/icons/cigarette_new.png');
const meat = require('../../../../../../../../assets/icons/meat_new.png');

const GoodInputRow = ({
  onShowQuantityInputModal,
  category,
  quantity,
  mainCategory,
}) => (
  <Touchable onPress={onShowQuantityInputModal}>
    <View style={ownStyles.container}>
      <View style={ownStyles.categoryIcon}>
        <Image
          source={
            category === 'Cigarettes' || category === 'Tobacco'
              ? cigarette
              : meat
          }
          style={{ width: 40, height: 40 }}
          resizeMode="contain"
        />
      </View>

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
        </View>
      </View>
      <View style={ownStyles.chevronRight}>
        <Entypo name="chevron-right" size={moderateScale(30)} color="#24253D" />
      </View>
    </View>
  </Touchable>
);

export default GoodInputRow;
