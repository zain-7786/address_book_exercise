export const allUserData = async (setData,page) => dispatch => {
  debugger;
    const { status, data, apiErrors } = await get(`https://randomuser.me/api/?page=${page}&results=10`);
  
    if (status && status === 200) {
      setUsers(data.results);
      dispatch({
        type: types.ALL_USERS,
        payload: data
      });
    }
  
    if (status && status === 422 && apiErrors) {
      failedResponse(data);
    }
  }