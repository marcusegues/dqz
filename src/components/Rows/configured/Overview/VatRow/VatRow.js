// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import { OverviewRow } from '../../OverviewRow/OverviewRow';
import type { TFunction } from '../../../../../types/generalTypes';
import { AmountIcon } from '../../../../General Components/GreyBox/configured/AmountIcon';
import { OverviewInfo } from '../subcomponents/OverviewInfo';
import { Row } from '../../../Row';
import { TotalOwed } from '../subcomponents/TotalOwed';
import { AllowanceIcon } from '../DutyRow/subcomponents/AllowanceIcon';

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
}: VatRowProps & { t: TFunction }) => {
  return (
    <Row borderTop={borderTop}>
      <OverviewInfo title={t('amountsTitle')} subtitle={t('amountsSubtitle')}>
        <AllowanceIcon text={t('overview:dutyFree')} quantity={5} unit={'kg'} />
      </OverviewInfo>
      <AmountIcon amount={amount} currency="CHF" />
      <TotalOwed result={(+vat).toFixed(2)} />
    </Row>
  );
};

export const VatRow = (translate(['receipt'])(VatRowInner): ComponentType<
  VatRowProps
>);
