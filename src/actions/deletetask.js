export default function deleteTask(taskindex, category) {
  return {
    type: 'DELETE_TASK',
    category,
    taskindex
  };
}
