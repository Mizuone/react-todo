import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskContainer from './taskcontainer';

class TasksContainer extends Component {
    render() {
      return(
        <div className="tasks-main-container">
          <div className="divider-container">
            <TaskContainer
              DOMInformationObj={
                {
                  edit: {
                    iconAnchorHref: '#focustasks-modal-id',
                    iconClass: 'focustasks-edit',
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
                    iconClass: 'goalstasks-edit',
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
                    iconClass: 'fitintasks-edit',
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
                    iconClass: 'backburnertasks-edit',
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
                    taskViewContainerClass: 'backburner-view collapsed-view bottom-left',
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

export default connect(mapStateToProps)(TasksContainer);
