import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Badge, Text } from 'native-base';
import { Entypo } from '@expo/vector-icons';

const SelectedGoods = ({
  navigation,
  declaredBasket,
  onChangeQuantityDeclaredBasketItem,
}) => {
  const {
    container,
    incrementButtonContainer,
    roundButton,
    transparentButton,
    blueButton,
    redBadge,
  } = styles;
  const { navigate } = navigation;
  const { categoryName } = navigation.state.params;
  const { quantity, unit, icon } = declaredBasket[categoryName];
  return (
    <View style={container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          backgroundColor: '#D6D6D6',
        }}
      >
        <View style={{ flexDirection: 'column', paddingVertical: 20 }}>
          <Text>
            {categoryName}
          </Text>
          <Text>
            {`In Cart: ${quantity}${unit}.`}
          </Text>
        </View>
      </View>

      <View style={{ backgroundColor: '#E8E7E7', padding: 15 }}>
        <Text>CHF 17 pro Kg</Text>
      </View>

      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#979797',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Entypo name="shopping-cart" size={70} color="#000" />
            <Badge danger style={redBadge}>
              <Text>
                {quantity}
              </Text>
            </Badge>
          </View>
          <Text style={{ marginTop: 10 }}>Fleisch</Text>
          <View style={incrementButtonContainer}>
            <TouchableOpacity
              onPress={() =>
                onChangeQuantityDeclaredBasketItem(categoryName, -1)}
              style={[roundButton, transparentButton]}
            >
              <Text>-1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                onChangeQuantityDeclaredBasketItem(categoryName, 1)}
              style={[roundButton, blueButton]}
            >
              <Text style={{ color: 'white' }}>+1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                onChangeQuantityDeclaredBasketItem(categoryName, 3)}
              style={[styles.roundButton, styles.blueButton]}
            >
              <Text style={{ color: 'white' }}>+3</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SelectedGoods;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#fff',
  },
  incrementButtonContainer: {
    width: 170,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  roundButton: {
    borderWidth: 1,
    borderColor: '#34424B',
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  transparentButton: {
    backgroundColor: 'transparent',
  },
  blueButton: {
    backgroundColor: '#37424A',
  },
  redBadge: {
    alignSelf: 'center',
    marginBottom: 10,
    marginLeft: -20,
  },
});
