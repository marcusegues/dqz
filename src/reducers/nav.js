import { NavigationActions } from 'react-navigation';
import { RootStackNavigator } from '../navigation/RootNavigation';

export const initialNavState = RootStackNavigator.router.getStateForAction(
  RootStackNavigator.router.getActionForPathAndParams('OnBoarding')
);

export const nav = (state = initialNavState, action) => {
  let navigationAction;
  switch (action.type) {
    case 'NAVIGATE': {
      navigationAction = NavigationActions.navigate({
        routeName: action.screen,
        params: action.params,
      });
      break;
    }
    case 'SET_PARAMS': {
      navigationAction = NavigationActions.setParams({
        params: action.params,
        key: action.key || state.routes[state.index].key,
      });
      break;
    }
    case 'GO_BACK': {
      navigationAction = NavigationActions.back({
        key: action.key || null,
      });
      break;
    }
    default: {
      return state;
    }
  }
  const nextState = RootStackNavigator.router.getStateForAction(
    navigationAction,
    state
  );
  return nextState;
};
