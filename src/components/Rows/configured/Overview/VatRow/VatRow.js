// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { Collapsible } from '../../../Collapsible';
import { VatOverview } from './subcomponents/VatOverview';
import { VatAmountList } from './subcomponents/VatAmountList';
import type { Amounts } from '../../../../../model/types/basketPeopleAmountsTypes';
import type { CurrencyObject } from '../../../../../model/currencies';

type VatRowProps = {
  large: boolean,
  amounts: Amounts,
  currencies: CurrencyObject,
  vat: number,
  borderTop: boolean,
  borderBottom: boolean,
};

const VatRowInner = ({
  amounts,
  vat,
  currencies,
  large,
  borderTop = false,
  borderBottom = true,
}) => (
  <Collapsible borderBottom={borderBottom} borderTop={borderTop}>
    <VatOverview
      amounts={amounts}
      currencies={currencies}
      large={large}
      vat={vat}
    />
    <VatAmountList amounts={amounts} large={large} />
  </Collapsible>
);

export const VatRow = (VatRowInner: ComponentType<VatRowProps>);
