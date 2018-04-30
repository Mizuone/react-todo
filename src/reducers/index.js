import { combineReducers } from 'redux';
import BackBurnerReducer from './backburner_tasks';

const rootReducer = combineReducers({
  backburnertasks: BackBurnerReducer
});

export default rootReducer;
