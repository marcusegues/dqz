import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, TouchableOpacity } from 'react-native';
import AppModal from './AppModal';
import RedButton from '../Buttons/RedButton';
import { moderateScale, scale, verticalScale } from '../../styles/Scaling';

import StandardInputPicker from './StandardInputPicker';
import CustomInputPicker from './CustomInputPicker';
//
// const Test = ({ standardInput }) =>
//   <View>
//     {standardInput ? <Text>standardInput</Text> : <Text> No message</Text>}
//   </View>;

const touchableStyles = {
  alignItems: 'center',
  paddingVertical: 15,
  // borderWidth: 1,
};

const touchableTextStyles = {
  fontFamily: 'roboto_regular',
  fontSize: moderateScale(14),
};

const ownStyles = StyleSheet.create({
  modalContainer: {
    top: '25%',
    // flex: 0.5,
    width: '85%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // justifyContent: 'flex-start',
    // padding: 5,
    paddingBottom: verticalScale(16),
    borderRadius: 3,
    alignSelf: 'center',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { height: 3, width: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
  },

  redButtonWrapper: {
    // flex: 1,
    // borderWidth: 1,
    marginHorizontal: scale(8),
    // justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',

    // marginBottom: verticalScale(20),
  },
  touchableActive: {
    ...touchableStyles,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 3,
    borderTopColor: '#DC0018',
  },
  touchableInactive: {
    ...touchableStyles,
    backgroundColor: '#9B9B9B',
    borderTopWidth: 3,
    borderTopColor: '#9B9B9B',
  },
  touchableActiveText: {
    ...touchableTextStyles,
    color: '#000',
  },
  touchableInactiveText: {
    ...touchableTextStyles,
    color: '#fff',
  },
});

class PickerModal extends Component {
  state = {
    selected: 'standardInput' || 'customInput',
    standardInput: { number: Number, amount: Number },
    customInput: { units: Number, decimalUnits: Number },
  };

  render() {
    const totalAmount =
      this.state.standardInput.number * this.state.standardInput.amount;

    const { selected } = this.state;
    const standardInput = selected === 'standardInput';
    const customInput = selected === 'customInput';

    return (
      <AppModal
        onRequestClose={this.props.onRequestClose}
        modalVisible={this.props.modalVisible}
      >
        <View style={[ownStyles.modalContainer, {}]}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 0.5 }}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    selected: 'standardInput',
                  })}
                style={
                  standardInput
                    ? ownStyles.touchableActive
                    : ownStyles.touchableInactive
                }
              >
                <Text
                  style={
                    standardInput
                      ? ownStyles.touchableActiveText
                      : ownStyles.touchableInactiveText
                  }
                >
                  STANDARDMENGEN
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 0.5 }}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    selected: 'customInput',
                  })}
                style={
                  standardInput
                    ? ownStyles.touchableInactive
                    : ownStyles.touchableActive
                }
              >
                <Text
                  style={
                    standardInput
                      ? ownStyles.touchableInactiveText
                      : ownStyles.touchableActiveText
                  }
                >
                  INDIVIDUELL
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {standardInput ? <StandardInputPicker /> : <CustomInputPicker />}

          {/*<StandardInputPicker standardInput={standardInput} />*/}

          <View style={[ownStyles.redButtonWrapper, {}]}>
            {/*<RedButton*/}
            {/*text={*/}
            {/*totalAmount > 0*/}
            {/*? `${totalAmount.toFixed(2)} LITER ÜBERNEHMEN`*/}
            {/*: 'ÜBERNEHMEN'*/}
            {/*}*/}
            {/*/>*/}
            <RedButton text={this.state.selected} />
          </View>
        </View>
      </AppModal>
    );
  }
}
export default PickerModal;
