import React, { Component } from 'react';
import addTask from '../actions/addtask';
import { connect } from 'react-redux';
import TaskContainer from './taskcontainer';
import { bindActionCreators } from 'redux';
import M from 'materialize-css/dist/js/materialize.js';

class TasksContainer extends Component {

  editTaskClickEvent() {

      let modal = document.getElementById('modal-addtask');
      let input = document.getElementById('input-addtask');
      let instance = M.Modal.init(modal, {});

      instance.open();

      if (window.innerWidth > 992) {
        setTimeout(() => {
          input.focus();
        }, 150)
      }
  }

    render() {
      let inputAdd;

      return(
        <div className="tasks-main-container">
          <div className="divider-container">
            <TaskContainer
              DOMInformationObj={
                {
                  edit: {
                    iconAnchorHref: '#focustasks-modal-id',
                    iconClass: 'material-icons focustasks-edit',
                    category: 'focustasks'
                  },
                  delete: {
                    category: 'focustasks'
                  },
                  add: {
                    category: 'focustasks'
                  },
                  funcrenderTaskView: {
                    taskView: '.focus-container .focus-view',
                    taskViewInputFocus: 'focus-task'
                  },
                  funceditTaskClickEvent: {
                    modal: '.focustasks-modal',
                    input: 'focus-task-edit'
                  },
                  funcremoveExpandedView: {
                    taskView: '.focus-view'
                  },
                  container: {
                    mainContainerClass: 'focus-container',
                    taskViewContainerClass: 'focus-view collapsed-view top-left',
                    containerTitle: 'Focus',
                    containerTitleClass: 'focus-container-title',
                    containerTasksCircleClass: 'focus-container-tasks-circle',
                    containerTasksCircleClassAmount: 'focus-container-tasks-circle-amount-container'
                  },
                  view: {
                    inputId: 'focus-task',
                    viewTasksTitle: 'Focus Tasks'
                  },
                  modal: {
                    modalIdContainer: 'focustasks-modal-id',
                    modalContainerClass: 'modal focustasks-modal',
                    modalContainerTitle: 'Edit Focus Task',
                    modalCloseClickSelector: '.focustasks-modal .modal-close',
                    modalInputId: 'focus-task-edit'
                  }
                }
              }
              tasks={
                this.props.focustasks
              }
            />
            <TaskContainer
              DOMInformationObj={
                {
                  edit: {
                    iconAnchorHref: '#goalstasks-modal-id',
                    iconClass: 'material-icons goalstasks-edit',
                    category: 'goalstasks'
                  },
                  delete: {
                    category: 'goalstasks'
                  },
                  add: {
                    category: 'goalstasks'
                  },
                  funcrenderTaskView: {
                    taskView: '.goals-container .goals-view',
                    taskViewInputFocus: 'goals-task'
                  },
                  funceditTaskClickEvent: {
                    modal: '.goalstasks-modal',
                    input: 'goals-task-edit'
                  },
                  funcremoveExpandedView: {
                    taskView: '.goals-view'
                  },
                  container: {
                    mainContainerClass: 'goals-container',
                    taskViewContainerClass: 'goals-view collapsed-view top-right',
                    containerTitle: 'Goals',
                    containerTitleClass: 'goals-container-title',
                    containerTasksCircleClass: 'goals-container-tasks-circle',
                    containerTasksCircleClassAmount: 'goals-container-tasks-circle-amount-container'
                  },
                  view: {
                    inputId: 'goals-task',
                    viewTasksTitle: 'Goal Tasks'
                  },
                  modal: {
                    modalIdContainer: 'goalstasks-modal-id',
                    modalContainerClass: 'modal goalstasks-modal',
                    modalContainerTitle: 'Edit Goal Task',
                    modalCloseClickSelector: '.goalstasks-modal .modal-close',
                    modalInputId: 'goals-task-edit'
                  }
                }
              }
              tasks={
                this.props.goalstasks
              }
            />
          </div>
          <div className="divider-container">
            <TaskContainer
              DOMInformationObj={
                {
                  edit: {
                    iconAnchorHref: '#fitintasks-modal-id',
                    iconClass: 'material-icons fitintasks-edit',
                    category: 'fitintasks'
                  },
                  delete: {
                    category: 'fitintasks'
                  },
                  add: {
                    category: 'fitintasks'
                  },
                  funcrenderTaskView: {
                    taskView: '.fitin-container .fitin-view',
                    taskViewInputFocus: 'fitin-task'
                  },
                  funceditTaskClickEvent: {
                    modal: '.fitintasks-modal',
                    input: 'fitin-task-edit'
                  },
                  funcremoveExpandedView: {
                    taskView: '.fitin-view'
                  },
                  container: {
                    mainContainerClass: 'fitin-container',
                    taskViewContainerClass: 'fitin-view collapsed-view bottom-left',
                    containerTitle: 'fit in',
                    containerTitleClass: 'fitin-container-title',
                    containerTasksCircleClass: 'fitin-container-tasks-circle',
                    containerTasksCircleClassAmount: 'fitin-container-tasks-circle-amount-container'
                  },
                  view: {
                    inputId: 'fitin-task',
                    viewTasksTitle: 'Fit In Tasks'
                  },
                  modal: {
                    modalIdContainer: 'fitintasks-modal-id',
                    modalContainerClass: 'modal fitintasks-modal',
                    modalContainerTitle: 'Edit Fit In Task',
                    modalCloseClickSelector: '.fitintasks-modal .modal-close',
                    modalInputId: 'fitin-task-edit'
                  }
                }
              }
              tasks={
                this.props.fitintasks
              }
              />
            <TaskContainer
              DOMInformationObj={
                {
                  edit: {
                    iconAnchorHref: '#backburnertasks-modal-id',
                    iconClass: 'material-icons backburnertasks-edit',
                    category: 'backburnertasks'
                  },
                  delete: {
                    category: 'backburnertasks'
                  },
                  add: {
                    category: 'backburnertasks'
                  },
                  funcrenderTaskView: {
                    taskView: '.backburner-container .backburner-view',
                    taskViewInputFocus: 'backburner-task'
                  },
                  funceditTaskClickEvent: {
                    modal: '.backburnertasks-modal',
                    input: 'backburner-task-edit'
                  },
                  funcremoveExpandedView: {
                    taskView: '.backburner-view'
                  },
                  container: {
                    mainContainerClass: 'backburner-container',
                    taskViewContainerClass: 'backburner-view collapsed-view bottom-right',
                    containerTitle: 'Backburner',
                    containerTitleClass: 'backburner-container-title',
                    containerTasksCircleClass: 'backburner-container-tasks-circle',
                    containerTasksCircleClassAmount: 'backburner-container-tasks-circle-amount-container'
                  },
                  view: {
                    inputId: 'backburner-task',
                    viewTasksTitle: 'Backburner Tasks'
                  },
                  modal: {
                    modalIdContainer: 'backburnertasks-modal-id',
                    modalContainerClass: 'modal backburnertasks-modal',
                    modalContainerTitle: 'Edit Backburner Task',
                    modalCloseClickSelector: '.backburnertasks-modal .modal-close',
                    modalInputId: 'backburner-task-edit'
                  }
                }
              }
              tasks={
                this.props.backburnertasks
              }
            />
          </div>
          <div className="fixed-action-btn mobile-add-task-container">
            <a onClick={this.editTaskClickEvent} href="#modal-addtask" className="btn-floating btn-large light-blue mobile-add-task-link">
              <i className="large material-icons">add</i>
            </a>
          </div>

          <div id="modal-addtask" className="modal modal-addtask-class">
            <div className="modal-content">
              <h4>Add Task</h4>
              <form onSubmit={(event) => {
                  event.preventDefault();
                  let selectedRadio = document.querySelector('.addtask-radio > input:checked');

                  if (!inputAdd.value.trim() || !selectedRadio) return;

                  this.props.addTask(inputAdd.value, selectedRadio.value);
                  inputAdd.value = '';
                  document.querySelector('.modal-addtask-close').click();
                }}>
                <div className="row">
                  <div className="input-field col s6 task-field-container">
                    <input ref={node => inputAdd = node} id="input-addtask" type="text" className="validate" />
                    <label htmlFor="input-addtask">Edit Task</label>
                  </div>
                </div>
                <p>
                  <label className="addtask-radio">
                    <input name="group1" type="radio" value="focustasks" />
                    <span>Focus</span>
                  </label>
                </p>
                <p>
                  <label className="addtask-radio">
                    <input name="group1" type="radio" value="goalstasks" />
                    <span>Goals</span>
                  </label>
                </p>
                <p>
                  <label className="addtask-radio">
                    <input name="group1" type="radio" value="fitintasks" />
                    <span>Fit In</span>
                  </label>
                </p>
                <p>
                  <label className="addtask-radio">
                    <input name="group1" type="radio" value="backburnertasks" />
                    <span>Backburner</span>
                  </label>
                </p>
              </form>
            </div>
            <div className="modal-footer">
              <a onClick={() => {
                let selectedRadio = document.querySelector('.addtask-radio > input:checked');

                if (!inputAdd.value || !selectedRadio) return;

                this.props.addTask(inputAdd.value, selectedRadio.value);
                inputAdd.value = '';
                }} href="#!" className="modal-addtask-close modal-close waves-effect waves-green btn-flat">Add Task</a>
            </div>
          </div>
        </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    focustasks: state.focustasks,
    goalstasks: state.goalstasks,
    fitintasks: state.fitintasks,
    backburnertasks: state.backburnertasks
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTask }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer);
