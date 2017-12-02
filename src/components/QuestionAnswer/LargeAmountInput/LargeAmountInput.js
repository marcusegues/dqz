import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { moderateScale } from '../../../styles/Scaling';
import * as colors from '../../../styles/colors';

const ownStyles = StyleSheet.create({
  inputRowContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E1',
    borderTopColor: '#E0E0E1',
    paddingVertical: 17,
    paddingHorizontal: 10,
  },
  textInput: {
    height: 30,
    borderBottomWidth: 1,
    flex: 0.3,
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'roboto_regular',
  },
  inputRowLeftText: {
    fontFamily: 'roboto_medium',
    fontSize: 18,
    color: '#24253D',
    flex: 0.35,
  },

  inputRowRightText: {
    flex: 0.35,
    textAlign: 'right',
    fontFamily: 'roboto_medium',
    fontSize: 14,
    color: '#898989',
  },
});

const LargeAmountInput = () => (
  <View style={[ownStyles.inputRowContainer]}>
    <Text
      style={[ownStyles.inputRowLeftText, ownStyles.bottomInputRowLeftText]}
    >
      {`Wert`}
    </Text>
    <TextInput style={[ownStyles.textInput, { flex: 0.5 }]} placeholder="" />
    <TouchableOpacity onPress={() => {}}>
      <Entypo
        name="circle-with-plus"
        size={moderateScale(28)}
        color={colors.MAIN_RED}
      />
    </TouchableOpacity>
    <Text style={[ownStyles.inputRowRightText]}>EUR</Text>
    <MaterialIcons name="arrow-drop-down" size={30} color="#DC0018" />
  </View>
);

export default LargeAmountInput;
