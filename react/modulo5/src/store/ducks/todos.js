/**
 * Types
 */

export const Types = {
  ADD: "todos/ADD",
  COMPLETE: "todos/COMPLETE_TODO"
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  data: []
};

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      return { data: [...state.data, action.payload.todo] };
    case Types.COMPLETE:
      return { data: state.data.filter(todo => todo !== action.payload.todo) };
    default:
      return state;
  }
}

/**Action Creators */

export const Creators = {
  addTodo: todo => ({
    type: Types.ADD,
    payload: { todo }
  }),
  completeTodo: todo => ({
    type: Types.COMPLETE,
    payload: { todo }
  })
};
