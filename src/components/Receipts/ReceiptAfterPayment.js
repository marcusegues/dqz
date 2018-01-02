import React from 'react';
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

const ReceiptAfterPayment = ({ t }) => (
  <ScrollViewCard>
    <Logo />

    <Text style={ownStyles.topSumText}>CHF 56.50</Text>

    <ReceiptSubText
      text="Zollabgabe: 56.50   |   Mehrwertsteuer: 0.00"
      style={{
        alignSelf: 'center',
      }}
    />
    <View style={ownStyles.contentContainer}>
      <CardRowText
        text="Bezahlt am 20.12.2017 um 17:40 Uhr mit:"
        style={{ marginVertical: verticalScale(15) }}
      />
      <ReceiptSubText text="Mastercard XXXX XXXX XXXX 1234" />
      <ReceiptSubText text="Transaktions-ID (SIX): 123-456-789" />
      <ValidUntilBlock>
        <CardRowText
          text="Diese Quittung ist gültig bis:"
          style={{ color: '#fff', fontFamily: 'roboto_regular' }}
        />
        <CardRowText
          text="20. Dezember 2017   |   19:40 Uhr"
          style={{ color: '#fff', fontFamily: 'roboto_regular' }}
        />
      </ValidUntilBlock>
      <ReceiptSubText
        text="Zollabgabe in CHF:"
        style={{ fontSize: moderateScale(12), alignSelf: 'flex-end' }}
      />

      <Row borderTop>
        <Text>we can reuse DutyRow like in Overview.js</Text>
      </Row>
      <Row borderTop>
        <Text>we can reuse DutyRow like in Overview.js</Text>
      </Row>

      <ReceiptSubText
        text="Mehrwertsteuer in CHF:"
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
        text={`${t('sumText')}: 56.20`}
        style={{ alignSelf: 'flex-end', marginTop: 15, marginBottom: 35 }}
      />
      <ReceiptSubText
        text="Diese Quittung wird ein Jahr lang gespeichert. Solange können Sie die Quittung jederzeit in der App aufrufen."
        style={{ paddingBottom: 15 }}
      />
    </View>
  </ScrollViewCard>
);

export default translate(['payment'])(ReceiptAfterPayment);
