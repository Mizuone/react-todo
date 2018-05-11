import LocalStorageManager from '../classes/localstoragemanager';

let focusTaskArr = [];
let focusLocalStorage = LocalStorageManager.getLocalStorage('focustasks');

if (focusLocalStorage) {
    focusTaskArr = focusLocalStorage;
}

export default function (state = null, action = null) {
  let newState = [].concat(state);

  switch (true) {
    case action.type === 'ADD_TASK' && action.category === 'focustasks':
      newState.push(action.task);
      focusTaskArr = newState;
      LocalStorageManager.setLocalStorage('focustasks', newState);
      return newState;
    case action.type === 'DELETE_TASK' && action.category === 'focustasks':
      newState.splice(action.taskindex, 1);
      focusTaskArr = newState;
      LocalStorageManager.setLocalStorage('focustasks', newState);
      return newState;
    case action.type === 'EDIT_TASK' && action.category === 'focustasks':
      newState[action.taskindex] = action.task;
      focusTaskArr = newState;
      LocalStorageManager.setLocalStorage('focustasks', newState);
      return newState;
    default:
      return focusTaskArr;
  }

}
