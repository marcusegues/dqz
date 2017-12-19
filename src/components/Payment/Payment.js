import React from 'react';
import { WebView, View } from 'react-native';
import Overview from '../Overview/Overview';
import Saferpay from '../../../saferpay';
import NavBar from '../NavBar/NavBar';

const baseUrl = 'http://ambrite.ch';
const redirectsUrlKeys = {
  success: `/success`,
  fail: `/fail`,
  abort: `/abort`,
};

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingRedirectData: false,
      redirectDataLoaded: false,
      redirectUrl: null,
      paymentToken: null,
      paymentStatus: null,
    };
  }

  initializePayment() {
    this.setState({ isLoadingRedirectData: true }, () => {
      Saferpay.initializePayment(500, 'EUR')
        .then(responseJson => {
          this.setState({
            isLoadingRedirectData: false,
            redirectUrl: responseJson.RedirectUrl,
            paymentToken: responseJson.Token,
            paymentStatus: 'start',
          });
        })
        .catch(error => console.log(error));
    });
  }

  checkWebViewUrl(state) {
    let stateChanged = false;
    let paymentStatus = '';
    switch (state.url) {
      case `${baseUrl}${redirectsUrlKeys.success}`:
        stateChanged = true;
        paymentStatus = 'success';
        break;
      case `${baseUrl}${redirectsUrlKeys.fail}`:
        stateChanged = true;
        paymentStatus = 'fail';
        break;
      case `${baseUrl}${redirectsUrlKeys.abort}`:
        stateChanged = true;
        paymentStatus = 'abort';
        break;
      default:
        stateChanged = false;
        break;
    }

    if (stateChanged) {
      this.setState(
        {
          redirectDataLoaded: false,
          paymentStatus,
        },
        () => {
          console.log('Payment finished');
        }
      );
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          height: '100%',
          marginHorizontal: 16,
          marginBottom: 16,
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <NavBar step={2} />
        <Overview />
      </View>
    );
  }
}

export default Payment;
