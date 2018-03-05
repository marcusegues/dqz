import { NavigationActions } from 'react-navigation';
import { RootStackNavigator } from '../navigation/RootNavigation';

const initialState = RootStackNavigator.router.getStateForAction(
  RootStackNavigator.router.getActionForPathAndParams('OnBoarding')
);
export const nav = (state = initialState, action) => {
  switch (action.type) {
    case 'NAVIGATE': {
      const navigationAction = NavigationActions.navigate({
        routeName: action.screen,
        params: action.params,
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
