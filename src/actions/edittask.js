export default function editTask(task, taskindex, category) {
  return {
    type: 'EDIT_TASK',
    category,
    task,
    taskindex
  };
}
