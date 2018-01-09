// @flow
import React from 'react';
// $FlowFixMe
import { WebView, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

type PaymentWebViewProps = {
  source: any,
  onNavigationStateChange: ({ url: string }) => void,
};

export const PaymentWebView = ({
  source,
  onNavigationStateChange,
}: PaymentWebViewProps) => (
  <WebView
    source={source}
    style={{
      height,
      width,
    }}
    onNavigationStateChange={onNavigationStateChange}
  />
);
