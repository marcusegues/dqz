// @flow
import React from 'react';
import { translate } from 'react-i18next';
import type { MainCategory } from '../../../types/reducers/declaration';
import type { Category } from '../../../model/types/basketPeopleAmountsTypes';
import OverviewRow from './OverviewRow';
import { CategoriesInfo } from '../../../model/constants';

type DutyRowProps = {
  mainCategory: MainCategory,
  category: Category,
  quantity: number,
  duty: number,
  borderTop?: boolean,
  t: (field: string, params?: {}) => string,
};

const DutyRow = ({
  mainCategory,
  category,
  quantity,
  duty,
  borderTop,
  t,
}: DutyRowProps) => (
  <OverviewRow
    title={t(`categories:${category}`)}
    subtitle={t(`mainCategories:${mainCategory}`)}
    quantity={quantity}
    result={duty.toFixed(2)}
    unit={CategoriesInfo.getIn([category, 'unit'], '')}
    borderTop={borderTop}
  />
);

DutyRow.defaultProps = {
  borderTop: false,
};

export default translate(['mainCategories', 'categories'])(DutyRow);
