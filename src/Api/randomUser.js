
// import axios from 'axios';

 const url = 'https://randomuser.me/api/';


 import {fetchUsersPending, fetchUsersSuccess, fetchUsersError} from '../actions/userApiAction';

 export function randomUser(page) {
     return dispatch => {
         dispatch(fetchUsersPending());
//     .then((response) => {
         fetch(`https://randomuser.me/api/?page=${page}&results=50`)
         .then(res => res.json())
         .then(res => {
             if(res.error) {
                 throw(res.error);
             }
             dispatch(fetchUsersSuccess(res.results));
             return res.results;
         })
         .catch(error => {
             dispatch(fetchUsersError(error));
         })
     }
 }
 

 


// export const getAllUsersData = async (setUsers, pageNo, setIsLoading, users) => {
//     axios.get(`${url}?page=${pageNo}&results=100`)
//     .then((response) => {
//         const {status, data} = response;
//         if(status === 200)
//         {
//             setUsers(data.results);
//             setIsLoading(false);
//             if(pageNo > 1){
//                 let resultArr = [...users, ...data.results]
//                 setUsers(resultArr);
//             }
//             else{
//                 setUsers(data.results);
//             }
//             setIsLoading(false);
//         }
//         else{
//             console.log("404 Error while loading data");
//         }
//     })
//     .catch(error => console.error(`Error: ${error}`));
// }


export const getAllUsersData = async page => {

    const users = await(
        await fetch(`${url}?page=${page}&results=50`)
    ).json();
    return users.results;
}

