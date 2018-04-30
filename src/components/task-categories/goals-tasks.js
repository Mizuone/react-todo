import React, { Component } from 'react';

class GoalsTasks extends Component {
  render() {
    return (
      <div className="goals-container">
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
