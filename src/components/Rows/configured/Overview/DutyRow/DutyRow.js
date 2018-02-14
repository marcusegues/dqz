// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { translate } from 'react-i18next';
// $FlowFixMe
import { View } from 'react-native';
import type { Category } from '../../../../../model/types/basketPeopleAmountsTypes';
import { CategoriesInfo } from '../../../../../model/constants';
import type { TFunction } from '../../../../../types/generalTypes';
import { AllowanceIcon } from './subcomponents/AllowanceIcon';
import { QuantityIcon } from '../../../../General Components/GreyBox/configured/QuantityIcon';
import { OverviewInfo } from '../subcomponents/OverviewInfo';
import { Row } from '../../../Row';
import { TotalOwed } from '../subcomponents/TotalOwed';
import { rowStyles } from '../../../styles/rowStyles';

type DutyRowProps = {
  category: Category,
  quantity: number,
  duty: number,
  borderTop?: boolean,
  allowanceRaw: number,
};

const DutyRowInner = ({
  category,
  quantity,
  duty,
  borderTop = false,
  t,
  allowanceRaw,
}: DutyRowProps & { t: TFunction }) => {
  const unit = CategoriesInfo.getIn([category, 'unit'], '');

  return (
    <Row borderTop={borderTop}>
      <View style={[rowStyles.rowContent]}>
        <OverviewInfo
          title={t(`categories:${category}`)}
          subtitle={`${t('overview:declared')} ${quantity} ${unit}`}
        >
          <AllowanceIcon
            text={t('overview:dutyFree')}
            quantity={allowanceRaw}
            unit={unit}
          />
        </OverviewInfo>
        <QuantityIcon quantity={quantity} unit={unit} />
        <TotalOwed result={duty.toFixed(2)} />
      </View>
    </Row>
  );
};

export const DutyRow = (translate(['categories', 'overview'])(
  DutyRowInner
): ComponentType<DutyRowProps>);
