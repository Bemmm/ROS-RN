import {INITIALIZE_REALM} from '../config/actions'
export default function realmReducer(state = {}, action) {
    switch (action.type) {
        case INITIALIZE_REALM:
        let createdArray = Object.keys(action.payload).map(function(key) { return action.payload[key] });
             return {
                ...state,
                realm: action.payload
            }
        default:
            return state;
    }
}