import React from 'react';
import { Text, StyleSheet, ScrollView, View, Image } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Entypo } from '@expo/vector-icons';
import GoodsCategoryRow from './Subcomponents/GoodsCategoryRow';
import { emptyBasket } from '../../constants/basket';
import GoodsInput from './Subcomponents/GoodsInput';

class DeclareGoods extends React.Component {
  constructor(props) {
    super(props);
    const stateObject = {};
    Object.keys(emptyBasket).forEach(category => {
      stateObject[category] = false;
    });
    this.state = stateObject;
    this.handleToggleExpanded = this.handleToggleExpanded.bind(this);
  }

  handleToggleExpanded(categoryName, expanded) {
    console.log('second handle toggleexpanded');
    const stateObject = { ...this.state };
    Object.keys(emptyBasket).forEach(category => {
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
      onAddValueToDeclaredBasket,
    } = this.props;
    return (
      <ScrollView style={container}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          {Object.keys(emptyBasket).map(category =>
            <GoodsCategoryRow
              key={category}
              categoryName={category}
              navigation={navigation}
              categoryObject={declaredBasket[category]}
              expanded={this.state[category]}
              handleToggleExpanded={this.handleToggleExpanded}
            >
              <GoodsInput
                categoryName={category}
                onChangeQuantityDeclaredBasketItem={
                  onChangeQuantityDeclaredBasketItem
                }
                onAddValueToDeclaredBasket={onAddValueToDeclaredBasket}
                categoryObject={declaredBasket[category]}
                categoryObjectValues={[...declaredBasket[category].values]}
              />
            </GoodsCategoryRow>
          )}
        </View>
      </ScrollView>
    );
  }
}

export default DeclareGoods;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
