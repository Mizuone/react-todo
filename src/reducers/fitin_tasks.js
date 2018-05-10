let fitinTaskArr = ['task'];

export default function (state = null, action = null) {
  switch (true) {
    case action.type === 'ADD_TASK' && action.category === 'fitintasks':
      let newState = [].concat(state);
      newState.push(action.task);
      fitinTaskArr = newState;
      return newState;
    default:
        return fitinTaskArr;
  }

}
