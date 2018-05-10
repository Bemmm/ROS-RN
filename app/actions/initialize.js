import {
    INITIALIZE_REALM,
    INITIALIZE_REALM_SUCCESS,
    INITIALIZE_REALM_FAILURE,
    GET_REALM_INSTANCE,
    GET_REALM_INSTANCE_SUCCESS,
    GET_REALM_INSTANCE_FAILURE
} from '../config/actions';


export const initializeRealm = () => ({
    type: INITIALIZE_REALM,
})
export const initializeRealmSuccess = () => ({
    type: INITIALIZE_REALM_SUCCESS,
})
export const initializeRealmFailure = () => ({
    type: INITIALIZE_REALM_FAILURE,
})