import React, { Component } from 'react';


export default class FitInTasksView extends Component {

  render() {

    const view = this.props.renderView ? 'fitin-view expanded-view bottom-left' : 'fitin-view collapsed-view bottom-left';

    return (
      <div className={view}>
      </div>
    )
  }

}
