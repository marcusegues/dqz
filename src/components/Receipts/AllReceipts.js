// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import type { ComponentType } from 'react';
import type { List } from 'immutable';
import Immutable from 'immutable';
import { DateTime } from 'luxon';
import { connect } from 'react-redux';
// $FlowFixMe
import { translate } from 'react-i18next';
import { ScrollViewCard } from './subComponents/ScrollViewCard';
import type { Navigation, TFunction } from '../../types/generalTypes';
import { analyticsScreenMounted } from '../../analytics/analyticsApi';
import { CardHeader } from '../QuestionAnswer/cards/subcomponents/CardHeader';
import { AllReceiptsRow } from './subComponents/AllReceiptsRow';
import { HeaderTitle } from '../Headers/subcomponents/HeaderTitle';
import { verticalScale } from '../../styles/Scaling';
import type { Receipt } from '../../types/receiptTypes';
import { fetchReceipts } from '../../asyncStorage/storageApi';
import { calculateDuty } from '../../model/dutyCalculations';
import { calculateVat } from '../../model/vatCalculations';

type AllReceiptsState = {
  receipts: List<Receipt>,
};

type AllReceiptsProps = {
  t: TFunction,
  navigation: Navigation,
  setReceiptId: (receiptId: string) => void,
};

class AllReceiptsInner extends React.Component<
  AllReceiptsProps,
  AllReceiptsState
> {
  static navigationOptions = ({ screenProps }) => ({
    headerTitle: (
      <HeaderTitle
        text={screenProps.t('receipt:allReceiptsNavigationHeaderTitle')}
      />
    ),
  });

  constructor(props: AllReceiptsProps & { t: TFunction }) {
    super(props);
    this.state = {
      receipts: Immutable.List(),
    };
  }

  componentWillMount() {
    analyticsScreenMounted('AllReceipts');
  }

  componentDidMount() {
    fetchReceipts().then(receipts => {
      this.setState({ receipts });
    });
  }

  render() {
    const { t, navigation, setReceiptId } = this.props;

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
        {// $FlowFixMe
        this.state.receipts.map((receipt, index) => {
          // console.log(receipt.receiptEntryTime);
          const { basket } = receipt;
          const vatReport = calculateVat(
            receipt.amounts,
            receipt.people,
            receipt.currencies
          );
          const dutyReport = calculateDuty(basket, receipt.people);
          const fullVat = vatReport.get('totalVat');
          const fullDuty = dutyReport.get('totalDuty');
          const transactionDatetime = DateTime.fromISO(
            receipt.paymentData.transaction.date
          );
          return (
            <AllReceiptsRow
              key={`receipt-row-${index + fullVat}`}
              sum={t('allReceiptsSumInFranks', {
                value: (fullVat + fullDuty).toFixed(2),
              })}
              duty={t('dutyAndVat', {
                duty: fullDuty.toFixed(2),
                vat: fullVat.toFixed(2),
              })}
              date={t('allReceiptsDate', {
                value: transactionDatetime.toFormat('dd.MM.y'),
              })}
              rowOnPress={() => {
                setReceiptId(receipt.receiptId);
                navigation.navigate('ReceiptAfterPayment');
              }}
            />
          );
        })}
      </ScrollViewCard>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setReceiptId: (receiptId: string) =>
    dispatch({
      type: 'SET_RECEIPT_ID',
      receiptId,
    }),
});

export const AllReceipts = (connect(null, mapDispatchToProps)(
  translate(['receipt'])(AllReceiptsInner)
): ComponentType<AllReceiptsProps>);
