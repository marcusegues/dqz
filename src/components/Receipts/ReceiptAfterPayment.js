/* eslint-disable no-unused-vars,no-console */ // TODO REMOVE
// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { DateTime } from 'luxon';
// $FlowFixMe
import { View, Text, CameraRoll } from 'react-native';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { connect } from 'react-redux';
// $FlowFixMe
import { takeSnapshotAsync } from 'expo';
import { translate } from 'react-i18next';
import { ScrollViewCard } from './subcomponents/ScrollViewCard';
import { RedLogo } from './subcomponents/Logo';
import { moderateScale, scale, verticalScale } from '../../styles/Scaling';
import { CardRowText } from '../QuestionAnswer/cards/subcomponents/CardRowText';
import { ReceiptSubText } from './subcomponents/ReceiptSubText';
import { ValidUntilBlock } from './subcomponents/ValidUntilBlock';
import { DutyRow } from '../Rows/configured/Overview/DutyRow/DutyRow';
import { VatRow } from '../Rows/configured/Overview/VatRow/VatRow';
import type { PaymentData, TFunction } from '../../types/generalTypes';
import { analyticsScreenMounted } from '../../analytics/analyticsApi';
import { getPaymentData, getReceiptId } from '../../reducers';
import {
  clearReceipt,
  fetchReceiptByReceiptId,
  fetchReceipts,
} from '../../asyncStorage/storageApi';
import type { Receipt } from '../../types/receiptTypes';
import { calculateVat } from '../../model/vatCalculations';
import { calculateDuty, getAllowanceRaw } from '../../model/dutyCalculations';
import { getTotalQuantity } from '../../model/configurationApi';
import { getMainCategory } from '../../types/reducers/appReducer';
import { VatList } from '../Overview/subcomponents/VatList';
import { Row } from '../Rows/Row';
import { rowStyles } from '../Rows/styles/rowStyles';

const ownStyles = {
  topSumText: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(28),
    textAlign: 'center',
    marginTop: verticalScale(10),
  },
  contentContainer: {
    borderTopWidth: 1,
    borderTopColor: '#E0E0E1',
    marginHorizontal: scale(16),
    marginTop: verticalScale(15),
  },
  receiptSubTextDuty: {
    fontSize: moderateScale(12),
    alignSelf: 'flex-end',
  },
  cardRowText: {
    color: '#fff',
    fontFamily: 'roboto_regular',
  },
  cardRowTextSum: {
    alignSelf: 'flex-end',
    marginTop: verticalScale(15),
    marginBottom: verticalScale(35),
  },
  cardRowTextPaidOn: {
    marginVertical: verticalScale(15),
  },
  receiptSubTextVat: {
    fontSize: moderateScale(12),
    alignSelf: 'flex-end',
    marginTop: verticalScale(25),
  },

  receiptSubTextNotification: {
    paddingBottom: verticalScale(15),
    lineHeight: 18,
  },
};

type ReceiptAfterPaymentScreenState = {
  receipt: Receipt,
};

type ReceiptAfterPaymentScreenProps = {
  t: TFunction,
  paymentData: PaymentData,
  receiptId: string,
};

class ReceiptAfterPaymentInner extends React.Component<
  ReceiptAfterPaymentScreenProps,
  ReceiptAfterPaymentScreenState
> {
  constructor(props: ReceiptAfterPaymentScreenProps & { t: TFunction }) {
    super(props);
    this.state = {
      // $FlowFixMe
      receipt: {},
    };
  }

  componentWillMount() {
    analyticsScreenMounted('ReceiptAfterPayment');
  }

  componentDidMount() {
    const { receiptId } = this.props;
    if (receiptId !== '') {
      fetchReceiptByReceiptId(receiptId).then(receipt => {
        this.setState({ receipt });
      });
    } else {
      console.log('empty receiptId');
    }
  }

  image: any;

  async capture() {
    const snapshot = await takeSnapshotAsync(this.image, {
      format: 'png',
      quality: 1,
      result: 'file',
    });
    await CameraRoll.saveToCameraRoll(snapshot, 'photo');
  }

  render() {
    const { t, paymentData } = this.props;

    if (this.state.receipt && this.state.receipt.receiptId !== undefined) {
      const { basket } = this.state.receipt;
      const vatReport = calculateVat(
        this.state.receipt.amounts,
        this.state.receipt.people,
        this.state.receipt.currencies
      );
      const dutyReport = calculateDuty(basket, this.state.receipt.people);
      const fullVat = vatReport.get('totalVat');
      const fullDuty = dutyReport.get('totalDuty');
      const transactionDatetime = DateTime.fromISO(
        this.state.receipt.paymentData.transaction.date
      );
      // TODO: @Christian need to set locale from APP
      const receiptEntryTimePlus = DateTime.fromISO(
        this.state.receipt.receiptEntryTime,
        { zone: 'Europe/Zurich', locale: 'de' }
      ).plus({ hours: 2 });
      return (
        <ScrollViewCard
          ref={ref => {
            this.image = ref;
          }}
        >
          <Touchable
            onPress={() => {
              this.capture();
            }}
          >
            <RedLogo />
          </Touchable>
          <Row width="90%">
            <Text style={ownStyles.topSumText}>
              CHF {(fullVat + fullDuty).toFixed(2)}
            </Text>
            <ReceiptSubText
              text={t('dutyAndVat', {
                duty: fullDuty.toFixed(2),
                vat: fullVat.toFixed(2),
              })}
            />
          </Row>

          <Row
            width="90%"
            borderBottom={false}
            styles={{ alignItems: 'flex-start', paddingHorizontal: 0 }}
          >
            <CardRowText
              text={t('paidOn', {
                date: transactionDatetime.toFormat('dd.MM.y'),
                time: transactionDatetime.toFormat('HH:mm'),
              })}
              style={ownStyles.cardRowTextPaidOn}
            />

            <ReceiptSubText
              text={`${this.state.receipt.paymentData.transaction.brandName} ${
                this.state.receipt.paymentData.transaction.cardNumber
              }`}
            />
            <ReceiptSubText
              text={t('transactionId', {
                value: this.state.receipt.paymentData.transaction.id,
              })}
            />
            <ValidUntilBlock>
              <CardRowText
                text={t('receiptValidUntilText')}
                style={ownStyles.cardRowText}
              />
              <CardRowText
                text={t('receiptValidUntilTime', {
                  date: receiptEntryTimePlus.toLocaleString(DateTime.DATE_FULL),
                  time: receiptEntryTimePlus.toFormat('HH:mm'),
                })}
                style={ownStyles.cardRowText}
              />
            </ValidUntilBlock>
            <ReceiptSubText
              text={t('payment:dutyColumn')}
              style={ownStyles.receiptSubTextDuty}
            />
          </Row>

          <View style={ownStyles.contentContainer}>
            {dutyReport
              .get('dutyByCategoryRaw')
              .entrySeq()
              .filter(entry => getTotalQuantity(basket, entry[0]) > 0)
              .map(([category, dutyOfCategory], idx) => (
                <DutyRow
                  borderTop={idx === 0}
                  width="100%"
                  key={category}
                  mainCategory={getMainCategory(category)}
                  allowanceRaw={getAllowanceRaw(
                    category,
                    this.state.receipt.people
                  )}
                  category={category}
                  quantity={getTotalQuantity(basket, category)}
                  duty={dutyOfCategory}
                />
              ))}

            <ReceiptSubText
              text={t('vatColumn')}
              style={ownStyles.receiptSubTextVat}
            />
            <CardRowText
              text={t('receipt:sumText', {
                value: (fullVat + fullDuty).toFixed(2),
              })}
              style={ownStyles.cardRowTextSum}
            />
            <ReceiptSubText
              text={t('receiptStorageNotification')}
              style={ownStyles.receiptSubTextNotification}
            />
          </View>
        </ScrollViewCard>
      );
    }
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  paymentData: getPaymentData(state),
  receiptId: getReceiptId(state),
});

export const ReceiptAfterPayment = (connect(mapStateToProps)(
  translate(['receipt', 'payment', 'mainCategories', 'categories'])(
    ReceiptAfterPaymentInner
  )
): ComponentType<{}>);
