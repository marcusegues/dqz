import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Entypo } from '@expo/vector-icons';

const GoodsCategoryRow = ({ navigation, categoryName, duty }) => {
  const { container } = styles;
  const { navigate } = navigation;
  return (
    <Touchable
      style={{}}
      background={Touchable.Ripple('#ccc', false)}
      onPress={() => navigate('SelectedGoods', { categoryName })}
    >
      <View
        style={{
          flexDirection: 'row',
          paddingBottom: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#979797',
          width: '85%',
        }}
      >
        <View style={{ width: '20%', height: 60 }}>
          <Image
            source={require('../../../../assets/images/kreuz.png')}
            resizeMode="contain"
            fadeDuration={0}
            style={{ width: 40, height: 60 }}
          />
        </View>
        <View style={{ width: '70%' }}>
          <Text style={{}}>
            {categoryName}
          </Text>
          <Text style={{}}>
            {duty ? `Duty: CHF ${duty}` : null}
          </Text>
        </View>
        <View style={{ width: '10%', alignSelf: 'center' }}>
          <Entypo name="chevron-thin-right" size={40} color="#000" />
        </View>
      </View>
    </Touchable>
  );
};

export default GoodsCategoryRow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
