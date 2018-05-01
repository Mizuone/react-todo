import React, { Component } from 'react';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <div className="desktop-nav">
          <ul id="slide-out" className="sidenav sidenav-fixed hoverable">
            <li><a href="#" className="subheader light-blue white-text"><i className="material-icons hide-on-large-only white-text sidenav-arrow">arrow_back</i>Todo</a></li>
            <li><a href="#!">View Tasks</a></li>
            <li><a href="#!">About</a></li>
            <li><a href="#!">Settings</a></li>
          </ul>
        </div>

        <div className="mobile-nav light-blue white-text">
          <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <h1>Todo</h1>
          <a className="dropdown-trigger" href="#!" data-target="dropdown1"><i className="material-icons">more_vert</i></a>
          <ul id='dropdown1' className='dropdown-content'>
            <li><a href="#!">Clear All</a></li>
          </ul>
        </div>

      </nav>
    );
  }
}
