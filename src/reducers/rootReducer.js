import { combineReducers } from 'redux';
import userApiReducer from './userApiReducer'

const rootReducer = combineReducers({
  userData: userApiReducer,
});

export default rootReducer;