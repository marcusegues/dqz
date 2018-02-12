// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import { Collapsible } from '../../../Collapsible';
import { VatOverview } from './subcomponents/VatOverview';
import { VatAmountList } from './subcomponents/VatAmountList';

type VatRowProps = {
  amount: number | string,
  vat: number,
  borderTop?: boolean,
};

class VatRowInner extends React.Component<any, any> {
  render() {
    const { amount, vat, t } = this.props;
    return (
      <Collapsible>
        <VatOverview amount={amount} vat={vat} />
        <VatAmountList />
      </Collapsible>
    );
  }
}

export const VatRow = (translate(['receipt'])(VatRowInner): ComponentType<
  VatRowProps
>);
