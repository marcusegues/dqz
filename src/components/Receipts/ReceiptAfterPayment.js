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
import { moderateScale, verticalScale } from '../../styles/Scaling';
import { CardRowText } from '../QuestionAnswer/cards/subcomponents/CardRowText';
import type { PaymentData, TFunction } from '../../types/generalTypes';
import { analyticsScreenMounted } from '../../analytics/analyticsApi';
import { getPaymentData, getReceiptId } from '../../reducers';
import { fetchReceiptByReceiptId } from '../../asyncStorage/storageApi';
import type { Receipt } from '../../types/receiptTypes';
import { calculateVat } from '../../model/vatCalculations';
import { calculateDuty } from '../../model/dutyCalculations';
import { DutyList } from '../Overview/subcomponents/DutyList';
import { VatList } from '../Overview/subcomponents/VatList';
import { Row } from '../Rows/Row';
import { TotalOwedRow } from '../Overview/subcomponents/TotalOwedRow';
import { ScrollViewCard } from '../General Components/ScrollViewCard';
import { ReceiptSubText } from './subcomponents/ReceiptSubText';
import { RedLogo } from './subcomponents/RedLogo';
import { ValidUntilBlock } from './subcomponents/ValidUntilBlock';
import { ReceiptInfoNote } from './subcomponents/ReceiptInfoNote';

const ownStyles = {
  topSumText: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(28),
    textAlign: 'center',
    marginTop: verticalScale(10),
  },
  receiptSubTextDuty: {
    fontSize: moderateScale(12),
    alignSelf: 'flex-end',
  },
  cardRowText: {
    color: '#fff',
    fontFamily: 'roboto_regular',
  },
  cardRowTextPaidOn: {
    marginVertical: verticalScale(15),
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
      const { basket, people, amounts, currencies } = this.state.receipt;
      const vatReport = calculateVat(amounts, people, currencies);
      const dutyReport = calculateDuty(basket, people);
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
        <View
          style={{
            flex: 1,
            height: '100%',
            marginHorizontal: 16,
            marginBottom: 16,
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
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
                text={`${
                  this.state.receipt.paymentData.transaction.brandName
                } ${this.state.receipt.paymentData.transaction.cardNumber}`}
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
                    date: receiptEntryTimePlus.toLocaleString(
                      DateTime.DATE_FULL
                    ),
                    time: receiptEntryTimePlus.toFormat('HH:mm'),
                  })}
                  style={ownStyles.cardRowText}
                />
              </ValidUntilBlock>
            </Row>

            <DutyList basket={basket} people={people} />
            <VatList
              large={false}
              people={people}
              amounts={amounts}
              currencies={currencies}
            />
            <VatList
              large
              borderTop={false}
              people={people}
              amounts={amounts}
              currencies={currencies}
              headerRight={false}
            />

            <TotalOwedRow
              basket={basket}
              people={people}
              currencies={currencies}
              amounts={amounts}
            />

            <ReceiptInfoNote />
          </ScrollViewCard>
        </View>
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
