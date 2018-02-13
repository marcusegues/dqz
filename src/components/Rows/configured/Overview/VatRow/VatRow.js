// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import { Collapsible } from '../../../Collapsible';
import { VatOverview } from './subcomponents/VatOverview';
import { VatAmountList } from './subcomponents/VatAmountList';
import type { Amounts } from '../../../../../model/types/basketPeopleAmountsTypes';

type VatRowProps = {
  large: boolean,
  amounts: Amounts,
  amount: number | string,
  vat: number,
};

const VatRowInner = ({ amounts, amount, vat, large }) => (
  <Collapsible borderBottom>
    <VatOverview amount={amount} vat={vat} />
    <VatAmountList amounts={amounts} large={large} />
  </Collapsible>
);

export const VatRow = (translate(['receipt'])(VatRowInner): ComponentType<
  VatRowProps
>);
