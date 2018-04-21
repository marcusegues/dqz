// @flow
import React from 'react';
import { translate } from 'react-i18next';
import type { ComponentType } from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { Row } from '../../../components/Rows/Row';
import { FormattedText } from './FormattedText';
import type { Children } from '../../../types/generalTypes';

const ownStyles = {
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  textContainer: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  valueContainer: {
    flex: 0.3,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

type VatAllowanceRowInnerProps = {
  text: string,
  value: string,
  currency: string,
  borderTop?: boolean,
  borderBottom?: boolean,
  bold?: boolean,
  style?: {},
  children?: Children,
};

const VatAllowanceRowInner = ({
  text,
  value,
  currency,
  borderTop,
  borderBottom,
  bold,
  style,
  children,
}: VatAllowanceRowInnerProps) => (
  <Row borderTop={borderTop} borderBottom={borderBottom} width="100%">
    <View style={[ownStyles.wrapper, { ...style }]}>
      <View style={ownStyles.textContainer}>
        <FormattedText bold={bold} text={text} />
        {children}
      </View>
      <View style={ownStyles.valueContainer}>
        <FormattedText
          bold={bold}
          text={currency}
          style={{ marginRight: 20 }}
        />
        <FormattedText
          bold={bold}
          text={value}
          style={{ textAlign: 'right' }}
        />
      </View>
    </View>
  </Row>
);

VatAllowanceRowInner.defaultProps = {
  borderTop: false,
  bold: false,
  borderBottom: true,
  style: {},
  children: [],
};

export const VatAllowanceRow = (translate([''])(
  VatAllowanceRowInner
): ComponentType<VatAllowanceRowInnerProps>);
