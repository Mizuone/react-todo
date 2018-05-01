import React, { Component } from 'react';
import FitInTasksView from './views/fitin-tasks-view';

class FitInTasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderView: false
    }

  }

  renderTasksView() {
    this.setState({ renderView: true });
  }

  render() {
    return (
      <div className="fitin-container" onClick={this.renderTasksView.bind(this)}>
        <FitInTasksView
          tasks={this.props.tasks}
          renderView={this.state.renderView}
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
