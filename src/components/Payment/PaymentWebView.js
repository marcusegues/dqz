import React from 'react';
import { WebView, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const PaymentWebView = ({ source, onNavigationStateChange }) => (
    <WebView
      source={source}
      style={{
        height,
        width,
      }}
      onNavigationStateChange={onNavigationStateChange}
    />
  );

export default PaymentWebView;
