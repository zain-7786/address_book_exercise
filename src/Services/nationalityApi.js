import { fetchNatUsersSuccess } from '../Redux/actions/nationalityApiAction';

 export function nationalityApi(nat) {
     
     return dispatch => {
         //dispatch(fetchNatUsersPending());
//     .then((response) => {
         fetch(`https://randomuser.me/api/?nat=${nat}&results=100`)
         .then(res => res.json())
         .then(res => {
             if(res.error) {
                 throw(res.error);
             }
             console.log("actual nationality", nat);
             dispatch(fetchNatUsersSuccess(res.results));
             console.log("after nationality", nat);
             return res.results;
         })
         .catch(error => {
             console.log(error);
             //dispatch(fetchNatUsersError(error));
         })
     }
 }