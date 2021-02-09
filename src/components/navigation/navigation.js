import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import deleteAllTasks from '../../actions/deletealltasks';

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <div className="desktop-nav">
          <ul id="slide-out" className="sidenav sidenav-fixed hoverable">
            <li><a href="#!" className="subheader light-blue white-text"><i className="material-icons hide-on-large-only white-text sidenav-arrow">arrow_back</i>Todo</a></li>
            <li><Link to="/projects/to-do-list/index.html">View Tasks</Link></li>
            <li><Link to="/projects/to-do-list/about">About</Link></li>
          </ul>
        </div>

        <div className="mobile-nav light-blue white-text">
          <a href="#!" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <h1>Todo</h1>
          <a className="dropdown-trigger" href="#!" data-target="dropdown1"><i className="material-icons">more_vert</i></a>
          <ul id='dropdown1' className='dropdown-content'>
            <li><a onClick={this.props.deleteAllTasks} className="black-text" href="#!">Clear All</a></li>
          </ul>
        </div>

      </nav>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({deleteAllTasks}, dispatch);
}

export default connect(null, mapDispatchToProps)(Navigation);
