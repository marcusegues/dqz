import React from 'react';
import { View, Text } from 'react-native';
import { translate } from 'react-i18next';
import ScrollViewCard from './subComponents/ScrollViewCard';
import Logo from './subComponents/Logo';
import { moderateScale, verticalScale } from '../../styles/Scaling';
// import CardHeaderSubText from '../QuestionAnswer/cards/subcomponents/CardHeaderSubText';
import CardRowText from '../QuestionAnswer/cards/subcomponents/CardRowText';
import ReceiptSubText from './subComponents/ReceiptSubText';
import ValidUntilBlock from './subComponents/ValidUntilBlock';
// import DutyRow from '../Overview/subcomponents/DutyRow';
// import { getTotalQuantity } from '../../model/configurationApi';
// import { getMainCategory } from '../../types/reducers/declaration';
// import { calculateDuty } from '../../model/dutyCalculations';
import Row from '../Rows/Row';

// const ownStyles = {};

class ReceiptAfterPayment extends React.Component {
  render() {
    const { t } = this.props;
    // const { basket, people, t } = this.props;
    // const dutyReport = calculateDuty(basket, people);
    return (
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

          <Row borderTop>
            <Text>DutyRow like in Overview.js</Text>
          </Row>
          <Row borderTop>
            <Text>DutyRow like in Overview.js</Text>
          </Row>

          <ReceiptSubText
            text="Zollabgabe in CHF:"
            style={{
              fontSize: moderateScale(12),
              alignSelf: 'flex-end',
              marginTop: 25,
            }}
          />
          <Row borderTop>
            <Text>DutyRow like in Overview.js</Text>
          </Row>
          <Row borderTop>
            <Text>DutyRow like in Overview.js</Text>
          </Row>

          <CardRowText
            text={`${t('sumText')}: 56.20`}
            // text={`${t('sumText')}: ${dutyReport.totalDuty.toFixed(2)}`}
            style={{ alignSelf: 'flex-end', marginVertical: 20 }}
          />
          <ReceiptSubText text="Diese Quittung wird ein Jahr lang gespeichert. Solange können Sie die Quittung jederzeit in der App aufrufen." />

          {/*<View style={{ flex: 1, width: '100%' }}>*/}
          {/* {dutyReport */}
          {/* .get('dutyByCategoryRaw') */}
          {/* .entrySeq() */}
          {/* .filter(entry => getTotalQuantity(basket, entry[0]) > 0) */}
          {/* .map(([category, duty], idx) => ( */}
          {/* <DutyRow */}
          {/* borderTop={idx === 0} */}
          {/* key={category} */}
          {/* mainCategory={getMainCategory(category)} */}
          {/* category={category} */}
          {/* quantity={getTotalQuantity(basket, category)} */}
          {/* duty={duty.toFixed(2)} */}
          {/* /> */}
          {/* ))} */}
          {/*<View*/}
          {/*style={{ alignSelf: 'flex-end', marginRight: 16, marginTop: 16 }}*/}
          {/*>*/}
          {/*<CardRowText*/}
          {/*text={`${t('sumText')}: ${dutyReport.totalDuty.toFixed(2)}`}*/}
          {/*/>*/}
          {/*</View>*/}
        </View>
      </ScrollViewCard>
    );
  }
}

export default translate(['payment'])(ReceiptAfterPayment);
