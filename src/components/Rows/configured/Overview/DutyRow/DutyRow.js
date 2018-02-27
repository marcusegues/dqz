// @flow
import React from 'react';
import type { ComponentType } from 'react';
import Swipeable from 'react-native-swipeable';
// $FlowFixMe
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, TouchableHighlight, Text } from 'react-native';
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

const leftContent = <Text>Pull to activate</Text>;

const rightButtons = [
  <TouchableHighlight
    style={{
      flex: 1,
      backgroundColor: 'red',
    }}
  >
    <Text>Button 1</Text>
  </TouchableHighlight>,
  <TouchableHighlight
    style={{
      flex: 1,
      backgroundColor: 'green',
    }}
  >
    <Text>Button 2</Text>
  </TouchableHighlight>,
];

const DutyRowInner = ({
  category,
  quantity,
  duty,
  borderTop = false,
  t,
  allowanceRaw,
}: DutyRowProps & { t: TFunction }) => {
  const unit = t(`units:${CategoriesInfo.getIn([category, 'unit'], '')}`, {
    count: quantity,
  });

  return (
    <Row borderTop={borderTop}>
      <Swipeable
        leftContent={leftContent}
        rightButtons={rightButtons}
        rightActionActivationDistance={200}
        rightButtonWidth={90}
      >
        <View style={[rowStyles.rowContent]}>
          <OverviewInfo
            title={t(`categories:${category}`)}
            subtitle={`${t('overview:declared')} ${quantity.toFixed(2)} ${
              unit
            }`}
          >
            <AllowanceIcon
              text={t('overview:dutyFree')}
              quantity={allowanceRaw}
              unit={t(`units:${CategoriesInfo.getIn([category, 'unit'], '')}`, {
                count: allowanceRaw,
              })}
            />
          </OverviewInfo>
          <QuantityIcon
            quantity={Math.max(0, quantity - allowanceRaw).toFixed(2)}
            unit={t(`units:${CategoriesInfo.getIn([category, 'unit'], '')}`, {
              count: Math.max(0, quantity - allowanceRaw),
            })}
          />
          <TotalOwed result={duty.toFixed(2)} />
        </View>
      </Swipeable>
    </Row>
  );
};

export const DutyRow = (translate(['categories', 'overview', 'units'])(
  DutyRowInner
): ComponentType<DutyRowProps>);
