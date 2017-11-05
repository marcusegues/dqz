import React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Button,
} from 'react-native';
import { Container, Body, Header, Icon } from 'native-base';
import Touchable from 'react-native-platform-touchable';
import { Entypo } from '@expo/vector-icons';
import GoodsCategoryRow from './Subcomponents/GoodsCategoryRow';
import { CATEGORIES_INFO } from '../../constants/categories';
import GoodsInput from './Subcomponents/GoodsInput';

class DeclareGoods extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    const stateObject = {};
    Object.keys(CATEGORIES_INFO).forEach(category => {
      stateObject[category] = false;
    });
    this.state = stateObject;
    this.handleToggleExpanded = this.handleToggleExpanded.bind(this);
  }

  handleToggleExpanded(categoryName, expanded) {
    const stateObject = { ...this.state };
    Object.keys(CATEGORIES_INFO).forEach(category => {
      stateObject[category] = false;
    });
    stateObject[categoryName] = expanded;
    this.setState(stateObject);
  }

  render() {
    const { container } = styles;
    const {
      navigation,
      getDutyForCategory,
      declaredBasket,
      onChangeQuantityDeclaredBasketItem,
    } = this.props;
    return (
      <ScrollView style={container}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          {Object.keys(CATEGORIES_INFO).map(category => (
            <GoodsCategoryRow
              key={category}
              categoryName={category}
              navigation={navigation}
              categoryInfo={CATEGORIES_INFO[category]}
              categoryState={declaredBasket[category]}
              expanded={this.state[category]}
              handleToggleExpanded={this.handleToggleExpanded}
            >
              <GoodsInput
                categoryName={category}
                onChangeQuantityDeclaredBasketItem={
                  onChangeQuantityDeclaredBasketItem
                }
              />
            </GoodsCategoryRow>
          ))}
        </View>
      </ScrollView>
    );
  }
}

export default DeclareGoods;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
