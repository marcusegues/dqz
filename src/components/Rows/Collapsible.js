// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { Animated } from 'react-native';
import type { Children } from '../../types/generalTypes';
import { rowStyles } from './styles/rowStyles';

type RowProps = {
  borderTop?: boolean,
  borderBottom?: boolean,
  children?: Children,
  styles?: Object,
};

type CollapsibleState = {
  expanded: boolean,
  mainHeight: number,
  contentHeight: number,
  animation: any,
};

class Collapsible extends React.Component<RowProps, CollapsibleState> {
  static defaultProps = {
    borderTop: false,
    borderBottom: true,
    children: [],
    styles: {},
  };
  constructor(props: RowProps) {
    super(props);
    this.state = {
      expanded: false,
      mainHeight: 0,
      contentHeight: 0,
      animation: new Animated.Value(),
    };
  }

  setMainHeight(height: number) {
    this.setState({ mainHeight: height + 1 }, () =>
      this.state.animation.setValue(height + 1)
    );
  }

  setContentHeight(height: number) {
    this.setState({ contentHeight: height });
  }

  animate() {
    const initialHeight = this.state.expanded
        ? this.state.contentHeight + this.state.mainHeight
        : this.state.mainHeight,
      finalHeight = this.state.expanded
        ? this.state.mainHeight
        : this.state.contentHeight + this.state.mainHeight;
    this.setState({
      expanded: !this.state.expanded,
    });
    this.state.animation.setValue(initialHeight);
    Animated.spring(this.state.animation, {
      toValue: finalHeight,
      speed: 20,
      bounciness: 2,
    }).start();
  }

  render() {
    const { children, styles } = this.props;
    return (
      <Animated.View
        style={[
          {
            flex: 1,
            height: this.state.animation,
            overflow: 'hidden',
            borderColor: '#E0E0E1',
            borderBottomWidth: 1,
          },
          styles,
        ]}
      >
        {children &&
          React.Children.map(children, child =>
            React.cloneElement(child, {
              setMainHeight: height => this.setMainHeight(height),
              setContentHeight: height => this.setContentHeight(height),
              animate: () => this.animate(),
              expanded: this.state.expanded,
            })
          )}
      </Animated.View>
    );
  }
}

Collapsible.defaultProps = {
  borderTop: false,
  borderBottom: true,
  styles: {},
};

export { Collapsible };
