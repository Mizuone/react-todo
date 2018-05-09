import React, { Component } from 'react';
import GoalsTasksView from '../../containers/goals-tasks-view';

class GoalsTasks extends Component {
  renderTasksView(event) {
    let goalsTasks = document.querySelector('.goals-container .goals-view');

    if (!goalsTasks.classList.contains('expanded-view')) {

      goalsTasks.classList.add('expanded-view');

      setTimeout(() => {
        document.getElementById('goals-task').focus();
      }, 250);

    }

  }

  render() {
    return (
      <div className="goals-container" onClick={this.renderTasksView}>
        <GoalsTasksView
          tasks={this.props.tasks}
        />
        <h2 className="goals-container-title">goals</h2>
        <div className="goals-container-tasks-circle">
          <div className="goals-container-tasks-circle-amount-container">
            <h3>{this.props.tasks.length}</h3>
            <p>to go</p>
          </div>
        </div>
      </div>
    )
  }
}

export default GoalsTasks;
