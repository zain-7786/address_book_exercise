import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Components/App/App";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Store from '../src/Redux/Store';
import History from './utils/History';

ReactDOM.render
(
    <React.StrictMode>
        <Provider store={Store}>
            <Router history={History}>
                <App/>
            </Router>
        </Provider> 
    </React.StrictMode>,
     document.getElementById('app') 
);