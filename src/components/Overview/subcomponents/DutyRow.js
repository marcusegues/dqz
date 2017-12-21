import React from 'react';
import { translate } from 'react-i18next';
import { View } from 'react-native';
import CardRowSubText from '../../QuestionAnswer/cards/subcomponents/CardRowSubText';
import QuantityIcon from '../../General Components/QuantityIcon';
import CardRowText from '../../QuestionAnswer/cards/subcomponents/CardRowText';
import Row from '../../Rows/Row';

const DutyRow = ({
  mainCategory,
  category,
  quantity,
  duty,
  borderTop = false,
  t,
}) => (
  <Row borderTop={borderTop}>
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <CardRowText text={t(`categories:${category}`)} />
      <CardRowSubText text={t(`mainCategories:${mainCategory}`)} />
    </View>
    <QuantityIcon quantity={quantity} category={category} />
    <View style={{ marginLeft: 30 }}>
      <CardRowText text={duty} />
    </View>
  </Row>
);

export default translate(['mainCategories', 'categories'])(DutyRow);
