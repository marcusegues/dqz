import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import QuestionAnswerContainer from '../components/QuestionAnswer/QuestionAnswerContainer';
import PeopleInputContainer from '../components/QuestionAnswer/cards/ConfirmationCard/PeopleInput/PeopleInputContainer';
import OnBoarding from '../screens/OnBoarding/OnBoarding';
import ScreensView from '../screens/ScreensView/ScreensView';
import { MAIN_RED, MAIN_BACKGROUND_COLOR } from '../styles/colors';
import { defaultNavigationOptions } from './navigationOptions';
import HeaderTitle from '../components/Headers/subcomponents/HeaderTitle';
import MainScreenHeaderTitle from '../components/Headers/subcomponents/MainScreenHeaderTitle';
import Logo from '../components/Headers/subcomponents/Logo';
import OptionsButton from '../components/Headers/subcomponents/OptionsButton';
import BasketInputContainer from '../components/BasketInput/BasketInputContainer';
import MainMenu from '../screens/MainMenu/MainMenu';
import registerForPushNotificationsAsync from '../../api/registerForPushNotificationsAsync';
import { UnderConstruction } from './underConstruction';
import UnderConstructionWithSums from './underConstructionWithSums';

const RootStackNavigator = StackNavigator(
  {
    Screens: {
      screen: ScreensView,
      navigationOptions: ({ navigationOptions }) => ({
        ...navigationOptions,
        headerTitle: <HeaderTitle text="Screens" />,
        headerLeft: <Logo />,
        headerRight: <OptionsButton />,
        headerStyle: {
          ...navigationOptions.headerStyle,
          borderBottomWidth: 5,
          borderBottomColor: MAIN_RED
        }
      })
    },
    QuestionAnswer: {
      screen: QuestionAnswerContainer,
      navigationOptions: () => ({
        headerTitle: <HeaderTitle text="Waren deklarieren" />
      })
    },
    OnBoarding: {
      screen: OnBoarding
    },
    MainMenu: {
      screen: MainMenu,
      navigationOptions: ({ navigationOptions, navigation }) => ({
        ...navigationOptions,
        headerTitle: <MainScreenHeaderTitle />,
        headerLeft: <Logo />,
        headerRight: <OptionsButton navigation={navigation} />,
        headerStyle: {
          ...navigationOptions.headerStyle,
          borderBottomWidth: 5,
          borderBottomColor: MAIN_RED
        }
      })
    },
    PeopleInput: {
      screen: PeopleInputContainer
    },
    BasketInput: {
      screen: BasketInputContainer
    },
    UnderConstruction: {
      screen: UnderConstruction,
      navigationOptions: () => ({
        headerTitle: <HeaderTitle text="In Bearbeitung" />
      })
    },
    UnderConstructionWithSums: {
      screen: UnderConstructionWithSums,
      navigationOptions: () => ({
        headerTitle: <HeaderTitle text="In Bearbeitung" />
      })
    }
  },
  {
    navigationOptions: defaultNavigationOptions,
    cardStyle: { backgroundColor: MAIN_BACKGROUND_COLOR },
    initialRouteName: 'MainMenu'
  }
);

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    // eslint-disable-next-line
    this._notificationSubscription && this._notificationSubscription.remove();
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

  _handleNotification = () => {};

  render() {
    return <RootStackNavigator />;
  }
}
