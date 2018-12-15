import React, { Component } from 'react';
import './scss/app.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/dashboard/Header';
import AddStory from './components/project/AddStory';
import Dashboard from './components/dashboard/Dashboard';
import SignUp from './components/auth/SignUp';
import LogIn from './components/auth/LogIn';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header/>
          <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/add-story" component={AddStory}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/login" component={LogIn}/>
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
