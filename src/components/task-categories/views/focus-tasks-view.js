import React, { Component } from 'react';


export default class FocusTasksView extends Component {

  render() {

    const view = this.props.renderView ? 'focus-view expanded-view top-left' : 'focus-view collapsed-view top-left';

    return (
      <div className={view}>
      </div>
    )
  }

}
