import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';

class GoodsInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      container,
      inputContainer,
      roundButton,
      transparentButton,
      blueButton,
      redBadge,
    } = styles;
    const { onChangeQuantityDeclaredBasketItem, categoryName } = this.props;
    return (
      <View
        style={{
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <View style={inputContainer}>
          <View style={{ width: '30%' }}>
            <Text style={{ fontFamily: 'open_sans_bold' }}>{`Hinzufügen`}</Text>
          </View>
          <View
            style={{
              width: '70%',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
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
    );
  }
}

export default GoodsInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#fff',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  roundButton: {
    borderWidth: 1,
    borderColor: '#34424B',
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    borderRadius: 100,
    marginLeft: 10,
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
