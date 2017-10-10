import React from 'react';
import { Text, StyleSheet, View, Image, Animated } from 'react-native';
import { Badge } from 'native-base';
import Touchable from 'react-native-platform-touchable';
import { Entypo } from '@expo/vector-icons';

const MIN_HEIGHT = 120;

class GoodsCategoryRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: this.props.expanded,
      animation: new Animated.Value(MIN_HEIGHT),
      minHeight: MIN_HEIGHT,
      maxHeight: 0,
    };
    this.animateExpanded = this.animateExpanded.bind(this);
    this.handleToggleExpanded = this.handleToggleExpanded.bind(this);
  }

  _setMinHeight(event) {
    console.log('minheight', event.nativeEvent.layout.height);
    this.setState({
      minHeight: event.nativeEvent.layout.height,
    });
  }

  _setMaxHeight(event) {
    console.log('maxheight', event.nativeEvent.layout.height);
    const currentHeight = this.state.maxHeight;
    const newHeight = event.nativeEvent.layout.height;
    this.setState(
      {
        maxHeight: newHeight,
      },
      () => {
        if (this.state.expanded && this.state.maxHeight !== currentHeight) {
          Animated.spring(this.state.animation, {
            toValue: this.state.minHeight + this.state.maxHeight,
            speed: 20,
            bounciness: 2,
          }).start();
        }
      }
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.expanded !== this.state.expanded) {
      this.animateExpanded();
    }
  }

  handleToggleExpanded() {
    console.log('first handle toggleexpanded');
    this.props.handleToggleExpanded(
      this.props.categoryName,
      !this.state.expanded
    );
  }

  animateExpanded() {
    let initialValue = this.state.expanded
        ? this.state.maxHeight + this.state.minHeight
        : this.state.minHeight,
      finalValue = this.state.expanded
        ? this.state.minHeight
        : this.state.maxHeight + this.state.minHeight;
    this.setState({
      expanded: !this.state.expanded,
    });

    this.state.animation.setValue(initialValue);
    Animated.spring(this.state.animation, {
      toValue: finalValue,
      speed: 20,
      bounciness: 2,
    }).start();
  }

  render() {
    const { container } = styles;
    const { navigate } = this.props.navigation;
    const { quantity, duty, unit, icon } = this.props.categoryObject;
    const { categoryName } = this.props;

    let imgUrl = '';
    switch (icon) {
      case 'chicken': {
        imgUrl = require(`../../../../assets/icons/chicken.png`);
        break;
      }
      case 'beer': {
        imgUrl = require(`../../../../assets/icons/beer.png`);
        break;
      }
      case 'butter': {
        imgUrl = require(`../../../../assets/icons/butter.png`);
        break;
      }
      case 'oil': {
        imgUrl = require(`../../../../assets/icons/oil.png`);
        break;
      }
      case 'vodka': {
        imgUrl = require(`../../../../assets/icons/vodka.png`);
        break;
      }
      case 'cigarette': {
        imgUrl = require(`../../../../assets/icons/cigarette.png`);
        break;
      }
      case 'marijuanna': {
        imgUrl = require(`../../../../assets/icons/marijuanna.png`);
        break;
      }
      default: {
        imgUrl = require(`../../../../assets/images/kreuz.png`);
      }
    }

    return (
      <Animated.View
        style={{
          height: this.state.animation,
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(0,0,0, 0.1)',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <Touchable
          style={{ height: MIN_HEIGHT, justifyContent: 'center' }}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this.handleToggleExpanded}
          onLayout={this._setMinHeight.bind(this)}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: 5,
              paddingTop: 5,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <View style={{ width: '20%', height: 60 }}>
              <Image
                source={imgUrl}
                resizeMode="contain"
                fadeDuration={0}
                style={{ width: 50, height: 50 }}
              />
            </View>
            <View style={{ width: '75%', height: 97 }}>
              <Text />
              <Text />
              <Text style={{ fontFamily: 'open_sans_bold' }}>
                {categoryName}
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontFamily: 'open_sans_light', width: '60%' }}>
                  {quantity ? `Quantity: ${quantity}${unit}` : null}
                </Text>
                <Text style={{ fontFamily: 'open_sans_light', width: '40%' }}>
                  {duty ? `Duty: CHF ${duty}` : null}
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '10%',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
            />
          </View>
        </Touchable>
        <View
          style={{ paddingBottom: 3 }}
          onLayout={this._setMaxHeight.bind(this)}
        >
          {this.props.children}
        </View>
      </Animated.View>
    );
  }
}

export default GoodsCategoryRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0, 0.1)',
    width: '90%',
  },
});
