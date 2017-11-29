import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import root from './reducers';

const configureStore = () => {
  const store = createStore(root, applyMiddleware(thunkMiddleware));
  console.log('OH NO!');
  return store;
};

export default configureStore;
