import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
          <div class="row">
            <div class="col s12 m6 about-card">
              <div class="card light-blue">
                <div class="card-content white-text">
                  <span class="card-title">About</span>
                  <p>
                    This web application allows you to keep track of your todos in various categories.
                    Each category is aimed at helping you prioritize each task based on it's context.
                    Please take a look at my portfolio to see additional projects I built similar to this.
                  </p>
                </div>
                <div class="card-action">
                  <a className="white-text" href="https://kyleorlinski.com" target="_blank" rel="noopener noreferrer">Visit Kyle's Portfolio</a>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
