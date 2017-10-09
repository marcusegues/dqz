import React from 'react';
import { Text, StyleSheet, ScrollView, View, Image } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Entypo } from '@expo/vector-icons';

const DeclareGoods = navigation => {
  const { container, profileData, userTitle, userName } = styles;
  const { navigate } = navigation;
  return (
    <ScrollView style={container}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Touchable
          style={{}}
          background={Touchable.Ripple('#ccc', false)}
          onPress={() => navigate('SelectedGoods')}
          // onPress={() => navigate('DeclareGoods')}
          // onPress={() => console.log('pressed')}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 10,
              // paddingHorizontal: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#979797',
              width: '85%',
            }}
          >
            <View>
              <Image
                source={require('../../../assets/images/kreuz.png')}
                resizeMode="contain"
                fadeDuration={0}
                style={{ width: 40, height: 60 }}
              />
            </View>
            <View style={{}}>
              <Text style={{}}>Fleisch und Fleischzubereiten</Text>
              <Text>Bleibende Quota: 2 Kg</Text>
              <Text>Danach CHF 17 pro Kg </Text>
            </View>
            <View style={{ alignSelf: 'center' }}>
              <Entypo name="chevron-thin-right" size={40} color="#000" />
            </View>
          </View>
        </Touchable>

        <Touchable
          style={{}}
          background={Touchable.Ripple('#ccc', false)}
          onPress={() => console.log('button is pressed')}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#979797',
              width: '85%',
            }}
          >
            <View>
              <Image
                source={require('../../../assets/images/kreuz.png')}
                resizeMode="contain"
                fadeDuration={0}
                style={{ width: 40, height: 60, marginTop: 1 }}
              />
            </View>
            <View style={{}}>
              <Text style={{}}>Fleisch und Fleischzubereiten</Text>
              <Text>Bleibende Quota: 2 Kg</Text>
              <Text>Danach CHF 17 pro Kg </Text>
            </View>
            <View style={{ alignSelf: 'center' }}>
              <Entypo name="chevron-thin-right" size={40} color="#000" />
            </View>
          </View>
        </Touchable>
      </View>
    </ScrollView>
  );
};

export default DeclareGoods;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
