import React from "react";
// $FlowFixMe
import { Button, View } from "react-native";
import { OverviewInfo } from "../../subcomponents/OverviewInfo";
import { AllowanceIcon } from "../../DutyRow/subcomponents/AllowanceIcon";
import { TotalOwed } from "../../subcomponents/TotalOwed";
import { AmountIcon } from "../../../../../General Components/GreyBox/configured/AmountIcon";
import { translate } from "react-i18next";
import Touchable from 'react-native-platform-touchable';

class VatOverviewInner extends React.Component {
  render() {
    const { amount, vat, t } = this.props;
    return (
      <View
        onLayout={event => {
          console.log("Set min height", event.nativeEvent.layout.height);
          this.props.setMainHeight(event.nativeEvent.layout.height);
        }}
        style={{ flex: 1 }}
      >
        <OverviewInfo title={t("amountsTitle")} subtitle={t("amountsSubtitle")}>
          <AllowanceIcon text={t("amountsTitle")} quantity={5} unit={"kg"} />
        </OverviewInfo>
        <AmountIcon amount={amount} currency="CHF" />
        <TotalOwed result={(+vat).toFixed(2)} />
        <Touchable
          style={{ height: 80 }}
          title="attempt"
          onPress={() => this.props.animate()}
        />
      </View>
    );
  }
}

export const VatOverview = (translate(["receipt"])(
  VatOverviewInner
): ComponentType<VatRowProps>);
