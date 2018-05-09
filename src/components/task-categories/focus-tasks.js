import React, { Component } from 'react';
import FocusTasksView from '../../containers/focus-tasks-view';


class FocusTasks extends Component {

  renderTasksView(event) {
    let focusTasks = document.querySelector('.focus-container .focus-view');

    if (!focusTasks.classList.contains('expanded-view')) {

      focusTasks.classList.add('expanded-view');

      setTimeout(() => {
        document.getElementById('focus-task').focus();
      }, 250);

    }
  }


  render() {
    return (
      <div className="focus-container" onClick={this.renderTasksView}>
        <FocusTasksView
          tasks={this.props.tasks}
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
