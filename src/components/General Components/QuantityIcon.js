import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CategoriesInfo } from '../../model/constants';

const ownStyles = StyleSheet.create({
  quantityContainer: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#E0E0E1',
    borderRadius: 3,
  },
  quantityText: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'roboto_regular',
  },
});

const QuantityIcon = ({ quantity, category }) => (
  <View style={ownStyles.quantityContainer}>
    <Text style={ownStyles.quantityText}>{`${quantity} ${CategoriesInfo.get(
      category
    ).get('unit')}`}</Text>
  </View>
);

export default QuantityIcon;
