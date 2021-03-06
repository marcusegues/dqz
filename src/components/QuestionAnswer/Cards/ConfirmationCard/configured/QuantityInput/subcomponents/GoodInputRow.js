// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {
  moderateScale,
  verticalScale,
} from '../../../../../../../styles/Scaling';
import { QuantityIcon } from '../../../../../../General Components/GreyBox/configured/QuantityIcon';
import { CategoryIcon } from './subcomponents/CategoryIcon';
import { CardRowText } from '../../../../subcomponents/CardRowText';
import type { Category } from '../../../../../../../model/types/basketPeopleAmountsTypes';
import { CategoriesInfo } from '../../../../../../../model/constants';
import type { TFunction } from '../../../../../../../types/generalTypes';
import { formatQuantity } from '../../../../../../../utils/declaration/declaration';

const ownStyles = {
  container: {
    flex: 1,
    width: '100%',
    borderTopWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',

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
    alignItems: 'flex-start',
    marginLeft: verticalScale(16),
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

const AlcHard = require('../../../../../../../../assets/icons/AlcHard.png');
const AlcSoft = require('../../../../../../../../assets/icons/AlcSoft.png');
const Butter = require('../../../../../../../../assets/icons/Butter.png');
const Meat = require('../../../../../../../../assets/icons/Meat.png');
const Oils = require('../../../../../../../../assets/icons/Oils.png');
const OtherGoods = require('../../../../../../../../assets/icons/OtherGoods.png');
const Tobacco = require('../../../../../../../../assets/icons/OtherTobacco.png');
const Cigarettes = require('../../../../../../../../assets/icons/Tabak.png');

const assets: { [Category | 'OtherGoods']: string } = {
  AlcHard,
  AlcSoft,
  Butter,
  Meat,
  Oils,
  OtherGoods,
  Tobacco,
  Cigarettes,
};

export const getSource = (category: Category): string => {
  const categoriesWithIcons = new Set([
    'AlcHard',
    'AlcSoft',
    'Butter',
    'Meat',
    'Oils',
    'Tobacco',
    'Cigarettes',
  ]);
  if (categoriesWithIcons.has(category)) {
    return assets[category];
  }
  return assets.OtherGoods;
};

type GoodInputRowProps = {
  onShowQuantityInputModal: () => void,
  category: Category,
  totalQuantity: number,
};

const GoodInputRowInner = ({
  onShowQuantityInputModal,
  category,
  totalQuantity,
  t,
}: GoodInputRowProps & { t: TFunction }) => (
  <Touchable onPress={onShowQuantityInputModal}>
    <View style={ownStyles.container}>
      <CategoryIcon source={getSource(category)} />
      <View style={ownStyles.rowMainTextContainer}>
        <CardRowText text={t(`categories:${category}`)} />
        <View style={{ marginTop: 10 }}>
          <QuantityIcon
            quantity={formatQuantity(category, totalQuantity)}
            unit={t(`units:${CategoriesInfo.getIn([category, 'unit'], '')}`, {
              count: totalQuantity,
            })}
          />
        </View>
      </View>
      <View style={ownStyles.chevronRight}>
        <Entypo name="chevron-right" size={moderateScale(30)} color="#24253D" />
      </View>
    </View>
  </Touchable>
);

export const GoodInputRow = (translate([
  'mainCategories',
  'categories',
  'units',
])(GoodInputRowInner): ComponentType<GoodInputRowProps>);
