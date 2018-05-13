export default function addTask(task, category) {
  return {
    type: 'ADD_TASK',
    category,
    task
  };
}
