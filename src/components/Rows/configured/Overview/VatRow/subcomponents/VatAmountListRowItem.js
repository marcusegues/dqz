// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { connect } from 'react-redux';
// $FlowFixMe
import { View } from 'react-native';
import type { FlatAmount } from '../../../../../../model/utils';
import { rowStyles } from '../../../../styles/rowStyles';
import { Row } from '../../../../Row';
import { CardRowSubText } from '../../../../../QuestionAnswer/Cards/subcomponents/CardRowSubText';
import { getCurrencies } from '../../../../../../reducers/selectors';
import type { CurrencyObject } from '../../../../../../model/currencies';
import { CurrencyFlagAndAmount } from '../../../../../General Components/CurrencyFlagAndAmount';
import { SwipeToDelete } from '../../../../../General Components/SwipeableContent/configured/SwipeToDelete';
import { analyticsAmountDeleted } from '../../../../../../analytics/analyticsApi';

type VatAmountListRowItemProps = {
  flatAmount: FlatAmount,
  fullWidth?: boolean,
  borderTop?: boolean,
  borderBottom?: boolean,
  swipeable?: boolean,
  onDelete: () => void,
};

type ReduxInject = {
  currencyObject: CurrencyObject,
};

const VatAmountListRowItemInner = ({
  flatAmount,
  fullWidth = false,
  borderTop = false,
  borderBottom = false,
  swipeable = false,
  onDelete,
  currencyObject,
}: VatAmountListRowItemProps & ReduxInject) => {
  const { currency, amount } = flatAmount;

  const rowInnerContent = (
    <View style={rowStyles.rowContent}>
      <CurrencyFlagAndAmount currency={currency} amount={amount} />
      <View style={{ flex: 1 }}>
        <CardRowSubText
          text={`~CHF ${(currencyObject[currency] * amount).toFixed(2)}`}
        />
      </View>
    </View>
  );

  const handleDeleteAmount = () => {
    analyticsAmountDeleted(
      flatAmount.currency,
      flatAmount.amount,
      flatAmount.large
    );
    onDelete();
  };

  const rowContent = swipeable ? (
    <SwipeToDelete onPressDelete={handleDeleteAmount}>
      {rowInnerContent}
    </SwipeToDelete>
  ) : (
    rowInnerContent
  );

  return (
    <Row
      borderTop={borderTop}
      borderBottom={borderBottom}
      width={fullWidth ? '100%' : '95%'}
    >
      {rowContent}
    </Row>
  );
};

const mapStateToProps = state => ({
  currencyObject: getCurrencies(state),
});

export const VatAmountListRowItem = (connect(mapStateToProps, null)(
  VatAmountListRowItemInner
): ComponentType<VatAmountListRowItemProps>);
