import realmReducer from './realm-reducer'
import navReducer from './navigation-reducer';
import { combineReducers } from 'redux';


const AppReducer = combineReducers({
  nav: navReducer,
  realm: realmReducer
});

export default AppReducer;