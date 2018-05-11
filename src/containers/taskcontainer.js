import React, { Component } from 'react';
import addTask from '../actions/addtask';
import deleteTask from '../actions/deletetask';
import editTask from '../actions/edittask';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.js';


class TaskContainer extends Component {

  renderTaskList() {

    return this.props.tasks.map((task, index) => {
      return (
        <li class="collection-item">
          <div>
            {task}
            <a onClick={(event) => { event.stopPropagation(); this.props.deleteTask({index}, this.props.DOMInformationObj.delete.category) }} href="#!" class="secondary-content"><i class="material-icons">delete</i></a>
            <a onClick={this.editTaskClickEvent.bind(this)} href={this.props.DOMInformationObj.edit.iconAnchorHref} class="secondary-content"><i class="material-icons {this.props.DOMInformationObj.edit.iconClass}" data-task-index={index} onClick={
                (event) => { event.stopPropagation; event.target.classList.add('editing') }
              }>edit</i></a>
          </div>
        </li>
        )
    });

  }

  renderTasksView(event) {
    let tasksView = document.querySelector(this.props.DOMInformationObj.funcrenderTaskView.taskView);

    if (!tasksView.classList.contains('expanded-view')) {

      tasksView.classList.add('expanded-view');

      setTimeout(() => {
        document.getElementById(this.props.DOMInformationObj.funcrenderTaskView.taskViewInputFocus).focus();
      }, 250);

    }

  }

  editTaskClickEvent() {

      let modal = document.querySelector(this.props.DOMInformationObj.funceditTaskClickEvent.modal);
      let input = document.getElementById(this.props.DOMInformationObj.funceditTaskClickEvent.input);
      let instance = M.Modal.init(modal, {});

      instance.open();

      setTimeout(() => {
        input.focus();
      }, 150)

  }

  removeExpandedView(event) {
    event.stopPropagation();

    document.querySelector(this.props.DOMInformationObj.funcremoveExpandedView.taskView).classList.remove('expanded-view');
  }
  removeEditingClass() {
    document.querySelector('.editing').classList.remove('editing');
  }

  getEditTaskIndex() {
    return document.querySelector('.editing').getAttribute('data-task-index');
  }


  render() {
    let input;
    let inputEdit;

    return (
      <div className={this.props.DOMInformationObj.container.mainContainerClass} onClick={this.renderTasksView.bind(this)}>
        <div className={this.props.DOMInformationObj.container.taskViewContainerClass}>
          <form onSubmit={event => { event.preventDefault()
              if (!input.value) return
              this.props.addTask(input.value, this.props.DOMInformationObj.add.category);
          }}>
            <div className="row">
              <div className="col s3"></div>
              <div className="input-field col s6 task-field-container">
                <input ref={node => input = node} id={this.props.DOMInformationObj.view.inputId} type="text" className="validate" />
                <label for={this.props.DOMInformationObj.view.inputId}>Task</label>
              </div>
              <div class="col s3">
                <div onClick={this.removeExpandedView.bind(this)} className="btn-floating waves-effect waves-light close-task-menu">
                  <i className="material-icons">close</i>
                </div>
              </div>

            </div>
          </form>

          <ul class="collection with-header">
            <li class="collection-header"><h4>{this.props.DOMInformationObj.view.viewTasksTitle}</h4></li>
            {this.renderTaskList()}
          </ul>

        </div>
        <h2 className={this.props.DOMInformationObj.container.containerTitleClass}>{this.props.DOMInformationObj.container.containerTitle}</h2>
        <div className={this.props.DOMInformationObj.container.containerTasksCircleClass}>
          <div className={this.props.DOMInformationObj.container.containerTasksCircleClassAmount}>
            <h3>{this.props.tasks.length}</h3>
            <p>to go</p>
          </div>
        </div>
        <div id={this.props.DOMInformationObj.modal.modalIdContainer} class={this.props.DOMInformationObj.modal.modalContainerClass}>
          <div class="modal-content">
            <h4>{this.props.DOMInformationObj.modal.modalContainerTitle}</h4>
            <form onSubmit={
              (event) => {
                event.preventDefault()
                if (!inputEdit.value.trim()) return

                this.props.editTask(inputEdit.value, this.getEditTaskIndex(), this.props.DOMInformationObj.edit.category);
                this.removeEditingClass();
                inputEdit.value = '';
                document.querySelector(this.props.DOMInformationObj.modal.modalCloseClickSelector).click();
              }
            }>
              <div class="row">
                <div className="input-field col s6 task-field-container">
                  <input ref={node => inputEdit = node} id={this.props.DOMInformationObj.modal.modalInputId} type="text" className="validate" />
                  <label for={this.props.DOMInformationObj.modal.modalInputId}>Edit Task</label>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat" onClick={(event) => {
                event.stopPropagation();
                if (!inputEdit.value.trim()) return

                this.props.editTask(inputEdit.value, this.getEditTaskIndex(), this.props.DOMInformationObj.edit.category);
                this.removeEditingClass();
                inputEdit.value = '';
              }}>Edit Task</a>
          </div>
        </div>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTask, deleteTask, editTask }, dispatch);
}

export default connect(null, mapDispatchToProps)(TaskContainer);
