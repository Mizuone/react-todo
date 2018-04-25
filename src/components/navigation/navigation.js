import React, { Component } from 'react';

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <div className="desktop-nav">
          <ul id="slide-out" className="sidenav sidenav-fixed hoverable">
            <li><a href="#" className="subheader light-blue white-text"><i className="material-icons hide-on-large-only">arrow_back</i>Todo</a></li>
            <li><a href="#!">View Tasks</a></li>
            <li><a href="#!">About</a></li>
            <li><a href="#!">Settings</a></li>
          </ul>
        </div>

        <div className="mobile-nav light-blue white-text">
          <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <h1>Todo</h1>
        </div>

      </nav>
    );
  }
}
