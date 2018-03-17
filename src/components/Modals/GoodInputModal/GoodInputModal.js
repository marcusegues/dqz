// @flow
import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  // $FlowFixMe
} from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { AppModal } from '../AppModal';
import { RedButton } from '../../Buttons/RedButton';
import { moderateScale } from '../../../styles/Scaling';

const ownStyles = StyleSheet.create({
  modalContainer: {
    top: '25%',
    flex: 0.48,
    width: '85%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 5,
    paddingBottom: 0,
    borderRadius: 3,
    alignSelf: 'center',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { height: 3, width: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
  },
  closeButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  mainTitle: {
    fontFamily: 'roboto_regular',
    fontSize: 24,
    color: '#141414',
  },
  subTitle: {
    fontFamily: 'roboto_regular',
    fontSize: 14,
    color: '#898989',
    marginBottom: 10,
  },
  inputRowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E1',
    borderTopColor: '#E0E0E1',
    paddingVertical: 17,
    paddingHorizontal: 10,
  },
  bottomInputRowContainer: {
    paddingBottom: 0,
    borderBottomWidth: 0,
    justifyContent: 'space-around',
    paddingHorizontal: 0,
  },
  inputRowLeftText: {
    fontFamily: 'roboto_medium',
    fontSize: 18,
    color: '#24253D',
    flex: 0.35,
  },
  bottomInputRowLeftText: {
    flex: 0.45,
    paddingLeft: 10,
  },
  inputRowRightText: {
    flex: 0.35,
    textAlign: 'right',
    fontFamily: 'roboto_medium',
    fontSize: 14,
    color: '#898989',
  },
  textInput: {
    height: 30,
    borderBottomWidth: 1,
    flex: 0.3,
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'roboto_regular',
  },
  priceInputContainer: {
    flexDirection: 'row',
    borderBottomColor: '#E0E0E1',
    borderBottomWidth: 1,
    paddingTop: 3,
    paddingBottom: 10,
    justifyContent: 'center',
  },
  subPrice: {
    fontFamily: 'roboto_regular',
    fontSize: 12,
    color: '#898989',
    paddingLeft: 10,
  },
  redButtonWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
});

type GoodInputModalProps = {
  onRequestClose: () => void,
  modalVisible: boolean,
  toggleModalVisible: () => void,
};

export const GoodInputModal = ({
  onRequestClose,
  modalVisible,
  toggleModalVisible,
}: GoodInputModalProps) => (
  <AppModal
    onRequestClose={onRequestClose}
    modalVisible={modalVisible}
    animationIn="slideInLeft"
    animationOut="slideOutLeft"
  >
    <View style={ownStyles.modalContainer}>
      <View style={ownStyles.closeButtonContainer}>
        <TouchableWithoutFeedback
          onPress={() => {
            toggleModalVisible();
          }}
        >
          <MaterialIcons name="close" size={28} color="#DC0018" />
        </TouchableWithoutFeedback>
      </View>

      <View style={{ paddingLeft: 10 }}>
        <Text style={ownStyles.mainTitle}>Alkoholische Getränke</Text>
        <Text style={ownStyles.subTitle}>Alkoholgehalt bis 18% Vol.</Text>
      </View>
      <View style={ownStyles.inputRowContainer}>
        <Text style={ownStyles.inputRowLeftText}>Menge</Text>
        <TouchableOpacity>
          <Entypo name="circle-with-minus" size={30} color="#E0E0E1" />
        </TouchableOpacity>
        <TextInput
          style={ownStyles.textInput}
          placeholder=""
          onChangeText={() => {}}
        />
        <TouchableOpacity>
          <Entypo
            name="circle-with-plus"
            size={moderateScale(36)}
            color="#DC0018"
          />
        </TouchableOpacity>
        <Text style={ownStyles.inputRowRightText}>Liter</Text>
      </View>

      <View
        style={[ownStyles.inputRowContainer, ownStyles.bottomInputRowContainer]}
      >
        <Text
          style={[ownStyles.inputRowLeftText, ownStyles.bottomInputRowLeftText]}
        >
          {`Wert`}
        </Text>
        <TextInput
          style={[ownStyles.textInput, { flex: 0.5 }]}
          placeholder=""
        />
        <Text style={[ownStyles.inputRowRightText]}>EUR</Text>
        <MaterialIcons name="arrow-drop-down" size={30} color="#DC0018" />
      </View>
      <View style={ownStyles.priceInputContainer}>
        <Text style={ownStyles.subPrice}>CHF 55,58</Text>
      </View>
      <View style={ownStyles.redButtonWrapper}>
        <RedButton text="ÜBERNEHMEN" onPress={() => {}} />
      </View>
    </View>
  </AppModal>
);
