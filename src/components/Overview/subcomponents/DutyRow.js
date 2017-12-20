import React from 'react';
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
}) => (
  <Row borderTop={borderTop}>
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <CardRowText text={category} />
      <CardRowSubText text={mainCategory} />
    </View>
    <QuantityIcon quantity={quantity} category={category} />
    <View style={{ marginLeft: 30 }}>
      <CardRowText text={duty} />
    </View>
  </Row>
);

export default DutyRow;
