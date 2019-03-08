import { createStore, compose } from 'redux';
import todos from './reducers/todos';
// ACTION
// Adicionar todo
// Marcar Completo

const reactotronStateMiddleware = __DEV__ ? console.tron.createEnhancer : () => {};
const store = createStore(todos, compose(reactotronStateMiddleware()));

export default store;
