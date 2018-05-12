import {
    INITIALIZE_REALM,
    MODIFIED_COLLECTION
} from '../config/actions';


export const initializeRealm = (realm) => ({
    type: INITIALIZE_REALM,
    payload: realm
})
export const modifiedCollection = (modifiedItem) => ({
    type: MODIFIED_COLLECTION,
    payload:modifiedItem
})