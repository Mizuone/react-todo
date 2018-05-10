import React, { Component } from 'react';
import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import Navigation from './components/navigation/navigation';
import TasksContainer from './components/tasks-container';


class App extends Component {
  render() {
    return (
      <div className="todo-app-container">
        <Navigation />
        <TasksContainer />
      </div>
    );
  }
}

export default App;
