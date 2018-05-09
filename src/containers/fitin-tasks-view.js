import React, { Component } from 'react';
import addTask from '../actions/addtask';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class FitInTasksView extends Component {

  renderTaskList() {

    return this.props.tasks.map((task) => {
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

  removeExpandedView(event) {
    event.stopPropagation();

    document.querySelector('.fitin-view').classList.remove('expanded-view');
  }

  render() {
    let inputValue;

    return (

      <div className='fitin-view collapsed-view bottom-left'>
        <form onSubmit={event => { event.preventDefault()
            if (!inputValue) return
            this.props.activeTask = addTask(inputValue, 'fitintask')
        }}>
          <div className="row">
            <div className="col s3"></div>
            <div className="input-field col s6 task-field-container">
              <input ref={node => inputValue = node} id="fitin-task" type="text" className="validate" />
              <label for="fitin-task">Task</label>
            </div>
            <div class="col s3">
              <div onClick={this.removeExpandedView} className="btn-floating waves-effect waves-light close-task-menu">
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
    )
  }

}

function mapStateToProps(state) {
  return {
    fitintasks: state.fitintasks,
    activeTask: state.activeTask
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTask: addTask }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FitInTasksView);
