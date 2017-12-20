import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CategoriesInfo } from '../../model/constants';

const ownStyles = StyleSheet.create({
  quantityContainer: {
    paddingHorizontal: 6,
    backgroundColor: '#9B9B9B',
    borderRadius: 3,
    marginTop: 10,
  },
  quantityText: {
    color: '#fff',
    fontSize: 12,
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
