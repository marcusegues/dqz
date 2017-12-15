import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { moderateScale } from '../../styles/Scaling';

const Test = ({ standardInput }) =>
  <View>
    {standardInput ? <Text>standardInput</Text> : <Text> No message</Text>}
  </View>;

let pickerNumberId = 0;
let pickerAmountId = 0;

const pickerAmount = [
  {
    id: (pickerAmountId += 1),
    label: '0.33',
    value: '0.33',
  },
  {
    id: (pickerAmountId += 1),
    label: '0.5',
    value: '0.5',
  },
  {
    id: (pickerAmountId += 1),
    label: '0.75',
    value: '0.75',
  },
  {
    id: (pickerAmountId += 1),
    label: '1.0',
    value: '1.0',
  },
  {
    id: (pickerAmountId += 1),
    label: '1.5',
    value: '1.5',
  },
  {
    id: (pickerAmountId += 1),
    label: '2',
    value: '2',
  },
];

const pickerNumbers = [
  {
    id: (pickerNumberId += 1),
    label: '1',
    value: '1',
  },
  {
    id: (pickerNumberId += 1),
    label: '2',
    value: '2',
  },
  {
    id: (pickerNumberId += 1),
    label: '3',
    value: '3',
  },
  {
    id: (pickerNumberId += 1),
    label: '4',
    value: '4',
  },
  {
    id: (pickerNumberId += 1),
    label: '5',
    value: '5',
  },
  {
    id: (pickerNumberId += 1),
    label: '6',
    value: '6',
  },
  {
    id: (pickerNumberId += 1),
    label: '7',
    value: '7',
  },
  {
    id: (pickerNumberId += 1),
    label: '8',
    value: '8',
  },
  {
    id: (pickerNumberId += 1),
    label: '9',
    value: '9',
  },
];

class StandardInputPicker extends Component {
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
            {pickerNumbers.map(i =>
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
            {pickerAmount.map(i =>
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
export default StandardInputPicker;
