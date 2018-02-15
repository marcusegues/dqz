// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { connect } from 'react-redux';
// $FlowFixMe
import { View } from 'react-native';
import type { FlatAmount } from '../../../../../../model/utils';
import { rowStyles } from '../../../../styles/rowStyles';
import { Row } from '../../../../Row';
import { CardRowSubText } from '../../../../../QuestionAnswer/cards/subcomponents/CardRowSubText';
import { getCurrencies } from '../../../../../../reducers';
import type { CurrencyObject } from '../../../../../../model/currencies';
import { currencyPicker } from '../../../../../Modals/CurrencyPickerModal/currencyPickerData';
import { FlagAndCurrencyAmount } from '../../../../../General Components/FlagAndCurrencyAmount';

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
  const flag = currencyPicker
    .filter(c => c.value === currency)
    .map(c => c.flag);

  return (
    <Row
      borderTop={borderTop}
      borderBottom={borderBottom}
      width={fullWidth ? '100%' : '95%'}
    >
      <View style={rowStyles.rowContent}>
        <FlagAndCurrencyAmount
          flag={flag}
          currency={currency}
          amount={amount}
        />
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
