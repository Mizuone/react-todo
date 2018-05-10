let fitinTaskArr = ['task'];

export default function (state = null, action = null) {
  let newState = [].concat(state);

  switch (true) {
    case action.type === 'ADD_TASK' && action.category === 'fitintasks':
      newState.push(action.task);
      fitinTaskArr = newState;
      return newState;
    case action.type === 'DELETE_TASK' && action.category === 'fitintasks':
      newState.splice(action.taskindex, 1);
      fitinTaskArr = newState;
      return newState;
    default:
        return fitinTaskArr;
  }

}
