import { createStore, applyMiddleware } from 'redux';
import root from './reducers';
import thunkMiddleware from 'redux-thunk';

const configureStore = () => {
  const store = createStore(root, applyMiddleware(thunkMiddleware));

  return store;
};

export default configureStore;
