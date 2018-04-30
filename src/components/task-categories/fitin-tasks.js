import React, { Component } from 'react';

class FitInTasks extends Component {
  render() {
    return (
      <div className="fitin-container">
        <h2 class="fitin-container-title">fit in</h2>
        <div class="fitin-container-tasks-circle">
          <div class="fitin-container-tasks-circle-amount-container">
            <h3>0</h3>
            <p>to go</p>
          </div>
        </div>
      </div>
    )
  }
}

export default FitInTasks;
