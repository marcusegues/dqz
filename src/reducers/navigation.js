import { RootStackNavigator } from '../navigation/RootNavigation';

const initialState = RootStackNavigator.router.getStateForAction(
  RootStackNavigator.router.getActionForPathAndParams('OnBoarding')
);

export const navigation = (state = initialState, action) => {
  const nextState = RootStackNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
