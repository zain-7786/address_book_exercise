import { combineReducers } from 'redux';
import {userApiReducer, singleUserApi }from './userApiReducer';
import {natUserApiReducer} from './natUserApiReducer';


const rootReducer = combineReducers({
  userData: userApiReducer,
  singleUser: singleUserApi,
  natUsers: natUserApiReducer
});

export default rootReducer;