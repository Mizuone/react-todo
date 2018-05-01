import React, { Component } from 'react';
import GoalsTasksView from './views/goals-tasks-view';

class GoalsTasks extends Component {
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
      <div className="goals-container" onClick={this.renderTasksView.bind(this)}>
        <GoalsTasksView
          tasks={this.props.tasks}
          renderView={this.state.renderView}
        />
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
