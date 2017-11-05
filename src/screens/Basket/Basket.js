import React from 'react';
import { pickBy } from 'lodash';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { WebBrowser } from 'expo';
import { Entypo } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';
import BasketItemRow from './Subcomponents/BasketItemRow';
import Colors from '../../constants/Colors';

const width = Dimensions.get('window').width - 30;

export default class Basket extends React.Component {
  _handlePay = () => {
    const currency = 'CHF';

    WebBrowser.openBrowserAsync(
      `https://dazit.ambrite.ch/payment?currency=${currency}&amount=${this.props
        .totalDuty * 100}`
    );
  };

  render() {
    const { container, payButton, totalPrice } = styles;
    const { declaredBasket } = this.props;
    const displayedBasket = pickBy(declaredBasket, val => val.duty !== 0);
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: '#fff',
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <BasketItemRow headerCategoryName={`Item`} headerDuty={'Zoll'} />
        {Object.keys(displayedBasket).map(category =>
          <BasketItemRow
            key={category}
            categoryName={category}
            duty={displayedBasket[category].duty}
          />
        )}

        <Touchable
          onPress={this._handlePay}
          style={{
            marginTop: 30,
            height: 150,
            width: 150,
            flexDirection: 'column',
            backgroundColor: 'rgb(62,106,151)',
            marginVertical: 5,
            borderRadius: 75,
          }}
          background={Touchable.Ripple('blue')}
        >
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: `${Colors.noticeText}`,
                fontFamily: 'open_sans_light',
              }}
            >
              {`Weiter`}
            </Text>
          </View>
        </Touchable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    padding: 15,
  },
  payButton: {
    flex: 1,
    backgroundColor: '#f84c2d',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  totalPrice: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: width,
    paddingRight: 30,
    marginBottom: 15,
  },
});
