import React, { Component } from 'react';


export default class BackBurnerTasksView extends Component {

  render() {

    const view = this.props.renderView ? 'backburner-view expanded-view bottom-right' : 'backburner-view collapsed-view bottom-left';

    return (
      <div className={view}>
      </div>
    )
  }

}
