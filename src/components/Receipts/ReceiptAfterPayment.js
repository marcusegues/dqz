/* eslint-disable no-unused-vars,no-console */ // TODO REMOVE
// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { DateTime } from 'luxon';
import { Permissions } from 'expo';
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
import { flatLargeAmounts } from '../../model/utils';
import {
  dateTimeToFormat,
  dateTimeToLocaleString,
} from '../../utils/datetime/datetime';

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
        locale: i18n.language,
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
            date: dateTimeToLocaleString(receiptEntryTime, {
              locale: i18n.language,
              format: 'datefull',
            }),
            startTime: dateTimeToFormat(receiptEntryTime, {
              locale: i18n.language,
              format: 'time',
            }),
            endTime: dateTimeToFormat(receiptEntryTimePlus, {
              locale: i18n.language,
              format: 'time',
            }),
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
          startDate: dateTimeToLocaleString(receiptEntryTime, {
            locale: i18n.language,
            format: 'datefull',
          }),
          startTime: dateTimeToFormat(receiptEntryTime, {
            locale: i18n.language,
            format: 'time',
          }),
          endDate: dateTimeToLocaleString(receiptEntryTimePlus, {
            locale: i18n.language,
            format: 'datefull',
          }),
          endTime: dateTimeToFormat(receiptEntryTimePlus, {
            locale: i18n.language,
            format: 'time',
          }),
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
    const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      Permissions.askAsync(Permissions.CAMERA_ROLL).then(async ({ status }) => {
        if (status === 'granted') {
          this.saveToCameraRoll(snapshot);
        }
      });
    } else {
      this.saveToCameraRoll(snapshot);
    }
  }

  async saveToCameraRoll(snapshot) {
    try {
      await CameraRoll.saveToCameraRoll(snapshot, 'photo');
      alert('HEY! Saved to camera roll!');
    } catch (e) {}
  }

  render() {
    const { t, i18n } = this.props;

    if (this.state.receipt && this.state.receipt.receiptId !== undefined) {
      const { basket, people, amounts, currencies } = this.state.receipt;
      const vatReport = calculateVat(amounts, people, currencies);
      const dutyReport = calculateDuty(basket, people);
      const fullVat = vatReport.get('totalVat');
      const fullDuty = dutyReport.get('totalDuty');
      const transactionDatetime = DateTime.fromISO(
        this.state.receipt.paymentData.transaction.date
      );

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
          ref={ref => {
            this.image = ref;
          }}
          collapsable={false}
        >
          <ScrollViewCard>
            <RedLogo />
            <Row>
              <Text style={ownStyles.topSumText}>
                CHF {(fullVat + fullDuty).toFixed(2)}
              </Text>
              <ReceiptSubText
                text={t('dutyAndVat', {
                  duty: fullDuty.toFixed(2),
                  vat: fullVat.toFixed(2),
                })}
              />
              <ReceiptSubText
                text={t('travellers', {
                  adults: people.adults,
                  minors: people.minors,
                })}
                style={{ paddingBottom: verticalScale(16) }}
              />
            </Row>

            <Row
              width="90%"
              borderBottom={false}
              styles={{ alignItems: 'flex-start', paddingHorizontal: 0 }}
            >
              <CardRowText
                text={t('paidOn', {
                  date: dateTimeToFormat(transactionDatetime, {
                    locale: i18n.language,
                    format: 'date',
                  }),
                  time: dateTimeToFormat(transactionDatetime, {
                    locale: i18n.language,
                    format: 'time',
                  }),
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

            <DutyList basket={basket} people={people} swipeable={false} />
            <VatList
              large={false}
              people={people}
              amounts={amounts}
              currencies={currencies}
            />
            {flatLargeAmounts(amounts).length ? (
              <VatList
                large
                borderTop={false}
                people={people}
                amounts={amounts}
                currencies={currencies}
                headerRight={false}
              />
            ) : null}
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
