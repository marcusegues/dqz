// @flow
import React from 'react';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
// $FlowFixMe
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Row from '../../../../../../Rows/Row';
import CardRowText from '../../../../subcomponents/CardRowText';
import { moderateScale } from '../../../../../../../styles/Scaling';
import { GREY } from '../../../../../../../styles/colors';
import type { Currency } from '../../../../../../../model/currencies';

type AmountsRowProps = {
  amount: number,
  onDelete: () => void,
  currency: Currency,
  borderTop?: boolean,
};

const AmountsRow = ({
  amount,
  onDelete,
  currency,
  borderTop,
}: AmountsRowProps) => (
  <Row borderTop={borderTop}>
    <View style={{ flex: 1 }}>
      <CardRowText text={`${currency} ${amount}`} />
    </View>
    <Touchable onPress={onDelete}>
      <MaterialIcons name="cancel" size={moderateScale(28)} color={GREY} />
    </Touchable>
  </Row>
);

AmountsRow.defaultProps = {
  borderTop: false,
};

export default AmountsRow;
