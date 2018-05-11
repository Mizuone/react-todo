import LocalStorageManager from '../classes/localstoragemanager';

let fitinTaskArr = [];
let fitInLocalStorage = LocalStorageManager.getLocalStorage('fitintasks');

if (fitInLocalStorage) {
    fitinTaskArr = fitInLocalStorage;
}

export default function (state = null, action = null) {
  let newState = [].concat(state);

  switch (true) {
    case action.type === 'ADD_TASK' && action.category === 'fitintasks':
      newState.push(action.task);
      fitinTaskArr = newState;
      LocalStorageManager.setLocalStorage('fitintasks', newState);
      return newState;
    case action.type === 'DELETE_TASK' && action.category === 'fitintasks':
      newState.splice(action.taskindex, 1);
      fitinTaskArr = newState;
      LocalStorageManager.setLocalStorage('fitintasks', newState);
      return newState;
    case action.type === 'EDIT_TASK' && action.category === 'fitintasks':
      newState[action.taskindex] = action.task;
      fitinTaskArr = newState;
      LocalStorageManager.setLocalStorage('fitintasks', newState);
      return newState;
    default:
        return fitinTaskArr;
  }

}
