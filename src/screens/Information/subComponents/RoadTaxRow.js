// @flow
import React from 'react';
// $FlowFixMe
import { Image, View } from 'react-native';
import { CardRowText } from '../../../components/QuestionAnswer/Cards/subcomponents/CardRowText';
import { Row } from '../../../components/Rows/Row';
import { AmountIcon } from '../../../components/General Components/GreyBox/configured/AmountIcon';
import type { Children } from '../../../types/generalTypes';

const ownStyles = pendant => ({
  innerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  amountInputContainer: {
    flexDirection: pendant ? 'column' : 'row',
    alignItems: 'flex-end',
  },
  categoryTitle: {
    alignSelf: 'flex-start',
    width: pendant ? '60%' : '62%',
  },
});

type RoadTaxRowProps = {
  borderTop?: boolean,
  borderBottom?: boolean,
  children?: Children,
  source: string,
  imageStyle: {},
  title: string,
  amount: number,
  pendant?: boolean,
};

export const RoadTaxRow = ({
  borderTop,
  borderBottom,
  source,
  imageStyle,
  title,
  pendant,
  amount,
  children,
}: RoadTaxRowProps) => (
  <Row
    width="100%"
    borderTop={borderTop}
    borderBottom={borderBottom}
    styles={{ marginBottom: pendant ? 16 : 0 }}
  >
    <View style={ownStyles(pendant).categoryTitle}>
      <CardRowText text={title} style={{ marginVertical: 16 }} />
    </View>
    <View style={ownStyles().innerContainer}>
      <Image source={source} resizeMode="contain" style={imageStyle} />
      <View style={ownStyles(pendant).amountInputContainer}>
        <AmountIcon amount={amount} currency="CHF" />
        {children}
      </View>
    </View>
  </Row>
);

RoadTaxRow.defaultProps = {
  borderTop: false,
  children: [],
  pendant: false,
  borderBottom: true,
};
