import {
    NavigationActions
} from 'react-navigation';
import {
    AppNavigator
} from '../router';

const findAction = AppNavigator.router.getActionForPathAndParams('Products');
const initialNavState = AppNavigator.router.getStateForAction(
    findAction
);

export default function navReducer(state = initialNavState, action) {
    let nextState;
    console.log(action.type)
    switch (action.type) {
        case 'Products':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({
                    routeName: 'Products'
                }),
                state
            );
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}