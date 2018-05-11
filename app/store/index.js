
import { createStore, applyMiddleware } from 'redux';
import AppReducer from '../reducers';
import { middleware } from './redux';
import ReduxThunk from 'redux-thunk'
export const store = createStore(
  AppReducer,
  applyMiddleware(middleware,ReduxThunk),
);