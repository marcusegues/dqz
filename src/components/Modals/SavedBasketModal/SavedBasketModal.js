import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Touchable,
} from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import AppModal from '../AppModal';
import RedButton from '../../Buttons/RedButton';
import ModalCard from '../ModalCard';
import PickerCard from '../CurrencyPickerModal/subComponents/PickerCard';
import CardHeader from '../../QuestionAnswer/cards/subcomponents/CardHeader';
import CardHeaderSubText from '../../QuestionAnswer/cards/subcomponents/CardHeaderSubText';
import { moderateScale, scale, verticalScale } from '../../../styles/Scaling';
import Row from '../../Rows/Row';
import CardRowText from '../../QuestionAnswer/cards/subcomponents/CardRowText';
import CardRowSubText from '../../QuestionAnswer/cards/subcomponents/CardRowSubText';
import { GREY } from '../../../styles/colors';

const ownStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: scale(20),
  },
  redButtonWrapper: {
    width: '95%',
    alignSelf: 'center',
  },
});

const SavedBasketModal = ({ onRequestClose, modalVisible }) => (
  <AppModal onRequestClose={onRequestClose} modalVisible={modalVisible}>
    <PickerCard style={{ top: '30%' }}>
      <CardHeader text="Waren anmelden" />
      <CardHeaderSubText
        text="Möchten Sie mit dem bereits bestehenden Warenkorb fortfahren oder mit einem leeren Warenkorb neu starten?"
        style={{ lineHeight: moderateScale(18), marginBottom: 30 }}
      />

      <Row borderTop>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View style={ownStyles.container}>
            <MaterialIcons
              name="shopping-cart"
              size={moderateScale(40)}
              color={GREY}
            />
            <View style={ownStyles.textContainer}>
              <CardRowText text="21. November 2017" />
              <CardRowSubText text="Gesamtkosten: CHF 6.00 " />
            </View>
            <Entypo
              name="chevron-right"
              size={moderateScale(25)}
              color="#24253D"
            />
          </View>
        </TouchableWithoutFeedback>
      </Row>

      <View style={ownStyles.redButtonWrapper}>
        <RedButton text="Neuer Warenkorb" onPress={() => {}} />
      </View>
    </PickerCard>
  </AppModal>
);

export default SavedBasketModal;
