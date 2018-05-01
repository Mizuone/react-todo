import React, { Component } from 'react';


export default class GoalsTasksView extends Component {

  render() {

    const view = this.props.renderView ? 'goals-view expanded-view top-right' : 'goals-view collapsed-view top-right';

    return (
      <div className={view}>
      </div>
    )
  }

}
