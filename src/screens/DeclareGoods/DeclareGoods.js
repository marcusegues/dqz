import React from 'react';
import { Text, StyleSheet, ScrollView, View, Image } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Entypo } from '@expo/vector-icons';
import GoodsCategoryRow from './Subcomponents/GoodsCategoryRow';
import { emptyBasket } from '../../constants/basket';

const DeclareGoods = ({
  navigation,
  getDutyForCategory,
  getIconForCategory,
}) => {
  const { container } = styles;

  return (
    <ScrollView style={container}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        {Object.keys(emptyBasket).map(category =>
          <GoodsCategoryRow
            key={category}
            categoryName={category}
            navigation={navigation}
            duty={getDutyForCategory(category)}
            icon={getIconForCategory(category)}
          />
        )}
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
