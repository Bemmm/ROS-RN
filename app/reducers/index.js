import navReducer from './navigation-reducer';
import { combineReducers } from 'redux';


const AppReducer = combineReducers({
  nav: navReducer
});

export default AppReducer;