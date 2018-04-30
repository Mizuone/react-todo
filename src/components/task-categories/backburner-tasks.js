import React, { Component } from 'react';

class BackBurnerTasks extends Component {
  render() {
    return (
      <div className="backburner-container">
        <h2 class="backburner-container-title">backburner</h2>
        <div class="backburner-container-tasks-circle">
          <div class="backburner-container-tasks-circle-amount-container">
            <h3>0</h3>
            <p>to go</p>
          </div>
        </div>
      </div>
    )
  }
}

export default BackBurnerTasks;
