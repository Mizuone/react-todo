import LocalStorageManager from '../classes/localstoragemanager';

let goalsTaskArr = [];
let goalsLocalStorage = LocalStorageManager.getLocalStorage('goalstasks');

if (goalsLocalStorage) {
    goalsTaskArr = goalsLocalStorage;
}

export default function (state = null, action = null) {
  let newState = [].concat(state);

  switch (true) {
    case action.type === 'ADD_TASK' && action.category === 'goalstasks':
      newState.push(action.task);
      goalsTaskArr = newState;
      LocalStorageManager.setLocalStorage('goalstasks', newState);
      return newState;
    case action.type === 'DELETE_TASK' && action.category === 'goalstasks':
      newState.splice(action.taskindex, 1);
      goalsTaskArr = newState;
      LocalStorageManager.setLocalStorage('goalstasks', newState);
      return newState;
    case action.type === 'EDIT_TASK' && action.category === 'goalstasks':
      newState[action.taskindex] = action.task;
      goalsTaskArr = newState;
      LocalStorageManager.setLocalStorage('goalstasks', newState);
      return newState;
    case action.type === 'DELETE_ALL':
      newState = [];
      goalsTaskArr = newState;
      LocalStorageManager.setLocalStorage('goalstasks', newState);
      return newState;
    default:
        return goalsTaskArr;
  }

}
