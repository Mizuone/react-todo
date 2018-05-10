import React, { Component } from 'react';
import addTask from '../actions/addtask';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class BackBurnerTasksView extends Component {

  renderTaskList() {

    return this.props.backburnertasks.map((task) => {
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
    let backBurnerView = document.querySelector('.backburner-container .backburner-view');

    if (!backBurnerView.classList.contains('expanded-view')) {

      backBurnerView.classList.add('expanded-view');

      setTimeout(() => {
        document.getElementById('backburner-task').focus();
      }, 250);

    }

  }

  removeExpandedView(event) {
    event.stopPropagation();

    document.querySelector('.backburner-view').classList.remove('expanded-view');
  }

  render() {
    let input;

    return (
      <div className="backburner-container" onClick={this.renderTasksView}>
        <div className='backburner-view collapsed-view bottom-right'>
          <form onSubmit={event => { event.preventDefault()
              if (!input.value) return
              this.props.addTask(input.value, 'backburnertasks')
          }}>
            <div className="row">
              <div className="col s3"></div>
              <div className="input-field col s6 task-field-container">
                <input ref={node => input = node} id="backburner-task" type="text" className="validate" />
                <label for="backburner-task">Task</label>
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
      <h2 className="backburner-container-title">backburner</h2>
        <div className="backburner-container-tasks-circle">
          <div className="backburner-container-tasks-circle-amount-container">
            <h3>{this.props.backburnertasks.length}</h3>
            <p>to go</p>
          </div>
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    backburnertasks: state.backburnertasks,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTask }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BackBurnerTasksView);
