// @flow
import React from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View } from 'react-native';
import CardRowSubText from '../../QuestionAnswer/cards/subcomponents/CardRowSubText';
import QuantityIcon from '../../General Components/QuantityIcon';
import CardRowText from '../../QuestionAnswer/cards/subcomponents/CardRowText';
import Row from '../../Rows/Row';
import type { MainCategory } from '../../../types/reducers/declaration';
import type { Category } from '../../../model/types/basketPeopleAmountsTypes';

type DutyRowProps = {
  mainCategory: MainCategory,
  category: Category,
  quantity: number,
  duty: number,
  borderTop?: boolean,
  t: (field: string, params?: {}) => string,
};

const DutyRow = ({
  mainCategory,
  category,
  quantity,
  duty,
  borderTop,
  t,
}: DutyRowProps) => (
  <Row borderTop={borderTop}>
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <CardRowText text={t(`categories:${category}`)} />
      <CardRowSubText text={t(`mainCategories:${mainCategory}`)} />
    </View>
    <QuantityIcon quantity={quantity} category={category} />
    <View style={{ marginLeft: 30 }}>
      <CardRowText text={(+duty).toFixed(2)} />
    </View>
  </Row>
);

DutyRow.defaultProps = {
  borderTop: false,
};

export default translate(['mainCategories', 'categories'])(DutyRow);
