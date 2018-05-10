import React, { Component } from 'react';
import addTask from '../actions/addtask';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class FocusTasksView extends Component {

  renderTaskList() {

    return this.props.focustasks.map((task) => {
      return (
        <li class="collection-item">
          <div>
            {task}
            <a href="#!" class="secondary-content"><i class="material-icons">delete</i></a>
            <a href="#!" class="secondary-content"><i class="material-icons">edit</i></a>
          </div>
        </li>
        )
    });

  }

  renderTasksView(event) {
    let focusTasks = document.querySelector('.focus-container .focus-view');

    if (!focusTasks.classList.contains('expanded-view')) {

      focusTasks.classList.add('expanded-view');

      setTimeout(() => {
        document.getElementById('focus-task').focus();
      }, 250);

    }
  }


  removeExpandedViewClick(event) {
    event.stopPropagation();

    document.querySelector('.focus-view').classList.remove('expanded-view');
  }

  removeExpandedViewKeyDown(event) {
    event.stopPropagation();

    if (event.which === 13) {
      document.querySelector('.focus-view').classList.remove('expanded-view');
    }
  }

  render() {
    let input;

    return (
      <div className="focus-container" onClick={this.renderTasksView}>
        <div className='focus-view collapsed-view top-left'>
          <form onSubmit={event => { event.preventDefault()
              if (!input.value) return
              this.props.addTask(input.value, 'focustasks')
          }}>
            <div className="row">
              <div className="col s3"></div>
              <div className="input-field col s6 task-field-container">
                <input ref={node => input = node} id="focus-task" type="text" className="validate" />
                <label for="focus-task">Task</label>
              </div>
              <div class="col s3">
                <div onClick={this.removeExpandedViewClick} className="btn-floating waves-effect waves-light close-task-menu">
                  <i className="material-icons">close</i>
                </div>
              </div>

            </div>
          </form>

          <ul class="collection with-header">
            <li class="collection-header"><h4>Tasks</h4></li>
            {this.renderTaskList()}
          </ul>

        </div>
        <h2 className="focus-container-title">focus</h2>
        <div className="focus-container-tasks-circle">
          <div className="focus-container-tasks-circle-amount-container">
            <h3>{this.props.focustasks.length}</h3>
            <p>to go</p>
          </div>
        </div>
      </div>

    )
  }

}

function mapStateToProps(state) {
  return {
    focustasks: state.focustasks,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTask }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FocusTasksView);
