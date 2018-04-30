import React, { Component } from 'react';

class FitInTasks extends Component {
  render() {
    return (
      <div className="fitin-container">
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
