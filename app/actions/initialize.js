import {
    INITIALIZE_REALM,
    GET_REALM_INSTANCE
} from '../config/actions';


export const initializeRealm = (realm) => ({
    type: INITIALIZE_REALM,
    payload: realm
})
