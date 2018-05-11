export default function editTask(task, taskindex, category) {
  console.log(task, taskindex, category);
  return {
    type: 'EDIT_TASK',
    category,
    task,
    taskindex
  };
}
