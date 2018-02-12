// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { translate } from 'react-i18next';
import type { Category } from '../../../../../model/types/basketPeopleAmountsTypes';
import { CategoriesInfo } from '../../../../../model/constants';
import type { TFunction } from '../../../../../types/generalTypes';
import { AllowanceIcon } from './subcomponents/AllowanceIcon';
import { QuantityIcon } from '../../../../General Components/GreyBox/configured/QuantityIcon';
import { OverviewInfo } from '../subcomponents/OverviewInfo';
import { Row } from '../../../Row';
import { TotalOwed } from '../subcomponents/TotalOwed';

type DutyRowProps = {
  category: Category,
  quantity: number,
  duty: number,
  borderTop?: boolean,
};

const DutyRowInner = ({
  category,
  quantity,
  duty,
  borderTop = false,
  t,
}: DutyRowProps & { t: TFunction }) => {
  const unit = CategoriesInfo.getIn([category, 'unit'], '');

  return (
    <Row borderTop={borderTop}>
      <OverviewInfo
        title={t(`categories:${category}`)}
        subtitle={`${t('overview:declared')} ${quantity} ${unit}`}
      >
        <AllowanceIcon text={t('overview:dutyFree')} quantity={5} unit={unit} />
      </OverviewInfo>
      <QuantityIcon quantity={quantity} unit={unit} />
      <TotalOwed result={duty.toFixed(2)} />
    </Row>
  );
};

export const DutyRow = (translate(['categories', 'overview'])(
  DutyRowInner
): ComponentType<DutyRowProps>);
