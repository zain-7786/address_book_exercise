// export const allUserData = async (setData,page) => dispatch => {
//   debugger;
//     const { status, data, apiErrors } = await get(`https://randomuser.me/api/?page=${page}&results=10`);
  
//     if (status && status === 200) {
//       setUsers(data.results);
//       dispatch({
//         type: types.ALL_USERS,
//         payload: data
//       });
//     }
//   }
//import * as types from './actionTypes';
export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

export const FETCH_SINGLE_USER_DATA = 'FETCH_SINGLE_USER_DATA';


export function fetchUsersPending() {
    return {
        type: FETCH_USERS_PENDING
    }
}

export function fetchUsersSuccess(users) {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export function fetchUsersError(error) {
    return {
        type: FETCH_USERS_ERROR,
        error: error
    }
}

export function fetchSingleUserData(userDetail) {
    return {
        type: FETCH_SINGLE_USER_DATA,
        payload: userDetail
    }
}
