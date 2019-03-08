import { createStore } from 'redux';

// Reducer
function reducer() {
  return ['fazer café', 'Estudar React'];
}

const store = createStore(reducer);

export default store;
