import React from "react";
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {HomePage} from './Components/HomePage/HomePage';
import Settings from './Components/Settings/Settings';
import {ErrorBoundary} from './ErrorBoundary';
import './App.css';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import History from './utils/History';
function App() {
    const { Header, Footer } = Layout;
    return(
      <ErrorBoundary>
        <Layout>
          <Header>
            <h1 style={{ color: 'white'}}>Address Book</h1>
            
          </Header>
          <Router history={History}>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/settings' component={Settings} />
            </Switch>
          </Router>
  
          <Footer>
              Address Book Exercise ©2021 Created by Zain
          </Footer>
        </Layout>
     </ErrorBoundary>
  
    );
  }
export default App;