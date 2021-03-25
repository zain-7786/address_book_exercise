//import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR, FETCH_SINGLE_USER_DATA} from '../actions/userApiAction';

// export default (state = initialState.userApiData, { type, payload}) => {
//     switch(type) {
//         case types.ALL_USERS:
//             return {
//                 ...state,
//                 entries: payload
//             };
//         default:
//             return state;
//     }
// };

export function userApiReducer(state = initialState.users, action) {
    switch(action.type) {
        
        case FETCH_USERS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                pending: false,
                users: action.payload
                
            }
        case FETCH_USERS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export function singleUserApi(state = initialState.singleUser, action){
    switch(action.type) {
        case FETCH_SINGLE_USER_DATA:
            return {
                ...state,
                thisUser: action.payload
            }
        default:
            return state;    
    }
}

export const getUsers = state => state.users;
export const getUsersPending = state => state.pending;
export const getUsersError = state => state.error;
