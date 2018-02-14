// @flow
import React from 'react';
import { connect } from 'react-redux';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import type { ComponentType } from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { translate } from 'react-i18next';
import { OverviewInfo } from '../../subcomponents/OverviewInfo';
import { TotalOwed } from '../../subcomponents/TotalOwed';
import { AmountIcon } from '../../../../../General Components/GreyBox/configured/AmountIcon';
import { Row } from '../../../../Row';
import { rowStyles } from '../../../../styles/rowStyles';
import { DetailsIcon } from './DetailsIcon';
import type { TFunction } from '../../../../../../types/generalTypes';
import {
  totalLargeAmounts,
  totalNormalAmounts,
} from '../../../../../../model/utils';
import { getCurrencies } from '../../../../../../reducers/index';
import type { CurrencyObject } from '../../../../../../model/currencies';
import type { Amounts } from '../../../../../../model/types/basketPeopleAmountsTypes';

type VatOverviewProps = {
  large: boolean,
  amounts: Amounts,
  vat: number,
};

type ReduxInject = {
  currencies: CurrencyObject,
};

type CollapsibleInjected = {
  setMainHeight: (height: number) => void,
  animate: () => void,
  expanded: boolean,
};

const VatOverviewInner = ({
  large,
  amounts,
  currencies,
  vat,
  t,
  setMainHeight,
  animate,
  expanded,
}: VatOverviewProps & CollapsibleInjected & ReduxInject & { t: TFunction }) => {
  const totalAmount = large
    ? totalLargeAmounts(amounts, currencies)
    : totalNormalAmounts(amounts, currencies);
  const title = large ? t('largeAmountsTitle') : t('normalAmountsTitle');
  const subTitle = large
    ? t('largeAmountsSubtitle')
    : t('normalAmountsSubtitle');
  return (
    <Row
      borderTop
      borderBottom={false}
      fullWidth
      onLayout={event => {
        setMainHeight(event.nativeEvent.layout.height);
      }}
    >
      <View style={[rowStyles.rowContent]}>
        <OverviewInfo title={title} subtitle={subTitle}>
          <Touchable onPress={() => animate()}>
            <DetailsIcon expanded={expanded} />
          </Touchable>
        </OverviewInfo>
        <AmountIcon amount={totalAmount} currency="CHF" />
        <TotalOwed result={(+vat).toFixed(2)} />
      </View>
    </Row>
  );
};

const mapStateToProps = state => ({
  currencies: getCurrencies(state),
});

export const VatOverview = (connect(mapStateToProps, null)(
  translate(['receipt'])(VatOverviewInner)
): ComponentType<VatOverviewProps>);
