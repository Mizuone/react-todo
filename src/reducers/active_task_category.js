export default function activeTaskCategory(state = null, action) {
  switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            category: action.category,
            task: action.task
          }
        ]
      default:
        return state;
  }

}
