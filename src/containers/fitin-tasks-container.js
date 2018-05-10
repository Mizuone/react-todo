import React, { Component } from 'react';
import addTask from '../actions/addtask';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



class FitInTasks extends Component {

  renderTaskList() {

    return this.props.fitintasks.map((task) => {
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
    let fitinTasks = document.querySelector('.fitin-container .fitin-view');

    if (!fitinTasks.classList.contains('expanded-view')) {

      fitinTasks.classList.add('expanded-view');

      setTimeout(() => {
        document.getElementById('fitin-task').focus();
      }, 250);

    }

  }

  removeExpandedView(event) {
    event.stopPropagation();

    document.querySelector('.fitin-view').classList.remove('expanded-view');
  }


  render() {
    let input;

    return (
      <div className="fitin-container" onClick={this.renderTasksView}>
        <div className='fitin-view collapsed-view bottom-left'>
          <form onSubmit={event => { event.preventDefault()
              if (!input.value) return
              this.props.addTask(input.value, 'fitintasks');
          }}>
            <div className="row">
              <div className="col s3"></div>
              <div className="input-field col s6 task-field-container">
                <input ref={node => input = node} id="fitin-task" type="text" className="validate" />
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
        <h2 className="fitin-container-title">fit in</h2>
        <div className="fitin-container-tasks-circle">
          <div className="fitin-container-tasks-circle-amount-container">
            <h3>{this.props.fitintasks.length}</h3>
            <p>to go</p>
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    fitintasks: state.fitintasks,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTask }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FitInTasks);
