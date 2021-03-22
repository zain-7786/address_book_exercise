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

export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

export function fetchUsersPending() {
    return {
        type: FETCH_USERS_PENDING
    }
}

export function fetchUsersSuccess(products) {
    return {
        type: FETCH_USERS_SUCCESS,
        products: products
    }
}

export function fetchUsersError(error) {
    return {
        type: FETCH_USERS_ERROR,
        error: error
    }
}
