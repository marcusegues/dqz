// @flow
import React from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View } from 'react-native';
import CardHeaderText from '../../../QuestionAnswer/cards/subcomponents/CardHeaderText';
import CardHeaderSubText from '../../../QuestionAnswer/cards/subcomponents/CardHeaderSubText';
import QuantityIcon from '../../../General Components/QuantityIcon';
import { verticalScale } from '../../../../styles/Scaling';
import { CategoriesInfo } from '../../../../model/constants';
import type { MainCategory } from '../../../../types/reducers/declaration';
import type { Category } from '../../../../model/types/basketPeopleAmountsTypes';

type QuantityInfoProps = {
  mainCategory: MainCategory,
  category: Category,
  totalQuantity: number,
  t: (field: string, params?: {}) => string,
};

const QuantityInfo = ({
  mainCategory,
  category,
  totalQuantity,
  t,
}: QuantityInfoProps) => (
  <View
    style={{
      flexDirection: 'column',
      alignSelf: 'flex-start',
      alignItems: 'flex-start',
      margin: verticalScale(16),
    }}
  >
    <CardHeaderText text={t(`categories:${category}`)} />
    <CardHeaderSubText text={t(`mainCategories:${mainCategory}`)} />
    <View style={{ marginTop: 10 }}>
      <QuantityIcon
        quantity={totalQuantity}
        unit={CategoriesInfo.getIn([category, 'unit'], '')}
      />
    </View>
  </View>
);

export default translate(['mainCategories', 'categories'])(QuantityInfo);
