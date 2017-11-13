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
import { CATEGORIES_INFO } from '../../model2/constants/categories';
import GoodsInput from './Subcomponents/GoodsInput';

class DeclareGoods extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    const stateObject = {};
    CATEGORIES_INFO.forEach((categoryInfo, category) => {
      stateObject[category] = false;
    });
    this.state = stateObject;
    this.handleToggleExpanded = this.handleToggleExpanded.bind(this);
  }

  handleToggleExpanded(categoryName, expanded) {
    const stateObject = { ...this.state };
    CATEGORIES_INFO.forEach((categoryInfo, category) => {
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

    const list = CATEGORIES_INFO.entrySeq().map(entry =>
      <GoodsCategoryRow
        key={entry[0]}
        categoryName={entry[0]}
        navigation={navigation}
        categoryInfo={entry[1]}
        categoryState={declaredBasket.get(entry[0])}
        expanded={this.state[entry[0]]}
        handleToggleExpanded={this.handleToggleExpanded}
      >
        <GoodsInput
          categoryName={entry[0]}
          onChangeQuantityDeclaredBasketItem={
            onChangeQuantityDeclaredBasketItem
          }
        />
      </GoodsCategoryRow>
    );

    return (
      <ScrollView style={container}>
        <View style={{ flex: 1, alignItems: 'center' }}>{list}</View>
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
