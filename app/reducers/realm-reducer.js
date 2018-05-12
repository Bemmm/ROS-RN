import {INITIALIZE_REALM, MODIFIED_COLLECTION} from '../config/actions'
export default function realmReducer(state = {}, action) {
    switch (action.type) {
    case INITIALIZE_REALM:
            return {
            ...state,
            realm: action.payload
        }
    case MODIFIED_COLLECTION:
        console.log(action)
        return{}
    default:
        return state;
    }
}