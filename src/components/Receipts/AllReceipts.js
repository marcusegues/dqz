// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import type { ComponentType } from 'react';
import type { List } from 'immutable';
import Immutable from 'immutable';
import moment from 'moment';
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
        {// $FlowFixMe
        this.state.receipts.map((receipt, index) => {
          const { basket } = receipt;
          const vatReport = calculateVat(
            receipt.amounts,
            receipt.people,
            receipt.currencies
          );
          const dutyReport = calculateDuty(basket, receipt.people);
          const fullVat = vatReport.get('totalVat');
          const fullDuty = dutyReport.get('totalDuty');
          const transactionDatetime = moment(
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
                value: transactionDatetime.format('DD.MM.YYYY'),
              })}
              rowOnPress={() => {
                setReceiptId(receipt.receiptId);
                navigation.navigate('ReceiptAfterPayment');
              }}
            />
          );
        })}
        <View style={{ marginTop: verticalScale(30) }}>
          <CardHeader text={t('allReceiptsOlderReceipts')} />
        </View>
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
