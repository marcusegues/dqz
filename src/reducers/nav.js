import { NavigationActions } from 'react-navigation';
import { RootStackNavigator } from '../navigation/RootNavigation';

/*
Navigation state has structure
{
  index: // identifies which route in the routes array is active
  routes:[
    {
      // Each route needs a name, which routers will use to associate each route
      // with a react component
      routeName: 'MyRouteName',
      key: 'myroute-123'  // Unique id
      ...customRouteData  // Additional data
    },
    ...moreRoutes,
  ]
}
*/

const initialPath = 'OnBoarding';
const actionForInitialPathAndParams = RootStackNavigator.router.getActionForPathAndParams(
  initialPath
);
actionForInitialPathAndParams.key = initialPath;

export const initialNavState = RootStackNavigator.router.getStateForAction(
  actionForInitialPathAndParams
);

export const nav = (state = initialNavState, action) => {
  let navigationAction;
  switch (action.type) {
    case 'NAVIGATE': {
      navigationAction = NavigationActions.navigate({
        key: action.key || action.screen,
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
    case 'Navigation/BACK': {
      navigationAction = NavigationActions.back({
        key: action.key || null,
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
  return RootStackNavigator.router.getStateForAction(navigationAction, state);
};
