import React, { Component } from 'react';
import BackBurnerTasksView from './views/backburner-tasks-view';

class BackBurnerTasks extends Component {


  renderBackburnerView() {

  }

  render() {
    console.log(this.props.backburnertasks);
    
    return (
      <div className="backburner-container" onClick={this.renderBackburnerView}>
        <BackBurnerTasksView

        />
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
