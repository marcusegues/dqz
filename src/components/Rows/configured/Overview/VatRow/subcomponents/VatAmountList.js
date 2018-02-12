import React from "react";
// $FlowFixMe
import { Text, View } from "react-native";
import { translate } from "react-i18next";

class VatAmountListInner extends React.Component {
  render() {
    return (
      <View
        onLayout={event => {
          console.log("Set max height", event.nativeEvent.layout.height);
          this.props.setContentHeight(event.nativeEvent.layout.height);
        }}
        style={{ flex: 1 }}
      >
        <Text>{"Attempt"}</Text>
      </View>
    );
  }
}

export const VatAmountList = (translate(["receipt"])(
  VatAmountListInner
): ComponentType<VatRowProps>);
