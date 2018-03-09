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
import { CardRowText } from '../QuestionAnswer/Cards/subcomponents/CardRowText';
import type {
  Navigation,
  PaymentData,
  TFunction,
} from '../../types/generalTypes';
import { analyticsScreenMounted } from '../../analytics/analyticsApi';
import { getPaymentData, getReceiptId } from '../../reducers/selectors';
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
import { HeaderTitle } from '../Headers/subcomponents/HeaderTitle';

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
  i18n: { language: string },
  paymentData: PaymentData,
  receiptId: string,
  navigation: Navigation,
};

class ReceiptAfterPaymentInner extends React.Component<
  ReceiptAfterPaymentScreenProps,
  ReceiptAfterPaymentScreenState
> {
  static navigationOptions = ({ screenProps }) => ({
    headerTitle: (
      <HeaderTitle
        text={screenProps.t('receipt:allReceiptsNavigationHeaderTitle')}
      />
    ),
  });
  constructor(
    props: ReceiptAfterPaymentScreenProps & {
      t: TFunction,
      i18n: { language: string },
    }
  ) {
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
    this.props.navigation.dispatch({
      type: 'SET_PARAMS',
      params: { onPress: () => this.capture() },
    });
    if (receiptId !== '') {
      fetchReceiptByReceiptId(receiptId).then(receipt => {
        this.setState({ receipt });
      });
    } else {
      console.log('empty receiptId');
    }
  }

  getValidUntilBlockText() {
    const { t, i18n, paymentData } = this.props;
    const receiptEntryTime = DateTime.fromISO(
      this.state.receipt.receiptEntryTime,
      {
        locale: 'de',
      }
    );
    const receiptEntryTimePlus = receiptEntryTime.plus({ hours: 2 });
    if (receiptEntryTime.day === receiptEntryTimePlus.day) {
      return [
        <CardRowText
          key="receiptValidOn"
          text={t('receiptValidOn')}
          style={ownStyles.cardRowText}
        />,
        <CardRowText
          key="receiptValidOnDate"
          text={`${t('receiptValidOnDate', {
            date: receiptEntryTime.toLocaleString(DateTime.DATE_FULL),
            startTime:
              i18n.language === 'fr'
                ? receiptEntryTime.toFormat("HH'h'mm")
                : receiptEntryTime.toFormat('HH:mm'),
            endTime:
              i18n.language === 'fr'
                ? receiptEntryTimePlus.toFormat("HH'h'mm")
                : receiptEntryTimePlus.toFormat('HH:mm'),
          })}`}
          style={ownStyles.cardRowText}
        />,
      ];
    }
    return [
      <CardRowText
        key="receiptValidFrom"
        text={t('receiptValidFrom')}
        style={ownStyles.cardRowText}
      />,
      <CardRowText
        key="receiptValidFromDate"
        text={`${t('receiptValidFromDate', {
          startDate: receiptEntryTime.toLocaleString(DateTime.DATE_FULL),
          startTime: receiptEntryTime.toFormat('HH:mm'),
          endDate: receiptEntryTimePlus.toLocaleString(DateTime.DATE_FULL),
          endTime: receiptEntryTimePlus.toFormat('HH:mm'),
        })}`}
        style={ownStyles.cardRowText}
      />,
    ];
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
    const { t } = this.props;

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
            <RedLogo />
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
              <ValidUntilBlock>{this.getValidUntilBlockText()}</ValidUntilBlock>
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
