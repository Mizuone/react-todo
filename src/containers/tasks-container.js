import React, { Component } from 'react';
import FocusTasks from '../components/task-categories/focus-tasks';
import GoalsTasks from '../components/task-categories/goals-tasks';
import FitInTasks from '../components/task-categories/fitin-tasks';
import BackBurnerTasks from '../components/task-categories/backburner-tasks';

export default class TasksContainer extends Component {
    render() {
      return(
        <div className="tasks-main-container">
          <div className="divider-container">
            <FocusTasks />
            <GoalsTasks />
          </div>
          <div className="divider-container">
            <FitInTasks />
            <BackBurnerTasks />
          </div>
          <a className="btn-floating btn-large waves-effect waves-light light-blue"><i className="material-icons">add</i></a>
        </div>
      );
    }
}
