import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import rootReducer from './reducers/index';

import './index.css';
import './scss/main.scss';
import NavigationTriggers from'./components/navigation/navigation_triggers/navigation_triggers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();

NavigationTriggers.sideNavEvents();
NavigationTriggers.dropDownMenuOpenEvent();
