
import { createStore, applyMiddleware } from 'redux';
import AppReducer from '../reducers';
import { middleware } from './redux';

export const store = createStore(
  AppReducer,
  applyMiddleware(middleware),
);