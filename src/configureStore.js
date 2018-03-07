// @flow
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener,
  // $FlowFixMe
} from 'react-navigation-redux-helpers';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { root } from './reducers';

const navMiddleware = createReactNavigationReduxMiddleware(
  'navigation',
  state => state.nav
);

export const addListener = createReduxBoundAddListener('navigation');

export const configureStore = () =>
  createStore(
    root,
    composeWithDevTools(applyMiddleware(navMiddleware, thunkMiddleware))
  );
