// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { Collapsible } from '../../../Collapsible';
import { VatOverview } from './subcomponents/VatOverview';
import { VatAmountList } from './subcomponents/VatAmountList';
import type { Amounts } from '../../../../../model/types/basketPeopleAmountsTypes';

type VatRowProps = {
  large: boolean,
  amounts: Amounts,
  vat: number,
};

const VatRowInner = ({ amounts, vat, large }) => (
  <Collapsible borderBottom>
    <VatOverview amounts={amounts} large={large} vat={vat} />
    <VatAmountList amounts={amounts} large={large} />
  </Collapsible>
);

export const VatRow = (VatRowInner: ComponentType<VatRowProps>);
