import React from 'react';
import { Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { moderateScale } from '../../../styles/Scaling';
import ownStyles from '../styles/ReceiptNotificationBadge';
import { getDeclarationBasket, getDeclarationPeople } from '../../../reducers';
import { calculateDuty } from '../../../model/dutyCalculations';
import { MAIN_RED } from '../../../styles/colors';

const ReceiptNotificationBadge = ({ basket, people }) => {
  // TODO -> add vat!
  const duty = calculateDuty(basket, people).get('totalDuty', 0);
  return (
    <Touchable onPress={() => {}}>
      <View
        style={[
          ownStyles.container,
          { backgroundColor: duty ? MAIN_RED : 'lightgray' },
        ]}
      >
        <MaterialIcons
          name="shopping-cart"
          size={moderateScale(17)}
          color="white"
          style={ownStyles.receiptIcon}
        />
        <Text style={ownStyles.amountText}>CHF {duty.toFixed(2)}</Text>
      </View>
    </Touchable>
  );
};

const mapStateToProps = state => ({
  basket: getDeclarationBasket(state),
  people: getDeclarationPeople(state),
});

export default connect(mapStateToProps)(ReceiptNotificationBadge);
