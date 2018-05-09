import React, { Component } from 'react';
import FitInTasksView from '../../containers/fitin-tasks-view';

class FitInTasks extends Component {

  renderTasksView(event) {
    let fitinTasks = document.querySelector('.fitin-container .fitin-view');

    if (!fitinTasks.classList.contains('expanded-view')) {

      fitinTasks.classList.add('expanded-view');

      setTimeout(() => {
        document.getElementById('fitin-task').focus();
      }, 250);

    }

  }

  render() {
    return (
      <div className="fitin-container" onClick={this.renderTasksView}>
        <FitInTasksView
          tasks={this.props.tasks}
        />
        <h2 className="fitin-container-title">fit in</h2>
        <div className="fitin-container-tasks-circle">
          <div className="fitin-container-tasks-circle-amount-container">
            <h3>{this.props.tasks.length}</h3>
            <p>to go</p>
          </div>
        </div>
      </div>
    )
  }
}

export default FitInTasks;
