// @flow
import React from 'react';
// $FlowFixMe
import { Text, View } from 'react-native';
import { translate } from 'react-i18next';
import type { ComponentType } from 'react';
import { CardRowSubText } from '../../QuestionAnswer/cards/subcomponents/CardRowSubText';
import { QuantityIcon } from '../../General Components/QuantityIcon';
import { CardRowText } from '../../QuestionAnswer/cards/subcomponents/CardRowText';
import { Row } from '../../Rows/Row';
import { AllowanceIcon } from './AllowanceIcon';
import type { TFunction } from '../../../types/generalTypes';

type OverviewRowProps = {
  title: string,
  subtitle: string,
  quantity: number | string,
  result: string,
  borderTop?: boolean,
  allowance?: boolean,
  unit: string,
  t: TFunction,
};

const OverviewRowInner = ({
  title,
  subtitle,
  quantity,
  result,
  unit,
  borderTop,
  allowance,
  t,
}: OverviewRowProps) => (
  <Row borderTop={borderTop}>
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingRight: 5,
      }}
    >
      <CardRowText text={title} />
      <CardRowSubText text={subtitle} />
      {allowance ? (
        <AllowanceIcon text={t('overviewDutyFree')} quantity={5} unit={unit} />
      ) : (
        <Text />
      )}
    </View>
    <QuantityIcon quantity={quantity} unit={unit} />
    <View style={{ marginLeft: 30 }}>
      <CardRowText text={result} />
    </View>
  </Row>
);

OverviewRowInner.defaultProps = {
  borderTop: false,
  allowance: false,
};

export const OverviewRow = (translate(['receipt'])(
  OverviewRowInner
): ComponentType<{}>);
