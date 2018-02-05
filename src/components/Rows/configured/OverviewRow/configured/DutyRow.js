// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import type { Category } from '../../../../../model/types/basketPeopleAmountsTypes';
import { OverviewRow } from '../OverviewRow';
import { CategoriesInfo } from '../../../../../model/constants';
import type { TFunction } from '../../../../../types/generalTypes';
import { AllowanceIcon } from '../../../../Overview/subcomponents/AllowanceIcon';

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
}: DutyRowProps & { t: TFunction }) => (
  <OverviewRow
    title={t(`categories:${category}`)}
    subtitle={`${t('overview:declared')} ${quantity} ${CategoriesInfo.getIn(
      [category, 'unit'],
      ''
    )}`}
    quantity={quantity}
    result={duty.toFixed(2)}
    unit={CategoriesInfo.getIn([category, 'unit'], '')}
    borderTop={borderTop}
  >
    <AllowanceIcon text={t('overviewDutyFree')} quantity={5} unit={unit} />
  </OverviewRow>
);

export const DutyRow = (translate(['categories', 'overview'])(
  DutyRowInner
): ComponentType<DutyRowProps>);
