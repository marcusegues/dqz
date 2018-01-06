// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { CardRowSubText } from '../../QuestionAnswer/cards/subcomponents/CardRowSubText';
import QuantityIcon from '../../General Components/QuantityIcon';
import { CardRowText } from '../../QuestionAnswer/cards/subcomponents/CardRowText';
import Row from '../../Rows/Row';

type OverviewRowProps = {
  title: string,
  subtitle: string,
  quantity: number,
  result: string,
  borderTop?: boolean,
  unit: string,
};

const OverviewRow = ({
  title,
  subtitle,
  quantity,
  result,
  unit,
  borderTop,
}: OverviewRowProps) => (
  <Row borderTop={borderTop}>
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <CardRowText text={title} />
      <CardRowSubText text={subtitle} />
    </View>
    <QuantityIcon quantity={quantity} unit={unit} />
    <View style={{ marginLeft: 30 }}>
      <CardRowText text={result} />
    </View>
  </Row>
);

OverviewRow.defaultProps = {
  borderTop: false,
};

export default OverviewRow;
