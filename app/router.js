import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import  ProductsScreen  from "./screens/Products";
import { addListener } from './store/redux';
import  { initialize } from './dispatchers'
import { actionCreators } from './actions';

export const AppNavigator = StackNavigator({
  Products: {
    screen: ProductsScreen
  }
});

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };
  componentWillMount(){
    this.props.initializeRealm();
  }
  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={{
          dispatch,
          state: nav,
          addListener,
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
  realm: state.realm
});

const mapDispatchToProps = (dispatch) => ({
    initializeRealm: () => {
      dispatch(initialize(dispatch))
    },
    dispatch
})
export default connect(mapStateToProps, mapDispatchToProps)(AppWithNavigationState);