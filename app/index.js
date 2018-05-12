import React from "react";
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { INITIALIZE_REALM } from './config/actions'
import AppWithNavigationState from './router';
import {store} from './store'

export default class App extends React.Component {
  render() {
    return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
    )
  }
}