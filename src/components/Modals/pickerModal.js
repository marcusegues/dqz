import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, TouchableOpacity } from 'react-native';
import AppModal from './AppModal';
import RedButton from '../Buttons/RedButton';
import { moderateScale, scale, verticalScale } from '../../styles/Scaling';
import { pickerNumbers, pickerAmount } from './StandardInputPicker';
import { pickerUnits, pickerDecimalUnits } from './CustomInputPicker';

import { boxShadow } from '../../styles/globalStyles';

const touchableStyles = {
  alignItems: 'center',
  paddingVertical: 15,
};

const touchableTextStyles = {
  fontFamily: 'roboto_regular',
  fontSize: moderateScale(14),
};

const ownStyles = StyleSheet.create({
  modalContainer: {
    ...boxShadow,
    top: '25%',
    width: '85%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: verticalScale(16),
    borderRadius: 3,
    alignSelf: 'center',
    backgroundColor: '#FFF',
  },

  redButtonWrapper: {
    marginHorizontal: scale(8),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
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

  standardTotalAmount() {
    if (
      this.state.standardInput.number > 0 &&
      this.state.standardInput.amount > 0
    ) {
      return `${this.state.standardInput.number *
        this.state.standardInput.amount} LITER`;
    }
    return '';
  }
  customTotalAmount() {
    if (
      this.state.customInput.units > 0 &&
      this.state.customInput.decimalUnits >= 0
    ) {
      return `${(
        (this.state.customInput.units + this.state.customInput.decimalUnits) *
        0.01
      ).toFixed(2)} LITER`;
    }
    return '';
  }

  render() {
    const { selected } = this.state;
    const standardInput = selected === 'standardInput';
    // const customInput = selected === 'customInput';

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
                  })
                }
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
                  })
                }
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

          <View>
            {standardInput ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                <View style={{ flex: 0.25 }}>
                  <Picker
                    selectedValue={this.state.standardInput.number}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({
                        standardInput: {
                          ...this.state.standardInput,
                          number: itemValue,
                        },
                      })
                    }
                    mode="dropdown"
                    prompt="Choose value"
                    itemStyle={{}}
                  >
                    {pickerNumbers.map(i => (
                      <Picker.Item key={i.id} label={i.label} value={i.value} />
                    ))}
                  </Picker>
                </View>

                <View
                  style={{
                    flex: 0.15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'roboto_regular',
                      fontSize: moderateScale(16),
                      color: '#898989',
                    }}
                  >
                    X
                  </Text>
                </View>

                <View style={{ flex: 0.25 }}>
                  <Picker
                    selectedValue={this.state.standardInput.amount}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({
                        standardInput: {
                          ...this.state.standardInput,
                          amount: itemValue,
                        },
                      })
                    }
                    style={{}}
                    mode="dropdown"
                    prompt="Choose value"
                    itemStyle={
                      {
                        // textAlign: 'left',
                      }
                    }
                  >
                    {pickerAmount.map(i => (
                      <Picker.Item key={i.id} label={i.label} value={i.value} />
                    ))}
                  </Picker>
                </View>

                <View
                  style={{
                    flex: 0.2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'roboto_regular',
                      fontSize: moderateScale(14),
                      color: '#898989',
                    }}
                  >
                    Liter
                  </Text>
                </View>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  // borderWidth: 1,
                }}
              >
                <View style={{ flex: 0.25 }}>
                  <Picker
                    selectedValue={this.state.customInput.units}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({
                        customInput: {
                          ...this.state.customInput,
                          units: itemValue,
                        },
                      })
                    }
                    mode="dropdown"
                    prompt="Choose value"
                    itemStyle={{}}
                  >
                    {pickerUnits.map(i => (
                      <Picker.Item key={i.id} label={i.label} value={i.value} />
                    ))}
                  </Picker>
                </View>
                <View
                  style={{
                    flex: 0.15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'roboto_regular',
                      fontSize: moderateScale(16),
                      color: '#898989',
                    }}
                  >
                    ,
                  </Text>
                </View>

                <View style={{ flex: 0.25 }}>
                  <Picker
                    selectedValue={this.state.customInput.decimalUnits}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({
                        customInput: {
                          ...this.state.customInput,
                          decimalUnits: itemValue,
                        },
                      })
                    }
                    style={{}}
                    mode="dropdown"
                    prompt="Choose value"
                    itemStyle={
                      {
                        // textAlign: 'left',
                      }
                    }
                  >
                    {pickerDecimalUnits.map(i => (
                      <Picker.Item key={i.id} label={i.label} value={i.value} />
                    ))}
                  </Picker>
                </View>

                <View
                  style={{
                    flex: 0.2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'roboto_regular',
                      fontSize: moderateScale(14),
                      color: '#898989',
                    }}
                  >
                    Liter
                  </Text>
                </View>
              </View>
            )}
          </View>
          <View style={[ownStyles.redButtonWrapper, {}]}>
            <RedButton
              text={
                standardInput
                  ? `${this.standardTotalAmount()}  ÜBERNEHMEN`
                  : `${this.customTotalAmount()} ÜBERNEHMEN`
              }
            />
          </View>
        </View>
      </AppModal>
    );
  }
}
export default PickerModal;
