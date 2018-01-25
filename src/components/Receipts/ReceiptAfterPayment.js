// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { View, Text, CameraRoll } from 'react-native';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
// $FlowFixMe
import { takeSnapshotAsync } from 'expo';
import { translate } from 'react-i18next';
import { ScrollViewCard } from './subComponents/ScrollViewCard';
import { RedLogo } from './subComponents/Logo';
import { moderateScale, scale, verticalScale } from '../../styles/Scaling';
import { CardRowText } from '../QuestionAnswer/cards/subcomponents/CardRowText';
import { ReceiptSubText } from './subComponents/ReceiptSubText';
import { ValidUntilBlock } from './subComponents/ValidUntilBlock';
import { DutyRow } from '../Overview/subcomponents/DutyRow';
import { VatRow } from '../Overview/subcomponents/VatRow';
import type { TFunction } from '../../types/generalTypes';
import { analyticsScreenMounted } from '../../analytics/analyticsApi';

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
  receiptSubTextDutyAndVat: {
    alignSelf: 'center',
  },
  receiptSubTextNotification: {
    paddingBottom: verticalScale(15),
    lineHeight: 18,
  },
};

type ReceiptAfterPaymentScreenProps = {
  t: TFunction,
};

class ReceiptAfterPaymentInner extends React.Component<
  ReceiptAfterPaymentScreenProps
> {
  componentWillMount() {
    analyticsScreenMounted('ReceiptAfterPayment');
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
        <Text style={ownStyles.topSumText}>CHF 56.50</Text>
        <ReceiptSubText
          text={t('dutyAndVat', {
            duty: '56,50',
            vat: '0,00',
          })}
          style={ownStyles.receiptSubTextDutyAndVat}
        />

        <View style={ownStyles.contentContainer}>
          <CardRowText
            text={t('paidOn', {
              date: '20.12.2017',
              time: '17:40',
            })}
            style={ownStyles.cardRowTextPaidOn}
          />

          <ReceiptSubText text="Mastercard XXXX XXXX XXXX 1234" />
          <ReceiptSubText text={t('transactionId', { value: '123-456-789' })} />
          <ValidUntilBlock>
            <CardRowText
              text={t('receiptValidUntilText')}
              style={ownStyles.cardRowText}
            />
            <CardRowText
              text={t('receiptValidUntilTime', {
                date: '20. Dezember 2017',
                time: '19:40',
              })}
              style={ownStyles.cardRowText}
            />
          </ValidUntilBlock>
          <ReceiptSubText
            text={t('payment:dutyColumn')}
            style={ownStyles.receiptSubTextDuty}
          />

          <DutyRow mainCategory="Meat" category="Meat" quantity={2} duty={4} />
          <DutyRow mainCategory="Meat" category="Meat" quantity={2} duty={4} />

          <ReceiptSubText
            text={t('vatColumn')}
            style={ownStyles.receiptSubTextVat}
          />
          <VatRow quantity={205.59} vat={44} />

          <CardRowText
            text={t('sumText', { value: 56.5 })}
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
}

export const ReceiptAfterPayment = (translate([
  'receipt',
  'payment',
  'mainCategories',
  'categories',
])(ReceiptAfterPaymentInner): ComponentType<{}>);
