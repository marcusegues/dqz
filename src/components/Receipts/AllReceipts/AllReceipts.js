// @flow
import React from 'react';
// $FlowFixMe
import { TouchableWithoutFeedback, View } from 'react-native';
import type { ComponentType } from 'react';
import type { List } from 'immutable';
import Immutable from 'immutable';
import { DateTime } from 'luxon';
import { connect } from 'react-redux';
// $FlowFixMe
import { translate } from 'react-i18next';
import type { Navigation, TFunction } from '../../../types/generalTypes';
import { CardHeader } from '../../QuestionAnswer/Cards/subcomponents/CardHeader';
import { AllReceiptsRow } from './subcomponents/AllReceiptsRow';
import { HeaderTitle } from '../../Headers/subcomponents/HeaderTitle';
import { verticalScale } from '../../../styles/Scaling';
import type { Receipt } from '../../../types/receiptTypes';
import { fetchReceipts } from '../../../asyncStorage/storageApi';
import { calculateDuty } from '../../../model/dutyCalculations';
import { calculateVat } from '../../../model/vatCalculations';
import { ScrollViewCard } from '../../General Components/ScrollViewCard';
import { MainContentContainer } from '../../MainContentContainer/MainContentContainer';
import { dateTimeToFormat } from '../../../utils/datetime/datetime';
import { rowStyles } from '../../Rows/styles/rowStyles';
import { Row } from '../../Rows/Row';
import { CardRowText } from '../../QuestionAnswer/Cards/subcomponents/CardRowText';
import { CardRowSubText } from '../../QuestionAnswer/Cards/subcomponents/CardRowSubText';
import { RightChevronIcon } from '../../General Components/RightChevronIcon';

type AllReceiptsState = {
  receipts: List<Receipt>,
};

type AllReceiptsProps = {
  t: TFunction,
  i18n: { language: string },
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

  componentDidMount() {
    fetchReceipts().then(receipts => {
      this.setState({ receipts });
    });
  }

  prepareReceiptsObject() {
    const { t, i18n, navigation, setReceiptId } = this.props;

    const sortDateTimeAsc = (a, b) => {
      const aDT: DateTime = DateTime.fromISO(a.receiptEntryTime);
      const bDT: DateTime = DateTime.fromISO(b.receiptEntryTime);
      return aDT.valueOf() > bDT.valueOf() ? 1 : -1;
    };

    return this.state.receipts.sort(sortDateTimeAsc).reduce(
      (receipts, receipt, idx) => {
        const { basket } = receipt;
        const vatReport = calculateVat(
          receipt.amounts,
          receipt.people,
          receipt.currencies
        );
        const dutyReport = calculateDuty(basket, receipt.people);
        const fullVat = vatReport.get('totalVat');
        const fullDuty = dutyReport.get('totalDuty');
        const receiptEntryTimePlus = DateTime.fromISO(
          receipt.receiptEntryTime
        ).plus({ hours: 2 });
        const localTime = DateTime.local();

        const receiptView = (
          <AllReceiptsRow
            key={`receipt-row-${receipt.receiptId}`}
            sum={t('allReceiptsSumInFranks', {
              value: (fullVat + fullDuty).toFixed(2),
            })}
            duty={t('dutyAndVat', {
              duty: fullDuty.toFixed(2),
              vat: fullVat.toFixed(2),
            })}
            date={t('allReceiptsDate', {
              value: dateTimeToFormat(receiptEntryTimePlus, {
                locale: i18n.language,
                format: 'datetime',
              }),
            })}
            rowOnPress={() => {
              setReceiptId(receipt.receiptId);
              navigation.dispatch({
                type: 'NAVIGATE',
                screen: 'ReceiptAfterPayment',
              });
            }}
            borderTop={idx === 0}
          />
        );
        // $FlowFixMe
        if (receiptEntryTimePlus > localTime) {
          // $FlowFixMe
          receipts.actualReceipts.push(receiptView);
        } else {
          // $FlowFixMe
          receipts.oldReceipts.push(receiptView);
        }
        return receipts;
      },
      { actualReceipts: [], oldReceipts: [] }
    );
  }

  render() {
    const { t } = this.props;

    // $FlowFixMe
    const sortedReceipts: {
      actualReceipts: Array<any>,
      oldReceipts: Array<any>,
    } = this.prepareReceiptsObject();

    return (
      <MainContentContainer>
        <ScrollViewCard>
          <CardHeader text={t('allReceiptsCurrentReceipt')} />
          {sortedReceipts.actualReceipts}
          <View style={{ marginTop: verticalScale(30) }}>
            <CardHeader text={t('allReceiptsOlderReceipts')} />
          </View>
          {sortedReceipts.oldReceipts}
        </ScrollViewCard>
      </MainContentContainer>
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
