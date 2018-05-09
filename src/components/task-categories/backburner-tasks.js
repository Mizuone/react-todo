import React, { Component } from 'react';
import BackBurnerTasksView from '../../containers/backburner-tasks-view';

class BackBurnerTasks extends Component {

  renderTasksView(event) {
    let backBurnerView = document.querySelector('.backburner-container .backburner-view');

    if (!backBurnerView.classList.contains('expanded-view')) {

      backBurnerView.classList.add('expanded-view');

      setTimeout(() => {
        document.getElementById('backburner-task').focus();
      }, 250);

    }

  }

  render() {

    return (
      <div className="backburner-container" onClick={this.renderTasksView}>
        <BackBurnerTasksView
          tasks={this.props.tasks}
        />
      <h2 className="backburner-container-title">backburner</h2>
        <div className="backburner-container-tasks-circle">
          <div className="backburner-container-tasks-circle-amount-container">
            <h3>{this.props.tasks.length}</h3>
            <p>to go</p>
          </div>
        </div>
      </div>
    )
  }
}

export default BackBurnerTasks;
