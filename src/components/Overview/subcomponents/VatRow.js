// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import { OverviewRow } from './OverviewRow';
import type { TFunction } from '../../../types/generalTypes';

type VatRowProps = {
  quantity: number | string,
  vat: number,
  borderTop?: boolean,
};

const VatRowInner = ({
  quantity,
  vat,
  borderTop = false,
  t,
}: VatRowProps & { t: TFunction }) => (
  <OverviewRow
    title={t('amountsTitle')}
    subtitle={t('amountsSubtitle')}
    quantity={quantity}
    result={(+vat).toFixed(2)}
    unit="CHF"
    borderTop={borderTop}
  />
);

export const VatRow = (translate(['receipt'])(VatRowInner): ComponentType<
  VatRowProps
>);
