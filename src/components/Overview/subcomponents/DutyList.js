import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { View, FlatList, Text } from 'react-native';
import { DutyRow } from './DutyRow';
import { getTotalQuantity } from '../../../model/configurationApi';
import { getMainCategory } from '../../../types/reducers/appReducer';
import { RightAlignedHeader } from './RightAlignedHeader';
import { getBasket, getDutyReport } from '../../../reducers';

class DutyListInner extends React.Component {
  render() {
    const { dutyReport, basket, t } = this.props;
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
  }
}

const mapStateToProps = state => ({
  dutyReport: getDutyReport(state),
  basket: getBasket(state),
});

export const DutyList = (connect(mapStateToProps, null)(
  translate(['payment'])(DutyListInner)
): ComponentType<{}>);
