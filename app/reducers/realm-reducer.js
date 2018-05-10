import INITIALIZE_REALM from '../config/actions'
export default function realmReducer(state = [], {type}) {
    switch (type) {
        case INITIALIZE_REALM:
            return INITIALIZE_REALM
        default:
            return state;
    }
}