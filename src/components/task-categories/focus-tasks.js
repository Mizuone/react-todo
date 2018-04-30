import React, { Component } from 'react';
import FocusTasksView from './views/focus-tasks-view';


class FocusTasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderView: false
    }
    //this.props.renderView = false;
  }

  renderTasksView() {
    this.setState({ renderView: true });
  }


  render() {
    return (
      <div className="focus-container" onClick={this.renderTasksView.bind(this)}>
        <FocusTasksView
          tasks={this.props.tasks}
          renderView={this.state.renderView}
        />
        <h2 className="focus-container-title">focus</h2>
        <div className="focus-container-tasks-circle">
          <div className="focus-container-tasks-circle-amount-container">
            <h3>{this.props.tasks.length}</h3>
            <p>to go</p>
          </div>
        </div>
      </div>
    )
  }
}

export default FocusTasks;
