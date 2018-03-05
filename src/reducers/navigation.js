import { RootStackNavigator } from '../navigation/RootNavigation';
import { NavigationActions } from 'react-navigation';

const initialState = RootStackNavigator.router.getStateForAction(
  RootStackNavigator.router.getActionForPathAndParams('OnBoarding')
);
console.log(initialState);
export const navigation = (state = initialState, action) => {
  switch (action.type) {
    case 'NAVIGATE': {
      const navigationAction = NavigationActions.navigate({
        routeName: action.screen,
      });
      const nextState = RootStackNavigator.router.getStateForAction(
        navigationAction,
        state
      );
      return nextState;
    }
    case 'GO_BACK': {
      const navigationAction = NavigationActions.back({
        key: action.key || null,
      });
      const nextState = RootStackNavigator.router.getStateForAction(
        navigationAction,
        state
      );
      return nextState;
    }
    default: {
      return state;
    }
  }
};
