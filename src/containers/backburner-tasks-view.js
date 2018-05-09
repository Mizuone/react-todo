import React, { Component } from 'react';


export default class BackBurnerTasksView extends Component {

  removeExpandedView(event) {
    event.stopPropagation();

    document.querySelector('.backburner-view').classList.remove('expanded-view');
  }

  render() {

    return (
      <div className='backburner-view collapsed-view bottom-right'>
        <form>
          <div className="row">
            <div className="col s3"></div>
            <div className="input-field col s6 task-field-container">
              <input id="backburner-task" type="text" className="validate" />
              <label for="backburner-task">Task</label>
            </div>
            <div class="col s3">
              <div onClick={this.removeExpandedView} className="btn-floating waves-effect waves-light close-task-menu">
                <i className="material-icons">close</i>
              </div>
            </div>

          </div>
        </form>
      </div>
    )
  }

}
