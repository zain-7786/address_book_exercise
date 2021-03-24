import { fetchNatUsersSuccess } from '../actions/nationalityApiAction';

 export function nationalityApi(nat) {
     return dispatch => {
         //dispatch(fetchNatUsersPending());
//     .then((response) => {
         fetch(`https://randomuser.me/api/?nat=${nat}&&results=10`)
         .then(res => res.json())
         .then(res => {
             if(res.error) {
                 throw(res.error);
             }
             dispatch(fetchNatUsersSuccess(res.results));
             return res.results;
         })
         .catch(error => {
             console.log(error);
             //dispatch(fetchNatUsersError(error));
         })
     }
 }