import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';

// https://reactnavigation.org/docs/redux-integration.html

export const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

export const addListener = createReduxBoundAddListener('root');
