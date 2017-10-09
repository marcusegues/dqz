import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { WebBrowser } from 'expo';
import { Badge } from 'native-base';
import { Entypo } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';

export default class Basket extends React.Component {
  _handlePay = () => {
    WebBrowser.openBrowserAsync('http://ambrite.ch');
  };

  render() {
    const { container } = styles;
    const width = Dimensions.get('window').width - 30;

    return (
      <View style={container}>
        <Text style={{ fontSize: 30 }}>Warenwert Eintragen</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam
          ipsum, iaculis dapibus lorem sed, eleifend pretium elit. Nulla nisl
          diam, vulputate ac massa dignissim.
        </Text>
        <View
          style={{
            width: width,
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 30,
            marginTop: 30,
          }}
        >
          <Text style={{ fontSize: 26 }}>410</Text>
          <View style={{ flexDirection: 'column' }}>
            <Text>Euro</Text>
            <Text>Kurs: 1.19</Text>
          </View>
          <TouchableOpacity>
            <Entypo name="circle-with-cross" size={40} color="#000" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Entypo name="circle-with-plus" size={60} color="#000" />
        </TouchableOpacity>
        <Text style={{ fontSize: 25 }}>Gesamt</Text>
        <View
          style={{
            width: width,
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 15,
            marginBottom: 30,
          }}
        >
          <Text>Ticket 1</Text>
          <Text>410 Euro</Text>
          <Text>1.19</Text>
          <Text>CHF 487.90</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: width,
            paddingRight: 30,
            marginBottom: 15,
          }}
        >
          <Text>Total</Text>
          <Text>CHF 487.90</Text>
        </View>
        <View style={{ flex: 1, width: width }}>
          <Touchable
            onPress={this._handlePay}
            style={{
              flex: 1,
              backgroundColor: '#f84c2d',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 5,
            }}
            background={Touchable.Ripple('blue')}
          >
            <Text
              style={{
                fontSize: 40,
                color: 'white',
              }}
            >
              Weiter
            </Text>
          </Touchable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    padding: 15,
  },
});
