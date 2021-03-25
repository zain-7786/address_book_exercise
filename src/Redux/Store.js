import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';
import Thunk from 'redux-thunk';

const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(Thunk))
);

export default Store;

