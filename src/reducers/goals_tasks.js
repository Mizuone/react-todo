let goalsTaskArr = ['task'];

export default function (state = null, action = null) {
  switch (true) {
    case action.type === 'ADD_TASK' && action.category === 'goalstasks':
      let newState = [].concat(state);
      newState.push(action.task);
      goalsTaskArr = newState;
      return newState;
    default:
        return goalsTaskArr;
  }

}
