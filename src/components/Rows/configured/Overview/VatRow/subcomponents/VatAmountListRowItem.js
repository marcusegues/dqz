// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { connect } from 'react-redux';
// $FlowFixMe
import { View } from 'react-native';
import type { FlatAmount } from '../../../../../../model/utils';
import { rowStyles } from '../../../../styles/rowStyles';
import { CardRowText } from '../../../../../QuestionAnswer/cards/subcomponents/CardRowText';
import { Row } from '../../../../Row';
import { CardRowSubText } from '../../../../../QuestionAnswer/cards/subcomponents/CardRowSubText';
import { getCurrencies } from '../../../../../../reducers';
import type { CurrencyObject } from '../../../../../../model/currencies';

type VatAmountListRowItemProps = {
  flatAmount: FlatAmount,
  fullWidth?: boolean,
  borderTop?: boolean,
  borderBottom?: boolean,
};

type ReduxInject = {
  currencyObject: CurrencyObject,
};

const VatAmountListRowItemInner = ({
  flatAmount,
  fullWidth = false,
  borderTop = false,
  borderBottom = false,
  currencyObject,
}: VatAmountListRowItemProps & ReduxInject) => {
  const { currency, amount } = flatAmount;
  return (
    <Row
      borderTop={borderTop}
      borderBottom={borderBottom}
      fullWidth={fullWidth}
    >
      <View style={rowStyles.rowContent}>
        <View style={{ flex: 1 }}>
          <CardRowText text={`${currency} ${amount}`} />
        </View>
        <View style={{ flex: 1 }}>
          <CardRowSubText
            text={`~CHF ${(currencyObject[currency] * amount).toFixed(2)}`}
          />
        </View>
      </View>
    </Row>
  );
};

const mapStateToProps = state => ({
  currencyObject: getCurrencies(state),
});

export const VatAmountListRowItem = (connect(mapStateToProps)(
  VatAmountListRowItemInner
): ComponentType<VatAmountListRowItemProps>);
