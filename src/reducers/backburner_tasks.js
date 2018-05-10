let backBurnerTaskArr = ['task'];

export default function (state = null, action = null) {
  switch (true) {
    case action.type === 'ADD_TASK' && action.category === 'backburnertasks':
      let newState = [].concat(state);
      newState.push(action.task);
      backBurnerTaskArr = newState;
      return newState;
    default:
        return backBurnerTaskArr;
  }

}
