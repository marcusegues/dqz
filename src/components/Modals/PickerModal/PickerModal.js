// @flow
import React from 'react';
// $FlowFixMe
import { View, Text, Picker, TouchableOpacity } from 'react-native';
import { translate } from 'react-i18next';

import AppModal from '../AppModal';
import RedButton from '../../Buttons/RedButton';
import {
  standardPickerNumbers,
  standardPickerAmount,
  customPickerUnits,
  customPickerDecimalUnits,
} from './pickerData';
import ownStyles from '../styles/PickerModal';
import globalStyles from '../../../styles/globalStyles';

type PickerState = {
  selected: 'standardInput' | 'customInput',
  standardInput: {
    number: string,
    amount: string,
  },
  customInput: {
    units: string,
    decimalUnits: string,
  },
};

class PickerModal extends React.Component<any, PickerState> {
  state = {
    selected: 'standardInput' || 'customInput',
    standardInput: {
      number: '1',
      amount: '0.33',
    },
    customInput: {
      units: '1',
      decimalUnits: '00',
    },
  };

  standardTotalAmount(): number {
    const {
      number: numberString,
      amount: amountString,
    } = this.state.standardInput;

    const number = +numberString;
    const amount = +amountString;
    if (number < 0 || amount < 0) {
      return 0;
    }
    return number * amount;
  }

  customTotalAmount(): number {
    const {
      units: unitsString,
      decimalUnits: decimalUnitsString,
    } = this.state.customInput;

    const units = +unitsString;
    const decimalUnits = +decimalUnitsString;
    if (units < 0 || decimalUnits < 0) {
      return 0;
    }
    return units + decimalUnits / 100;
  }

  render() {
    const { selected } = this.state;
    const { t } = this.props;
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
                  {t('standardCategoryPicker').toUpperCase()}
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
                  {t('individualCategoryPicker').toUpperCase()}
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
              text={t(['confirmPicker'], {
                value: (standardInput
                  ? this.standardTotalAmount()
                  : this.customTotalAmount()
                ).toFixed(2),
              })}
            />
          </View>
        </View>
      </AppModal>
    );
  }
}

export default translate(['modal'])(PickerModal);
