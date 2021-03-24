import React from "react";
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {HomePage} from './Components/HomePage/HomePage';
import Settings from './Components/Settings/Settings';
import {ErrorBoundary} from './ErrorBoundary';
import './App.css';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import History from './utils/History';
import { useHistory } from 'react-router-dom';
function App() {
    const { Header, Footer } = Layout;
    const history = useHistory();
    return(
      <ErrorBoundary>
        <Layout>
          <Header>
            <span style={{ color: 'white'}}>Address Book</span>
            <Link onClick={() => history.push("./settings")} style={{ marginLeft: '70%'}}>Settings</Link>
            
          </Header>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/settings' component={Settings} />
            </Switch>
  
          <Footer>
              Address Book Exercise ©2021 Created by Zain
          </Footer>
        </Layout>
     </ErrorBoundary>
  
    );
  }
export default App;