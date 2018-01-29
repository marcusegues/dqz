// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import type { ComponentType } from 'react';
// $FlowFixMe
import { translate } from 'react-i18next';
import { ScrollViewCard } from './subComponents/ScrollViewCard';
import type { Navigation, TFunction } from '../../types/generalTypes';
import { analyticsScreenMounted } from '../../analytics/analyticsApi';
import { CardHeader } from '../QuestionAnswer/cards/subcomponents/CardHeader';
import { AllReceiptsRow } from './subComponents/AllReceiptsRow';
import { HeaderTitle } from '../Headers/subcomponents/HeaderTitle';
import { verticalScale } from '../../styles/Scaling';

type AllReceiptsProps = {
  t: TFunction,
  navigation: Navigation,
};

class AllReceiptsInner extends React.Component<AllReceiptsProps> {
  static navigationOptions = ({ screenProps }) => ({
    headerTitle: (
      <HeaderTitle
        text={screenProps.t('receipt:allReceiptsNavigationHeaderTitle')}
      />
    ),
  });
  componentWillMount() {
    analyticsScreenMounted('AllReceipts');
  }

  render() {
    const { t, navigation } = this.props;
    return (
      <ScrollViewCard>
        <CardHeader text={t('allReceiptsCurrentReceipt')} />

        <AllReceiptsRow
          sum={t('allReceiptsSumInFranks', { value: '75.00' })}
          duty={t('dutyAndVat', {
            duty: '65.00 ',
            vat: '10.00',
          })}
          date={t('allReceiptsDate', { value: '09. Januar 2017' })}
          rowOnPress={() => navigation.navigate('ReceiptAfterPayment')}
        />

        <View style={{ marginTop: verticalScale(30) }}>
          <CardHeader text={t('allReceiptsOlderReceipts')} />
        </View>

        <AllReceiptsRow
          sum={t('allReceiptsSumInFranks', { value: '75.00' })}
          duty={t('dutyAndVat', {
            duty: '65.00 ',
            vat: '10.00',
          })}
          date={t('allReceiptsDate', { value: '09. Januar 2017' })}
          rowOnPress={() => navigation.navigate('ReceiptAfterPayment')}
        />

        <AllReceiptsRow
          sum={t('allReceiptsSumInFranks', { value: '75.00' })}
          duty={t('dutyAndVat', {
            duty: '65.00 ',
            vat: '10.00',
          })}
          date={t('allReceiptsDate', { value: '09. Januar 2017' })}
          rowOnPress={() => navigation.navigate('ReceiptAfterPayment')}
        />
      </ScrollViewCard>
    );
  }
}

export const AllReceipts = (translate(['receipt'])(
  AllReceiptsInner
): ComponentType<AllReceiptsProps>);
