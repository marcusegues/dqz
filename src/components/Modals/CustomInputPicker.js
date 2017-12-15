import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { moderateScale } from '../../styles/Scaling';

let pickerDecimalUnitsId = 0;
let pickerUnitsId = 0;

const pickerUnits = [
  {
    id: (pickerUnitsId += 1),
    label: '1',
    value: '1',
  },
  {
    id: (pickerUnitsId += 1),
    label: '2',
    value: '2',
  },
  {
    id: (pickerUnitsId += 1),
    label: '3',
    value: '3',
  },
  {
    id: (pickerUnitsId += 1),
    label: '4',
    value: '4',
  },
  {
    id: (pickerUnitsId += 1),
    label: '5',
    value: '5',
  },
  {
    id: (pickerUnitsId += 1),
    label: '6',
    value: '6',
  },
  {
    id: (pickerUnitsId += 1),
    label: '7',
    value: '7',
  },
  {
    id: (pickerUnitsId += 1),
    label: '8',
    value: '8',
  },
  {
    id: (pickerUnitsId += 1),
    label: '9',
    value: '9',
  },
];

const pickerDecimalUnits = [
  {
    id: (pickerDecimalUnitsId += 1),
    label: '00',
    value: '00',
  },
  {
    id: (pickerDecimalUnitsId += 1),
    label: '10',
    value: '10',
  },
  {
    id: (pickerDecimalUnitsId += 1),
    label: '20',
    value: '20',
  },
  {
    id: (pickerDecimalUnitsId += 1),
    label: '30',
    value: '30',
  },
  {
    id: (pickerDecimalUnitsId += 1),
    label: '40',
    value: '40',
  },
  {
    id: (pickerDecimalUnitsId += 1),
    label: '50',
    value: '50',
  },
  {
    id: (pickerDecimalUnitsId += 1),
    label: '60',
    value: '60',
  },
  {
    id: (pickerDecimalUnitsId += 1),
    label: '70',
    value: '70',
  },
  {
    id: (pickerDecimalUnitsId += 1),
    label: '70',
    value: '70',
  },
  {
    id: (pickerDecimalUnitsId += 1),
    label: '80',
    value: '80',
  },
  {
    id: (pickerDecimalUnitsId += 1),
    label: '90',
    value: '90',
  },
];

class CustomInputPicker extends Component {
  state = {
    selected: 'standardInput' || 'customInput',
    standardInput: { number: Number, amount: Number },
    customInput: { units: Number, decimalUnits: Number },
  };

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          // borderWidth: 1,
        }}
      >
        <View style={{ flex: 0.25 }}>
          <Picker
            selectedValue={this.state.standardInput.number}
            onValueChange={itemValue =>
              this.setState({
                standardInput: {
                  ...this.state.standardInput,
                  number: itemValue,
                },
              })}
            mode="dropdown"
            prompt="Choose value"
            itemStyle={{}}
          >
            {pickerUnits.map(i =>
              <Picker.Item key={i.id} label={i.label} value={i.value} />
            )}
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
            onValueChange={itemValue =>
              this.setState({
                standardInput: {
                  ...this.state.standardInput,
                  amount: itemValue,
                },
              })}
            style={{}}
            mode="dropdown"
            prompt="Choose value"
            itemStyle={{
              // textAlign: 'left',
            }}
          >
            {pickerDecimalUnits.map(i =>
              <Picker.Item key={i.id} label={i.label} value={i.value} />
            )}
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
    );
  }
}
export default CustomInputPicker;
