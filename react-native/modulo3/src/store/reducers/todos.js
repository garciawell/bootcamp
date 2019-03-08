// Reducer
const INITIAL_STATE = [
  { id: Math.random(), text: 'fazer café', completed: true },
  { id: Math.random(), text: 'Estudar React', completed: false },
  { id: Math.random(), text: 'Entender Redux', completed: false },
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text, completed: false }];
    case 'MARK_AS_COMPLETED':
      return state.map(todo => (todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo));
    default:
      return state;
  }
}
