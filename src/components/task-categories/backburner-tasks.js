import React, { Component } from 'react';
import BackBurnerTasksView from './views/backburner-tasks-view';

class BackBurnerTasks extends Component {


  renderBackburnerView() {

  }

  render() {

    return (
      <div className="backburner-container" onClick={this.renderBackburnerView}>
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
