import React from 'react';
import { Text, StyleSheet, ScrollView, View, Image } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Entypo } from '@expo/vector-icons';
import GoodsCategoryRow from './Subcomponents/GoodsCategoryRow';

const DeclareGoods = navigation => {
  const { container } = styles;

  return (
    <ScrollView style={container}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <GoodsCategoryRow {...navigation} />
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
