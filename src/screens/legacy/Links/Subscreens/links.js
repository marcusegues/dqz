import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { WebBrowser } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';

export default class Links extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.optionsTitleText}>Resources</Text>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handleDazit}
        >
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Image
                source={require('../../../../assets/images/kreuz.png')}
                resizeMode="contain"
                fadeDuration={0}
                style={{ width: 30, height: 20, marginTop: 1 }}
              />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>DaziT</Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          background={Touchable.Ripple('#ccc', false)}
          style={styles.option}
          onPress={this._handleInfo}
        >
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Image
                source={require('../../../../assets/images/kreuz.png')}
                resizeMode="contain"
                fadeDuration={0}
                style={{ width: 30, height: 20 }}
              />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>General Information</Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handleAmbrite}
        >
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Image
                source={require('../../../../assets/images/ambrite.png')}
                fadeDuration={0}
                style={{ width: 30, height: 20 }}
              />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>ambrite</Text>
            </View>
          </View>
        </Touchable>
      </View>
    );
  }

  _handleInfo = () => {
    WebBrowser.openBrowserAsync('https://www.ezv.admin.ch/ezv/de/home.html');
  };

  _handleDazit = () => {
    WebBrowser.openBrowserAsync(
      'https://www.ezv.admin.ch/ezv/de/home/themen/projekte/dazit.html'
    );
  };

  _handleAmbrite = () => {
    WebBrowser.openBrowserAsync('http://ambrite.ch');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
});
