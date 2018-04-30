import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavigationTriggers from'./components/navigation/navigation_triggers/navigation_triggers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

NavigationTriggers.sideNavEvents();
NavigationTriggers.dropDownMenuOpenEvent();
