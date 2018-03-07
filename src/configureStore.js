// @flow
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { navMiddleware } from './navigation/reactNavigation';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { root } from './reducers';

export const configureStore = () =>
  createStore(
    root,
    composeWithDevTools(applyMiddleware(navMiddleware, thunkMiddleware))
  );
