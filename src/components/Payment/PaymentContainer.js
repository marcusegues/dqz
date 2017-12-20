/* eslint-disable react/no-unused-state, no-console */
// TODO remove above line
import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import Overview from '../Overview/Overview';
import Saferpay from '../../../saferpay';
import NavBar from '../NavBar/NavBar';
import PaymentWebView from './PaymentWebView';
import RedButton from '../Buttons/RedButton';
import {
  getDeclarationBasket,
  getDeclarationDutyReport,
  getDeclarationPeople,
} from '../../reducers';
import { calculateDuty } from '../../model/dutyCalculations';

const baseUrl = 'http://ambrite.ch';
const redirectsUrlKeys = {
  success: `/success`,
  fail: `/fail`,
  abort: `/abort`,
};

class PaymentContainer extends React.Component {
  constructor(props) {
    super(props);
    const { basket, people } = this.props;
    this.state = {
      isLoadingRedirectData: false,
      redirectDataLoaded: false,
      redirectUrl: null,
      paymentToken: null,
      paymentStatus: null,
    };
    this.totalDuty = calculateDuty(basket, people).get('totalDuty', 0);
  }

  componentDidMount() {
    this.saferpay = new Saferpay(baseUrl, redirectsUrlKeys);
  }

  initializePayment() {
    if (this.totalDuty > 0) {
      this.setState({ isLoadingRedirectData: true }, () => {
        this.saferpay
          .initializePayment(100 * this.totalDuty, 'CHF')
          .then(responseJson => {
            // console.log('response is', responseJson);
            this.setState({
              isLoadingRedirectData: false,
              redirectDataLoaded: true,
              redirectUrl: responseJson.RedirectUrl,
              paymentToken: responseJson.Token,
              paymentStatus: 'start',
            });
          })
          .catch(error => console.log('Error is', error));
      });
    } else {
      console.log(`totalDuty is 0!`);
    }
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
        {this.state.paymentStatus === 'success' ? (
          <Text style={{ color: 'green' }}>Payment success</Text>
        ) : null}
        {this.state.paymentStatus === 'abort' ? (
          <Text style={{ color: 'red' }}>Payment aborted</Text>
        ) : null}
        {this.state.paymentStatus === 'fail' ? (
          <Text style={{ color: 'red' }}>Payment failed</Text>
        ) : null}
        <Overview initializePayment={() => this.initializePayment()} />
        <RedButton
          onPress={() => this.initializePayment()}
          text="Zur Bezahlung"
          confirmationDisabled={this.totalDuty < 1}
        />
        {this.state.redirectDataLoaded ? (
          <View style={{ position: 'absolute', top: 0 }}>
            <PaymentWebView
              source={{ uri: this.state.redirectUrl }}
              onNavigationStateChange={e => this.checkWebViewUrl(e)}
            />
          </View>
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  basket: getDeclarationBasket(state),
  people: getDeclarationPeople(state),
  dutyReport: getDeclarationDutyReport(state),
});

export default connect(mapStateToProps)(PaymentContainer);
