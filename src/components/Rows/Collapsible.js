// @flow
import React from 'react';
// $FlowFixMe
import { Animated, Easing } from 'react-native';
import type { Children } from '../../types/generalTypes';
import { ROW_BORDER_WIDTH, rowStyles } from './styles/rowStyles';

type RowProps = {
  borderTop?: boolean,
  borderBottom?: boolean,
  width?: string,
  children?: Children,
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
    width: '95%',
    children: [],
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
    const borderHeight =
      (this.props.borderBottom ? ROW_BORDER_WIDTH : 0) +
      (this.props.borderTop ? ROW_BORDER_WIDTH : 0);
    this.setState({ mainHeight: height + borderHeight }, () =>
      this.state.animation.setValue(height + borderHeight)
    );
  }

  setContentHeight(height: number) {
    this.setState({ contentHeight: height });
  }

  animate() {
    const initialHeight = this.state.expanded
      ? this.state.contentHeight + this.state.mainHeight
      : this.state.mainHeight;
    const finalHeight = this.state.expanded
      ? this.state.mainHeight
      : this.state.contentHeight + this.state.mainHeight;
    this.setState({
      expanded: !this.state.expanded,
    });
    this.state.animation.setValue(initialHeight);
    Animated.timing(this.state.animation, {
      toValue: finalHeight,
      duration: 300,
      easing: Easing.cubic,
    }).start();
  }

  render() {
    const { children, borderBottom, borderTop, width } = this.props;
    return (
      <Animated.View
        style={[
          {
            flex: 1,
            height: this.state.animation,
            overflow: 'hidden',
            width,
            alignSelf: 'center',
          },
          borderBottom ? rowStyles.borderBottom : {},
          borderTop ? rowStyles.borderTop : {},
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

export { Collapsible };
