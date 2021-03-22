import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './configureStore';

ReactDOM.render
(
    <React.StrictMode>
        <Provider store={configureStore}>
            <Router>
                <App/>
            </Router>
        </Provider> 
    </React.StrictMode>,
     document.getElementById('app') 
);