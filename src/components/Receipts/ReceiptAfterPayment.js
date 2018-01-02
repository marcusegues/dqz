import React from 'react';
import { View, Text } from 'react-native';
import ScrollViewCard from './subComponents/ScrollViewCard';
import Logo from './subComponents/Logo';
import { moderateScale, verticalScale } from '../../styles/Scaling';
import CardHeaderSubText from '../QuestionAnswer/cards/subcomponents/CardHeaderSubText';
import CardRowText from '../QuestionAnswer/cards/subcomponents/CardRowText';
import ReceiptSubText from './subComponents/ReceiptSubText';
import ValidUntilBlock from './subComponents/ValidUntilBlock';
import DutyRow from '../Overview/subcomponents/DutyRow';
import { getTotalQuantity } from '../../model/configurationApi';
import { getMainCategory } from '../../types/reducers/declaration';

const ownStyles = {};

const ReceiptAfterPayment = () => (
  <ScrollViewCard>
    <Logo />

    <Text
      style={{
        fontFamily: 'roboto_regular',
        fontSize: moderateScale(28),
        textAlign: 'center',
        marginTop: 10,
      }}
    >
      CHF 56.50
    </Text>

    <ReceiptSubText
      text="Zollabgabe: 56.50   |   Mehrwertsteuer: 0.00"
      style={{
        alignSelf: 'center',
      }}
    />
    <View
      style={{
        borderWidth: 1,
        borderTopColor: '#E0E0E1',
        marginHorizontal: 16,
        marginTop: verticalScale(15),
      }}
    >
      <CardRowText
        text="Bezahlt am 20.12.2017 um 17:40 Uhr mit:"
        style={{ marginVertical: verticalScale(15) }}
      />
      <ReceiptSubText text="Mastercard XXXX XXXX XXXX 1234" />
      <ReceiptSubText text="Transaktions-ID (SIX): 123-456-789" />
      <ValidUntilBlock>
        <CardRowText
          text="Diese Quittung ist gültig bis:"
          style={{ color: '#fff' }}
        />
        <CardRowText
          text="20. Dezember 2017   |   19:40 Uhr"
          style={{ color: '#fff' }}
        />
      </ValidUntilBlock>
      <ReceiptSubText
        text="Zollabgabe in CHF:"
        style={{ fontSize: moderateScale(12), alignSelf: 'flex-end' }}
      />
      {/*<DutyRow*/}
      {/*borderTop={false}*/}
      {/*key={1}*/}
      {/*mainCategory="Alcohol"*/}
      {/*category="wqe"*/}
      {/*quantity="1"*/}
      {/*duty="11"*/}
      {/*/>*/}
      {/*<DutyRow*/}
      {/*borderTop={idx === 0}*/}
      {/*key={category}*/}
      {/*mainCategory={getMainCategory(category)}*/}
      {/*category={category}*/}
      {/*quantity={getTotalQuantity(basket, category)}*/}
      {/*duty={duty.toFixed(2)}*/}
      {/*/>*/}
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
    </View>
  </ScrollViewCard>
);

export default ReceiptAfterPayment;
