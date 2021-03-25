import initialState from './initialState';
import {FETCH_NAT_USERS_PENDING, FETCH_NAT_USERS_SUCCESS, FETCH_NAT_USERS_ERROR} from '../actions/nationalityApiAction';

export function natUserApiReducer(state = initialState.nationalUsers, action) {
    debugger;
    switch(action.type) {
        case FETCH_NAT_USERS_SUCCESS:
            return {
                ...state,
                nationalUsers: action.payload
                
            }
        default: 
            return state;
    }
}

// export const getNatUsers = state => state.natUsers;
// export const getNatUsersPending = state => state.pending;
// export const getNatUsersError = state => state.error;