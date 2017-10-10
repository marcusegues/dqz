import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Entypo } from '@expo/vector-icons';

const GoodsCategoryRow = ({ navigation, categoryName, duty, icon }) => {
  const { container } = styles;
  const { navigate } = navigation;
  let imgUrl = '';
  switch (icon) {
    case 'chicken': {
      imgUrl = require(`../../../../assets/icons/chicken.png`);
      break;
    }
    case 'beer': {
      imgUrl = require(`../../../../assets/icons/beer.png`);
      break;
    }
    case 'butter': {
      imgUrl = require(`../../../../assets/icons/butter.png`);
      break;
    }
    case 'oil': {
      imgUrl = require(`../../../../assets/icons/oil.png`);
      break;
    }
    default: {
      imgUrl = require(`../../../../assets/images/kreuz.png`);
    }
  }

  return (
    <Touchable
      style={{}}
      background={Touchable.Ripple('#ccc', false)}
      onPress={() => navigate('SelectedGoods', { categoryName })}
    >
      <View style={container}>
        <View style={{ width: '20%', height: 60 }}>
          <Image
            source={imgUrl}
            resizeMode="contain"
            fadeDuration={0}
            style={{ width: 50, height: 50 }}
          />
        </View>
        <View style={{ width: '75%' }}>
          <Text style={{}}>
            {categoryName}
          </Text>
          <Text style={{}}>
            {duty ? `Duty: CHF ${duty}` : null}
          </Text>
        </View>
        <View
          style={{
            width: '10%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <Entypo name="chevron-thin-right" size={20} color="#000" />
        </View>
      </View>
    </Touchable>
  );
};

export default GoodsCategoryRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0, 0.1)',
    width: '90%',
  },
});
