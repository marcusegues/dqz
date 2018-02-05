// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, FlatList } from 'react-native';
import { DutyRow } from './DutyRow';
import { getTotalQuantity } from '../../../model/configurationApi';
import { getMainCategory } from '../../../types/reducers/appReducer';
import { RightAlignedHeader } from './RightAlignedHeader';
import { getBasket, getDutyReport } from '../../../reducers';
import type { DutyReport } from '../../../model/types/calculationTypes';
import type { Basket } from '../../../model/types/basketPeopleAmountsTypes';
import type { TFunction } from '../../../types/generalTypes';

type ReduxInjectProps = {
  dutyReport: DutyReport,
  basket: Basket,
};

const DutyListInner = ({
  dutyReport,
  basket,
  t,
}: ReduxInjectProps & {
  t: TFunction,
}) => {
  const flatListData = dutyReport
    .get('dutyByCategoryRaw')
    .entrySeq()
    .filter(entry => getTotalQuantity(basket, entry[0]) > 0)
    .map(([category, dutyOfCategory], idx) => ({
      key: category,
      component: (
        <DutyRow
          allowance
          borderTop={idx === 0}
          key={category}
          mainCategory={getMainCategory(category)}
          category={category}
          quantity={getTotalQuantity(basket, category)}
          duty={dutyOfCategory}
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

const mapStateToProps = state => ({
  dutyReport: getDutyReport(state),
  basket: getBasket(state),
});

export const DutyList = (connect(mapStateToProps, null)(
  translate(['payment'])(DutyListInner)
): ComponentType<{}>);
