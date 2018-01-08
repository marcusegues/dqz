// @flow
import React from 'react';
import { translate } from 'react-i18next';
import OverviewRow from './OverviewRow';
import type { TFunction } from '../../../types/generalTypes';

type VatRowProps = {
  quantity: number,
  vat: number,
  borderTop?: boolean,
  t: TFunction,
};

const VatRow = ({ quantity, vat, borderTop, t }: VatRowProps) => (
  <OverviewRow
    title={t('amountsTitle')}
    subtitle={t('amountsSubtitle')}
    quantity={quantity}
    result={(+vat).toFixed(2)}
    unit="CHF"
    borderTop={borderTop}
  />
);

VatRow.defaultProps = {
  borderTop: false,
};

export default translate(['receipt'])(VatRow);
