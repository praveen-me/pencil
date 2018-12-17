import React, { Component } from 'react';
import './scss/app.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/dashboard/Header';
import AddStory from './components/project/AddStory';
import Dashboard from './components/dashboard/Dashboard';
import SignUp from './components/auth/SignUp';
import LogIn from './components/auth/LogIn';
import Me from './components/project/Me';
import Story from './components/project/Story';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header/>
          <Switch>
            <Route path="/story/:id"  component={Story}/>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/add-story" component={AddStory}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/login" component={LogIn}/>
            <Route path="/:username" component={Me}/>
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
