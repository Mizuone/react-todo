import React, { Component } from 'react';
import { connect } from 'react-redux';
import FocusTasks from '../components/task-categories/focus-tasks';
import GoalsTasks from '../components/task-categories/goals-tasks';
import FitInTasks from '../components/task-categories/fitin-tasks';
import BackBurnerTasks from '../components/task-categories/backburner-tasks';

class TasksContainer extends Component {
    render() {
      return(
        <div className="tasks-main-container">
          <div className="divider-container">
            <FocusTasks
              tasks={this.props.focustasks}
            />
            <GoalsTasks
              tasks={this.props.goalstasks}
            />
          </div>
          <div className="divider-container">
            <FitInTasks
              tasks={this.props.fitintasks}
            />
            <BackBurnerTasks
              tasks={this.props.backburnertasks}
            />
          </div>
          <a className="btn-floating btn-large waves-effect waves-light light-blue"><i className="material-icons">add</i></a>
        </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    focustasks: state.focustasks,
    goalstasks: state.goalstasks,
    fitintasks: state.fitintasks,
    backburnertasks: state.backburnertasks
  };
}

export default connect(mapStateToProps)(TasksContainer);
