import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ownStyles = StyleSheet.create({
  quantityContainer: {
    paddingHorizontal: 6,
    backgroundColor: '#9B9B9B',
    borderRadius: 3,
  },
  quantityText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'roboto_regular',
  },
});

const QuantityIcon = () => (
    <View style={ownStyles.quantityContainer}>
      <Text style={ownStyles.quantityText}>{`${this.props.quantity} ${
        this.props.unit
      }`}</Text>
    </View>
  );

export default QuantityIcon;
