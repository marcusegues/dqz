// @flow
import React from 'react';
// $FlowFixMe
import { View, Text } from 'react-native';
import { translate } from 'react-i18next';
import ScrollViewCard from './subComponents/ScrollViewCard';
import Logo from './subComponents/Logo';
import { moderateScale, verticalScale } from '../../styles/Scaling';
import CardRowText from '../QuestionAnswer/cards/subcomponents/CardRowText';
import ReceiptSubText from './subComponents/ReceiptSubText';
import ValidUntilBlock from './subComponents/ValidUntilBlock';
import Row from '../Rows/Row';

const ownStyles = {
  topSumText: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(28),
    textAlign: 'center',
    marginTop: 10,
  },
  contentContainer: {
    borderTopWidth: 1,
    borderTopColor: '#E0E0E1',
    marginHorizontal: 16,
    marginTop: verticalScale(15),
  },
};

type ReceiptAfterPaymentScreenProps = {
  t: (field: string, params?: {}) => void,
};

const ReceiptAfterPayment = ({ t }: ReceiptAfterPaymentScreenProps) => (
  <ScrollViewCard>
    <Logo />
    <Text style={ownStyles.topSumText}>CHF 56.50</Text>
    <ReceiptSubText
      text={t('dutyAndVat', { duty: '56,50', vat: '0,00' })}
      style={{
        alignSelf: 'center',
      }}
    />

    <View style={ownStyles.contentContainer}>
      <CardRowText
        text={t('paidOn', { date: '20.12.2017', time: '17:40' })}
        style={{ marginVertical: verticalScale(15) }}
      />
      <ReceiptSubText text="Mastercard XXXX XXXX XXXX 1234" />
      <ReceiptSubText text={t('transactionId', { value: '123-456-789' })} />
      <ValidUntilBlock>
        <CardRowText
          text={t('receiptValidUntilText')}
          style={{ color: '#fff', fontFamily: 'roboto_regular' }}
        />
        <CardRowText
          text={t('receiptValidUntilTime', {
            date: '20. Dezember 2017',
            time: '19:40',
          })}
          style={{ color: '#fff', fontFamily: 'roboto_regular' }}
        />
      </ValidUntilBlock>
      <ReceiptSubText
        text={t('payment:dutyColumn')}
        style={{ fontSize: moderateScale(12), alignSelf: 'flex-end' }}
      />

      <Row borderTop>
        <Text>we can reuse DutyRow like in Overview.js</Text>
      </Row>
      <Row borderTop>
        <Text>we can reuse DutyRow like in Overview.js</Text>
      </Row>

      <ReceiptSubText
        text={t('vatColumn')}
        style={{
          fontSize: moderateScale(12),
          alignSelf: 'flex-end',
          marginTop: 25,
        }}
      />
      <Row borderTop>
        <Text>we can reuse DutyRow like in Overview.js</Text>
      </Row>
      <Row borderTop>
        <Text>we can reuse DutyRow like in Overview.js</Text>
      </Row>

      <CardRowText
        text={t('sumText', { value: 56.5 })}
        style={{ alignSelf: 'flex-end', marginTop: 15, marginBottom: 35 }}
      />
      <ReceiptSubText
        text={t('receiptStorageNotification')}
        style={{ paddingBottom: 15, lineHeight: 18 }}
      />
    </View>
  </ScrollViewCard>
);

export default translate(['receipt', 'payment'])(ReceiptAfterPayment);
