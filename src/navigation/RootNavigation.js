import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/Home/HomeScreen';
import DeclareGoodsContainer from '../screens/DeclareGoods/DeclareGoodsContainer';
import SelectedGoodsContainer from '../screens/SelectedGoods/SelectedGoodsContainer';
import BasketContainer from '../screens/Basket/BasketContainer';

import registerForPushNotificationsAsync from '../../api/registerForPushNotificationsAsync';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    DeclareGoods: {
      screen: DeclareGoodsContainer,
      navigationOptions: ({ navigation }) => ({
        title: 'Waren deklarieren',
        headerRight: (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Basket');
            }}
          >
            <Entypo name="shopping-cart" size={40} color="black" />
          </TouchableOpacity>
        ),
        headerStyle: { paddingRight: 20 },
      }),
    },
    SelectedGoods: {
      screen: SelectedGoodsContainer,
      navigationOptions: ({ navigation }) => ({
        title: 'SelectedGoods',
      }),
    },
    Basket: {
      screen: BasketContainer,
      navigationOptions: ({ navigation }) => ({
        title: 'Basket',
      }),
    },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <RootStackNavigator />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  _handleNotification = ({ origin, data }) => {
    console.log(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`
    );
  };
}
