let focusTaskArr = ['task'];

export default function (state = null, action = null) {
  switch (true) {
    case action.type === 'ADD_TASK' && action.category === 'focustasks':
      let newState = [].concat(state);
      newState.push(action.task);
      focusTaskArr = newState;
      return newState;
    default:
      return focusTaskArr;
  }

}
