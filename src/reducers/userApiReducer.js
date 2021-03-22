import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR} from '../actions/userApiAction';

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

export function userApiReducer(state = initialState, action) {
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
                products: action.products
                
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

export const getProducts = state => state.products;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;
