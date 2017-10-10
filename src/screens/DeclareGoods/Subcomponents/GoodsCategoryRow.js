import React from 'react';
import { Text, StyleSheet, View, Image, Animated, Badge } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Entypo } from '@expo/vector-icons';

const MIN_HEIGHT = 75;

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
    const { quantity, duty, unit } = this.props.categoryObject;
    const { categoryName } = this.props;
    return (
      <Animated.View
        style={{
          height: this.state.animation,
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(0,0,0, 0.1)',
          overflow: 'hidden',
          width: '90%',
        }}
      >
        <Touchable
          style={{ height: MIN_HEIGHT }}
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
            }}
          >
            <View style={{ width: '20%', height: 60 }}>
              <Image
                source={require('../../../../assets/images/kreuz.png')}
                resizeMode="contain"
                fadeDuration={0}
                style={{ width: 40, height: 60 }}
              />
            </View>
            <View style={{ width: '75%' }}>
              <Text style={{}}>
                {categoryName}
              </Text>
              <Text style={{}}>
                {quantity ? `Quantity: ${quantity}${unit}` : null}
              </Text>
              <Text style={{}}>
                {duty ? `Duty: CHF ${duty}` : null}
              </Text>
            </View>
            <View
              style={{
                width: '10%',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
            >
              <Entypo name="chevron-thin-right" size={20} color="#000" />
            </View>
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
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
