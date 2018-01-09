// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import type { MainCategory } from '../../../types/reducers/appReducer';
import type { Category } from '../../../model/types/basketPeopleAmountsTypes';
import { OverviewRow } from './OverviewRow';
import { CategoriesInfo } from '../../../model/constants';
import type { TFunction } from '../../../types/generalTypes';

type DutyRowProps = {
  mainCategory: MainCategory,
  category: Category,
  quantity: number,
  duty: number,
  borderTop?: boolean,
};

const DutyRowInner = ({
  mainCategory,
  category,
  quantity,
  duty,
  borderTop = false,
  t,
}: DutyRowProps & { t: TFunction }) => (
  <OverviewRow
    title={t(`categories:${category}`)}
    subtitle={t(`mainCategories:${mainCategory}`)}
    quantity={quantity}
    result={duty.toFixed(2)}
    unit={CategoriesInfo.getIn([category, 'unit'], '')}
    borderTop={borderTop}
  />
);

export const DutyRow = (translate(['mainCategories', 'categories'])(
  DutyRowInner
): ComponentType<DutyRowProps>);
