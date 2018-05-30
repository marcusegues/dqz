// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, FlatList } from 'react-native';
import { DutyRow } from '../../Rows/configured/Overview/DutyRow/DutyRow';
import { getTotalQuantity } from '../../../model/configurationApi';
import { getMainCategory } from '../../../types/reducers/declaration';
import { RightAlignedHeader } from './RightAlignedHeader';
import type {
  Basket,
  People,
} from '../../../model/types/basketPeopleAmountsTypes';
import type { TFunction } from '../../../types/generalTypes';
import { calculateDuty, getAllowance } from '../../../model/dutyCalculations';

type DutyListProps = {
  basket: Basket,
  people: People,
  swipeable?: boolean,
  editable?: boolean,
  onPressEdit: Function,
};

const DutyListInner = ({
  basket,
  people,
  t,
  swipeable,
  editable,
  onPressEdit,
}: DutyListProps & {
  t: TFunction,
}) => {
  const dutyReport = calculateDuty(basket, people);
  const flatListData = dutyReport
    .get('dutyByCategoryRaw')
    .entrySeq()
    .filter(entry => getTotalQuantity(basket, entry[0]) > 0)
    .map(([category, dutyOfCategory], idx) => ({
      key: category,
      component: (
        <DutyRow
          borderTop={idx === 0}
          key={category}
          mainCategory={getMainCategory(category)}
          category={category}
          allowanceRaw={getAllowance(basket, category, people)}
          quantity={getTotalQuantity(basket, category)}
          duty={dutyOfCategory}
          swipeable={swipeable}
          editable={editable}
          onPressEdit={() => onPressEdit(category, getMainCategory(category))}
        />
      ),
    }));
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        marginBottom: 24,
      }}
    >
      <RightAlignedHeader text={t('payment:dutyColumn')} />
      <FlatList
        style={{ width: '100%' }}
        data={flatListData.toJS()}
        renderItem={({ item }) => item.component}
      />
    </View>
  );
};

export const DutyList = (translate(['payment'])(DutyListInner): ComponentType<
  DutyListProps
>);
