import React, { Component } from 'react';
import addTask from '../actions/addtask';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class GoalsTasksView extends Component {

  renderTaskList() {

    return this.props.goalstasks.map((task) => {
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
    let goalsTasks = document.querySelector('.goals-container .goals-view');

    if (!goalsTasks.classList.contains('expanded-view')) {

      goalsTasks.classList.add('expanded-view');

      setTimeout(() => {
        document.getElementById('goals-task').focus();
      }, 250);

    }

  }
  
  removeExpandedView(event) {
    event.stopPropagation();

    document.querySelector('.goals-view').classList.remove('expanded-view');
  }

  render() {
    let input;

    return (
      <div className="goals-container" onClick={this.renderTasksView}>
        <div className='goals-view collapsed-view top-right'>
          <form onSubmit={event => { event.preventDefault()
              if (!input.value) return
              this.props.addTask(input.value, 'goalstasks')
          }}>
            <div className="row">
              <div className="col s3"></div>
              <div className="input-field col s6 task-field-container">
                <input ref={node => input = node} id="goals-task" type="text" className="validate" />
                <label for="goals-task">Task</label>
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
        <h2 className="goals-container-title">goals</h2>
        <div className="goals-container-tasks-circle">
          <div className="goals-container-tasks-circle-amount-container">
            <h3>{this.props.goalstasks.length}</h3>
            <p>to go</p>
          </div>
        </div>
      </div>
    )
  }

}


function mapStateToProps(state) {
  return {
    goalstasks: state.goalstasks,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTask }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalsTasksView);
