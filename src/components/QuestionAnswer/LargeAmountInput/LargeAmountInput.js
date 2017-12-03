import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { moderateScale } from '../../../styles/Scaling';
import * as colors from '../../../styles/colors';

const incomplete = require('../../../../assets/images/incomplete.png');

const ownStyles = StyleSheet.create({
  inputRowContainer: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#E0E0E1',
    paddingVertical: 5,
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

class LargeAmountInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      validation: '',
    };
    this.handleAddLargeAmount = this.handleAddLargeAmount.bind(this);
    this.getTotalAmount = this.getTotalAmount.bind(this);
  }

  handleAddLargeAmount() {
    if (this.state.input === '') {
      return;
    }
    if (isNaN(parseInt(this.state.input))) {
      this.setState({ input: '', validation: 'Please enter valid number' });
      return;
    }
    if (parseInt(this.state.input) < 300) {
      this.setState({ validation: 'Enter values larger than 300.' });
      return;
    }
    this.props.onAddLargeAmount(this.state.input);
    this.setState({
      input: '',
    });
  }

  getTotalAmount() {
    return (
      this.props.largeAmounts.reduce((acc, val) => acc + val, 0) +
      this.props.savedLargeAmounts.reduce((acc, val) => acc + val, 0)
    );
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'column',
          borderTopWidth: 1,
          borderTopColor: '#E0E0E1',
          alignItems: 'center',
          width: '100%',
          borderBottomColor: '#E0E0E1',
          borderBottomWidth: 1,
        }}
      >
        <View style={[ownStyles.inputRowContainer]}>
          <Text
            style={[
              ownStyles.inputRowLeftText,
              ownStyles.bottomInputRowLeftText,
            ]}
          >
            {`Wert`}
          </Text>
          <View
            style={{ flex: 1, height: 50, width: 200, flexDirection: 'column' }}
          >
            <TextInput
              style={[ownStyles.textInput, { flex: 1 }]}
              value={this.state.input}
              onChangeText={input => this.setState({ input, validation: '' })}
              placeholder=""
            />
            <View style={{ height: 20 }}>
              {this.state.validation ? (
                <View
                  style={{
                    marginTop: 3,
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={incomplete}
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                  <Text style={{ fontSize: 10, marginLeft: 3 }}>
                    {this.state.validation}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
          <TouchableOpacity onPress={() => this.handleAddLargeAmount()}>
            <Entypo
              name="circle-with-plus"
              size={moderateScale(28)}
              color={colors.MAIN_RED}
            />
          </TouchableOpacity>
          <Text style={[ownStyles.inputRowRightText]}>CHF</Text>
        </View>
        <View
          style={{ height: 25, alignSelf: 'flex-start', paddingHorizontal: 10 }}
        >
          <Text>{`${this.props.savedLargeAmounts.join(', ')}${
            this.props.savedLargeAmounts.isEmpty() ? '' : ', '
          }${this.props.largeAmounts.join(', ')}`}</Text>
        </View>
        <View
          style={{ height: 25, alignSelf: 'flex-start', paddingHorizontal: 10 }}
        >
          <Text
            style={{
              fontFamily: 'roboto_medium',
              fontSize: 18,
              color: '#24253D',
            }}
          >{`Total: ${this.getTotalAmount()}`}</Text>
        </View>
      </View>
    );
  }
}

export default LargeAmountInput;
