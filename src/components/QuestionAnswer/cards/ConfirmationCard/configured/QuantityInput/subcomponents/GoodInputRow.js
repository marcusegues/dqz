import React from 'react';
import Touchable from 'react-native-platform-touchable';
import { View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { CategoriesInfo } from '../../../../../../../model/constants';
import { moderateScale } from '../../../../../../../styles/Scaling';
import QuantityIcon from '../../../../../../General Components/QuantityIcon';
import CategoryIcon from './subcomponents/CategoryIcon';
import CardRowText from '../../../../subcomponents/CardRowText';
import CardRowSubText from '../../../../subcomponents/CardRowSubText';

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

  priceText: {
    paddingRight: 8,
    fontFamily: 'roboto_regular',
    fontSize: 18,
    color: '#24253D',
  },
  chevronRight: {
    alignSelf: 'center',
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
  totalQuantity,
  mainCategory,
}) => (
  <Touchable onPress={onShowQuantityInputModal}>
    <View style={ownStyles.container}>
      <CategoryIcon
        source={
          category === 'Cigarettes' || category === 'Tobacco' ? cigarette : meat
        }
      />
      <View style={ownStyles.rowMainTextContainer}>
        <CardRowText text={category} />
        <CardRowSubText text={mainCategory} />
        <View style={{ marginTop: 10 }}>
          <QuantityIcon
            quantity={totalQuantity}
            unit={CategoriesInfo.get(category).get('unit')}
          />
        </View>
      </View>
      <View style={ownStyles.chevronRight}>
        <Entypo name="chevron-right" size={moderateScale(30)} color="#24253D" />
      </View>
    </View>
  </Touchable>
);

export default GoodInputRow;
