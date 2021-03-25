//export const FETCH_NAT_USERS_PENDING = 'FETCH_NAT_USERS_PENDING';
export const FETCH_NAT_USERS_SUCCESS = 'FETCH_NAT_USERS_SUCCESS';


export function fetchNatUsersSuccess(natUser) {
    return {
        type: FETCH_NAT_USERS_SUCCESS,
        payload: natUser
    }
}




//export const FETCH_NAT_USERS_ERROR = 'FETCH_NAT_USERS_ERROR';
//import * as types from './actionTypes';

// export function fetchNatUsersPending() {
//     return {
//         type: FETCH_NAT_USERS_PENDING
//     }
// }

// export function fetchNatUsersError(error) {
//     return {
//         type: FETCH_NAT_USERS_ERROR,
//         error: error
//     }
// }

