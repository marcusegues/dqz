// @flow
import React from "react";
import type { ComponentType } from "react";
import { View } from "react-native";
import { translate } from "react-i18next";
import { CollapsibleRow } from "../../../CollapsibleRow";
import { VatOverview } from "./subcomponents/VatOverview";
import { VatAmountList } from "./subcomponents/VatAmountList";
import { rowContainerStyles } from "../../../Row";

type VatRowProps = {
  amount: number | string,
  vat: number,
  borderTop?: boolean
};

class VatRowInner extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    const { amount, vat, borderTop, t } = this.props;
    return (
      <CollapsibleRow borderTop={borderTop}>
          <VatOverview amount={amount} vat={vat} />
          <VatAmountList />
      </CollapsibleRow>
    );
  }
}

export const VatRow = (translate(["receipt"])(VatRowInner): ComponentType<
  VatRowProps
>);
