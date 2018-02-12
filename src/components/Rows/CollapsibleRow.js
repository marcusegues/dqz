// @flow
import React from "react";
import type { ComponentType } from "react";
// $FlowFixMe
import { Animated } from "react-native";
import type { Children } from "../../types/generalTypes";
import { rowContainerStyles } from "./Row";

type RowProps = {
  borderTop?: boolean,
  borderBottom?: boolean,
  children?: Children,
  styles?: Object
};

type CollapsibleRowState = {
  expanded: boolean,
  mainHeight: number,
  contentHeight: number,
  animation: any
};

class CollapsibleRow extends React.Component<RowProps, CollapsibleRowState> {
  static defaultProps = {
    borderTop: false,
    borderBottom: true,
    children: [],
    styles: {}
  };
  constructor(props: RowProps) {
    super(props);
    this.state = {
      expanded: false,
      mainHeight: 0,
      contentHeight: 0,
      animation: new Animated.Value()
    };
  }

  setMainHeight(height) {
    this.setState({ mainHeight: height + 18 }, () =>
      this.state.animation.setValue(height + 18)
    );
  }

  setContentHeight(height) {
    this.setState({ contentHeight: height });
  }

  animate() {
    let initialHeight = this.state.expanded
        ? this.state.contentHeight + this.state.mainHeight
        : this.state.mainHeight,
      finalHeight = this.state.expanded
        ? this.state.mainHeight
        : this.state.contentHeight + this.state.mainHeight;
    this.setState({
      expanded: !this.state.expanded
    });
    this.state.animation.setValue(initialHeight);
    Animated.spring(this.state.animation, {
      toValue: finalHeight,
      speed: 20,
      bounciness: 2
    }).start();
  }

  render() {
    const { borderTop, borderBottom, children } = this.props;
    return (
      <Animated.View
        style={[
          rowContainerStyles(borderTop, borderBottom),
          { flex: 1, height: this.state.animation, overflow: "hidden" },
        ]}
      >
        {children &&
          React.Children.map(children, child =>
            React.cloneElement(child, {
              setMainHeight: height => this.setMainHeight(height),
              setContentHeight: height => this.setContentHeight(height),
              animate: () => this.animate(),
              expanded: this.state.expanded
            })
          )}
      </Animated.View>
    );
  }
}

CollapsibleRow.defaultProps = {
  borderTop: false,
  borderBottom: true,
  styles: {}
};

export { CollapsibleRow };
