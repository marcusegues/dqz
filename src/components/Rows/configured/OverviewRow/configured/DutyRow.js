// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import type { Category } from '../../../../../model/types/basketPeopleAmountsTypes';
import { OverviewRow } from '../OverviewRow';
import { CategoriesInfo } from '../../../../../model/constants';
import type { TFunction } from '../../../../../types/generalTypes';
import { AllowanceIcon } from '../../../../Overview/subcomponents/AllowanceIcon';
import { QuantityIcon } from '../../../../General Components/GreyBox/configured/QuantityIcon';

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
    <OverviewRow
      title={t(`categories:${category}`)}
      subtitle={`${t('overview:declared')} ${quantity} ${unit}`}
      result={duty.toFixed(2)}
      borderTop={borderTop}
    >
      {{
        lowerIcon: (
          <AllowanceIcon
            text={t('overview:dutyFree')}
            quantity={5}
            unit={unit}
          />
        ),
        midComponent: <QuantityIcon quantity={quantity} unit={unit} />,
      }}
    </OverviewRow>
  );
};

export const DutyRow = (translate(['categories', 'overview'])(
  DutyRowInner
): ComponentType<DutyRowProps>);
