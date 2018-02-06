// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import { OverviewRow } from '../../Rows/configured/OverviewRow/OverviewRow';
import type { TFunction } from '../../../types/generalTypes';
import { AmountIcon } from '../../General Components/GreyBox/configured/AmountIcon';

type VatRowProps = {
  amount: number | string,
  vat: number,
  borderTop?: boolean,
};

const VatRowInner = ({
  amount,
  vat,
  borderTop = false,
  t,
}: VatRowProps & { t: TFunction }) => (
  <OverviewRow
    title={t('amountsTitle')}
    subtitle={t('amountsSubtitle')}
    result={(+vat).toFixed(2)}
    borderTop={borderTop}
  >
    {{ midComponent: <AmountIcon amount={amount} currency="CHF" /> }}
  </OverviewRow>
);

export const VatRow = (translate(['receipt'])(VatRowInner): ComponentType<
  VatRowProps
>);
