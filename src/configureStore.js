// @flow
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { navMiddleware } from './navigation/reactNavigation';

import { root } from './reducers';

export const configureStore = () =>
  createStore(
    root,
    composeWithDevTools(applyMiddleware(navMiddleware, thunkMiddleware))
  );
