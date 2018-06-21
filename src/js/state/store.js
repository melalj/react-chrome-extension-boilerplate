import { applyMiddleware, createStore } from 'redux';
import { alias } from 'react-chrome-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import initialState from './initial';
import { list } from './aliases';

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(alias(list), thunk),
);

export default store;
