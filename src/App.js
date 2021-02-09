import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import Navigation from './components/navigation/navigation';
import About from './components/navigation/about';
import TasksContainer from './containers/tasks-container';


class App extends Component {
  render() {
    return (
      <div className="todo-app-container">
        <Navigation />
        <Switch>
          <Route path="/projects/to-do-list/index.html" component={TasksContainer}/>
          <Route path="/projects/to-do-list/about" component={About}/>
        </Switch>
      </div>
    );
  }
}

export default App;
