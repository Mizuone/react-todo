import React, { Component } from 'react';

class GoalsTasks extends Component {
  render() {
    return (
      <div className="goals-container">
        <h2 class="goals-container-title">goals</h2>
        <div class="goals-container-tasks-circle">
          <div class="goals-container-tasks-circle-amount-container">
            <h3>0</h3>
            <p>to go</p>
          </div>
        </div>
      </div>
    )
  }
}

export default GoalsTasks;
