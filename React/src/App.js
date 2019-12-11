import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import HomeHeader from './HomeHeader'
import PostHeader from './PostHeader'
import {Route, Link, Switch, Redirect} from 'react-router-dom';

import PostScreen from "./post"
import HomeScreen from "./articles"

class App extends React.Component {
  render() {
    return (
      <div className="App">
         <Switch>
            <Route exact path="/"  component={HomeHeader} />
            <Route path="/post" component={PostHeader} />
 
            <Redirect to="/" />
          </Switch>
        
        <div className="App-intro">
          <Switch>
            <Route exact path="/"  component={HomeScreen} />
            <Route path="/post" component={PostScreen} />
 
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;