import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ownStyles = StyleSheet.create({
  categoryIcon: {
    height: 64,
    width: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 40,
    height: 40,
  },
});

const CategoryIcon = ({ source }) => (
    <View style={ownStyles.categoryIcon}>
      <Image source={source} style={ownStyles.image} resizeMode="contain" />
    </View>
  );

export default CategoryIcon;
