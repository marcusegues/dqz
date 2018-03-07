// @flow
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { root } from './reducers';
import { navMiddleware } from './reducers/nav';

export const configureStore = () =>
  createStore(
    root,
    composeWithDevTools(applyMiddleware(navMiddleware, thunkMiddleware))
  );
