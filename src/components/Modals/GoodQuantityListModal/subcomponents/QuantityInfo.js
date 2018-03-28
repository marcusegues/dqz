// @flow
import React from 'react';
import { translate } from 'react-i18next';
import type { ComponentType } from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { CardHeaderText } from '../../../QuestionAnswer/Cards/subcomponents/CardHeaderText';
import { QuantityIcon } from '../../../General Components/GreyBox/configured/QuantityIcon';
import { verticalScale } from '../../../../styles/Scaling';
import { CategoriesInfo } from '../../../../model/constants';
import type { Category } from '../../../../model/types/basketPeopleAmountsTypes';
import type { TFunction } from '../../../../types/generalTypes';
import { formatQuantity } from '../../../../utils/declaration/declaration';

type QuantityInfoProps = {
  category: Category,
  totalQuantity: number,
};

const QuantityInfoInner = ({
  category,
  totalQuantity,
  t,
}: QuantityInfoProps & { t: TFunction }) => (
  <View
    style={{
      flexDirection: 'column',
      alignSelf: 'flex-start',
      alignItems: 'flex-start',
      margin: verticalScale(16),
    }}
  >
    <CardHeaderText text={t(`categories:${category}`)} />
    <View style={{ marginTop: 10 }}>
      <QuantityIcon
        quantity={formatQuantity(category, totalQuantity)}
        unit={t(`units:${CategoriesInfo.getIn([category, 'unit'], '')}`, {
          count: totalQuantity,
        })}
      />
    </View>
  </View>
);

export const QuantityInfo = (translate([
  'mainCategories',
  'categories',
  'units',
])(QuantityInfoInner): ComponentType<QuantityInfoProps>);
