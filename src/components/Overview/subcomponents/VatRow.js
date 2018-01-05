// @flow
import React from 'react';
import { translate } from 'react-i18next';
import OverviewRow from './OverviewRow';

type VatRowProps = {
  quantity: number,
  vat: number,
  borderTop?: boolean,
  t: (field: string, params?: {}) => string,
};

const VatRow = ({ quantity, vat, borderTop, t }: VatRowProps) => (
  <OverviewRow
    title={t('amountsTitle')}
    subtitle={t('amountsSubtitle')}
    quantity={quantity}
    result={(+vat).toFixed(2)}
    categoryText="CHF"
    borderTop={borderTop}
  />
);

VatRow.defaultProps = {
  borderTop: false,
};

export default translate(['receipt'])(VatRow);
