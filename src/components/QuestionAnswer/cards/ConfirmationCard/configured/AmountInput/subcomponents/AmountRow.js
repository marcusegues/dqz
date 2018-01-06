// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
// $FlowFixMe
import { View } from 'react-native';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import Row from '../../../../../../Rows/Row';
import { CardRowText } from '../../../../subcomponents/CardRowText';
import { moderateScale } from '../../../../../../../styles/Scaling';
import { GREY } from '../../../../../../../styles/colors';
import type {
  Currency,
  CurrencyObject,
} from '../../../../../../../model/currencies';
import { CardRowSubText } from '../../../../subcomponents/CardRowSubText';
import { getCurrencies } from '../../../../../../../reducers';

type AmountRowProps = {
  amount: number,
  onDelete: () => void,
  currency: Currency,
};

const AmountRowInner = ({
  amount,
  onDelete,
  currency,
  currencyObject,
}: AmountRowProps & { currencyObject: CurrencyObject }) => (
  <Row borderTop>
    <View style={{ flex: 1 }}>
      <CardRowText text={`${currency} ${amount}`} />
      <CardRowSubText
        text={`~CHF ${(currencyObject[currency] * amount).toFixed(2)}`}
      />
    </View>
    <Touchable onPress={onDelete}>
      <MaterialIcons name="cancel" size={moderateScale(28)} color={GREY} />
    </Touchable>
  </Row>
);

const mapStateToProps = state => ({
  currencyObject: getCurrencies(state),
});

export const AmountRow = (connect(mapStateToProps)(
  AmountRowInner
): ComponentType<AmountRowProps>);
