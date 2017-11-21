import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import QuestionAnswerFlow from '../components/QuestionAnswerFlow/QuestionAnswerFlow';
import PeopleInputContainer from '../components/QuestionAnswerFlow/cards/ConfirmationCard/PeopleInput/PeopleInputContainer';
import OnBoarding from '../screens/OnBoarding/OnBoarding';
import * as colors from '../styles/colors';

import registerForPushNotificationsAsync from '../../api/registerForPushNotificationsAsync';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const RootStackNavigator = StackNavigator(
  {
    QuestionAnswer: {
      screen: QuestionAnswerFlow,
      navigationOptions: () => ({
        title: `Waren deklarieren`,
      }),
    },
    OnBoarding: {
      screen: OnBoarding,
    },
    PeopleInput: {
      screen: PeopleInputContainer,
    },
  },
  {
    navigationOptions: navigation => ({
      header: null,
    }),
    cardStyle: { backgroundColor: colors.MAIN_BACKGROUND_COLOR },
  },
  {
    initialRouteName: 'OnBoarding',
    // headerMode: 'none', //Comment this if you want to use native header
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
