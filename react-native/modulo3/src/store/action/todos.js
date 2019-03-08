export const addTodo = () => ({
  type: 'ADD_TODO',
  payload: { text: 'NOvo Todo' },
});

export const maskAsCompleted = id => ({
  type: 'MARK_AS_COMPLETED',
  payload: { id },
});
