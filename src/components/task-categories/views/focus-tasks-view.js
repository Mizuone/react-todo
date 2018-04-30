import React, { Component } from 'react';


export default class FocusTasksView extends Component {

  render() {

    const view = this.props.renderView ? 'focus-view expanded-view' : 'focus-view collapsed-view';

    return (
      <div className={view}>
      </div>
    )
  }

}
