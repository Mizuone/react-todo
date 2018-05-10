import React, { Component } from 'react';
import { connect } from 'react-redux';
import FocusTasks from '../containers/focus-tasks-container';
import GoalsTasks from '../containers/goals-tasks-container';
import FitInTasks from '../containers/fitin-tasks-container';
import BackBurnerTasks from '../containers/backburner-tasks-container';

export default class TasksContainer extends Component {
    render() {
      return(
        <div className="tasks-main-container">
          <div className="divider-container">
            <FocusTasks/>
            <GoalsTasks/>
          </div>
          <div className="divider-container">
            <FitInTasks/>
            <BackBurnerTasks/>
          </div>
          <a className="btn-floating btn-large waves-effect waves-light light-blue"><i className="material-icons">add</i></a>
        </div>
      );
    }
}
