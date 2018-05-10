export default function addTask(task, category) {
  console.log(task, category);
  return {
    type: 'ADD_TASK',
    category,
    task
  };
}
