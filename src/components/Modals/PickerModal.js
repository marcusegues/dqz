import React, { Component } from 'react';
import { View, Text, Picker, TouchableOpacity } from 'react-native';
import AppModal from './AppModal';
import RedButton from '../Buttons/RedButton';
import {
  standardPickerNumbers,
  standardPickerAmount,
  customPickerUnits,
  customPickerDecimalUnits,
} from './pickerData';
import ownStyles from './styles/PickerModal';
import globalStyles from '../../styles/globalStyles';

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

    return (
      <AppModal
        onRequestClose={this.props.onRequestClose}
        modalVisible={this.props.modalVisible}
      >
        <View style={[ownStyles.modalContainer, globalStyles.boxShadow]}>
          <View style={ownStyles.topTouchableContainer}>
            <View style={ownStyles.topTouchable}>
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
            <View style={ownStyles.topTouchable}>
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
              <View style={ownStyles.pickerContainer}>
                <View style={ownStyles.pickerNumberColumn}>
                  <Picker
                    selectedValue={this.state.standardInput.number}
                    onValueChange={itemValue =>
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
                    {standardPickerNumbers.map(i => (
                      <Picker.Item key={i.id} label={i.label} value={i.value} />
                    ))}
                  </Picker>
                </View>

                <View style={ownStyles.pickerDividerColumn}>
                  <Text style={ownStyles.pickerDividerColumnText}>X</Text>
                </View>

                <View style={ownStyles.pickerNumberColumn}>
                  <Picker
                    selectedValue={this.state.standardInput.amount}
                    onValueChange={itemValue =>
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
                    itemStyle={{}}
                  >
                    {standardPickerAmount.map(i => (
                      <Picker.Item key={i.id} label={i.label} value={i.value} />
                    ))}
                  </Picker>
                </View>

                <View style={ownStyles.pickerLiterColumn}>
                  <Text style={ownStyles.pickerLiterColumnText}>Liter</Text>
                </View>
              </View>
            ) : (
              <View style={ownStyles.pickerContainer}>
                <View style={ownStyles.pickerNumberColumn}>
                  <Picker
                    selectedValue={this.state.customInput.units}
                    onValueChange={itemValue =>
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
                    {customPickerUnits.map(i => (
                      <Picker.Item key={i.id} label={i.label} value={i.value} />
                    ))}
                  </Picker>
                </View>
                <View style={ownStyles.pickerDividerColumn}>
                  <Text style={ownStyles.pickerDividerColumnText}>,</Text>
                </View>

                <View style={ownStyles.pickerNumberColumn}>
                  <Picker
                    selectedValue={this.state.customInput.decimalUnits}
                    onValueChange={itemValue =>
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
                    itemStyle={{}}
                  >
                    {customPickerDecimalUnits.map(i => (
                      <Picker.Item key={i.id} label={i.label} value={i.value} />
                    ))}
                  </Picker>
                </View>

                <View style={ownStyles.pickerLiterColumn}>
                  <Text style={ownStyles.pickerLiterColumnText}>Liter</Text>
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
