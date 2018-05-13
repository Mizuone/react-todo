import LocalStorageManager from '../classes/localstoragemanager';

let backBurnerTaskArr = [];
let backBurnerLocalStorage = LocalStorageManager.getLocalStorage('backburnertasks');

if (backBurnerLocalStorage) {
    backBurnerTaskArr = backBurnerLocalStorage;
}


export default function (state = null, action = null) {
  let newState = [].concat(state);

  switch (true) {
    case action.type === 'ADD_TASK' && action.category === 'backburnertasks':
      newState.push(action.task);
      backBurnerTaskArr = newState;
      LocalStorageManager.setLocalStorage('backburnertasks', newState);
      return newState;
    case action.type === 'DELETE_TASK' && action.category === 'backburnertasks':
      newState.splice(action.taskindex, 1);
      backBurnerTaskArr = newState;
      LocalStorageManager.setLocalStorage('backburnertasks', newState);
      return newState;
    case action.type === 'EDIT_TASK' && action.category === 'backburnertasks':
      newState[action.taskindex] = action.task;
      backBurnerTaskArr = newState;
      LocalStorageManager.setLocalStorage('backburnertasks', newState);
      return newState;
    case action.type === 'DELETE_ALL':
      newState = [];
      backBurnerTaskArr = newState;
      LocalStorageManager.setLocalStorage('backburnertasks', newState);
      return newState;
    default:
        return backBurnerTaskArr;
  }

}
