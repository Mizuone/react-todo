import React, { Component } from 'react';

class FocusTasks extends Component {
  render() {
    return (
      <div className="focus-container">
        <h2 class="focus-container-title">focus</h2>
        <div class="focus-container-tasks-circle">
          <div class="focus-container-tasks-circle-amount-container">
            <h3>0</h3>
            <p>to go</p>
          </div>
        </div>
      </div>
    )
  }
}

export default FocusTasks;
