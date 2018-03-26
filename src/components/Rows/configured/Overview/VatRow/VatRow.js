// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { Collapsible } from '../../../Collapsible';
import { VatOverview } from './subcomponents/VatOverview';
import { VatAmountList } from './subcomponents/VatAmountList';
import type { Amounts } from '../../../../../model/types/basketPeopleAmountsTypes';
import type { CurrencyObject } from '../../../../../model/currencies';
import {
  flatLargeAmounts,
  flatNormalAmounts,
  totalLargeAmounts,
  totalNormalAmounts,
} from '../../../../../model/utils';

type VatRowProps = {
  large: boolean,
  amounts: Amounts,
  currencies: CurrencyObject,
  vat: number,
  borderTop: boolean,
  borderBottom: boolean,
  swipeable: boolean,
};

const VatRowInner = ({
  amounts,
  vat,
  currencies,
  large,
  borderTop = false,
  borderBottom = true,
  swipeable = false,
}) => {
  const relevantAmounts = large
    ? flatLargeAmounts(amounts)
    : flatNormalAmounts(amounts);
  const totalAmount = large
    ? totalLargeAmounts(amounts, currencies)
    : totalNormalAmounts(amounts, currencies);
  return (
    <Collapsible borderBottom={borderBottom} borderTop={borderTop}>
      <VatOverview
        totalAmount={totalAmount}
        amountsPresent={relevantAmounts.length !== 0}
        currencies={currencies}
        large={large}
        vat={vat}
      />
      <VatAmountList amounts={amounts} large={large} swipeable={swipeable} />
    </Collapsible>
  );
};

export const VatRow = (VatRowInner: ComponentType<VatRowProps>);
