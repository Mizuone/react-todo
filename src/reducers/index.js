import { combineReducers } from 'redux';
import FocusReducer from './focus_tasks';
import GoalsReducer from './goals_tasks';
import FitInReducer from './fitin_tasks';
import BackBurnerReducer from './backburner_tasks';
import ActiveTask from './active_task_category';

const rootReducer = combineReducers({
  focustasks: FocusReducer,
  goalstasks: GoalsReducer,
  fitintasks: FitInReducer,
  backburnertasks: BackBurnerReducer
});

export default rootReducer;
