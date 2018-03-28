// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { MaterialIcons } from '@expo/vector-icons';
// $FlowFixMe
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Row } from '../../../../../../Rows/Row';
import { CardRowText } from '../../../../subcomponents/CardRowText';
import type {
  Currency,
  CurrencyObject,
} from '../../../../../../../model/currencies';
import { CardRowSubText } from '../../../../subcomponents/CardRowSubText';
import { getCurrencies } from '../../../../../../../reducers/selectors';
import { rowStyles } from '../../../../../../Rows/styles/rowStyles';
import { CurrencyFlag } from '../../../../../../General Components/CurrencyFlag';
import { SwipeToDelete } from '../../../../../../General Components/SwipeableContent/configured/SwipeToDelete';
import { moderateScale } from '../../../../../../../styles/Scaling';
import { GREY } from '../../../../../../../styles/colors';

type AmountRowProps = {
  amount: number,
  onDelete: () => void,
  currency: Currency,
  borderTop: boolean,
};

type ReduxInject = { currencyObject: CurrencyObject };

const AmountRowInner = ({
  amount,
  onDelete,
  currency,
  currencyObject,
  borderTop,
}: AmountRowProps & ReduxInject) => (
  <Row borderTop={borderTop}>
    <SwipeToDelete onPressDelete={onDelete}>
      <View style={rowStyles.rowContent}>
        <View style={[rowStyles.rowContent, { flex: 1 }]}>
          <CurrencyFlag currency={currency} />
          <View style={{ marginLeft: 16 }}>
            <CardRowText text={`${currency} ${amount.toFixed(2)}`} />
            <CardRowSubText
              text={`~CHF ${(currencyObject[currency] * amount).toFixed(2)}`}
            />
          </View>
        </View>
        <Touchable onPress={onDelete}>
          <MaterialIcons name="cancel" size={moderateScale(28)} color={GREY} />
        </Touchable>
      </View>
    </SwipeToDelete>
  </Row>
);

const mapStateToProps = state => ({
  currencyObject: getCurrencies(state),
});

export const AmountRow = (connect(mapStateToProps)(
  AmountRowInner
): ComponentType<AmountRowProps>);
