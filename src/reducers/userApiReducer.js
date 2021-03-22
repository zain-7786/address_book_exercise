import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.userApiData, { type, payload}) => {
    switch(type) {
        case types.ALL_USERS:
            return {
                ...state,
                entries: payload.results
            };
        default:
            return state;
    }
};