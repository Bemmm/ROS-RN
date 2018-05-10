import {
    GET_REALM_INSTANCE,
    GET_REALM_INSTANCE_SUCCESS,
    GET_REALM_INSTANCE_FAILURE
} from '../config/actions';


export const getRealmInstance = () => ({
    type: GET_REALM_INSTANCE,
})
export const getRealmInstanceSuccess = () => ({
    type: GET_REALM_INSTANCE_SUCCESS,
})
export const getRealmInstanceFailure = () => ({
    type: GET_REALM_INSTANCE_FAILURE,
})