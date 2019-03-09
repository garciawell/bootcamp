import { createStore, compose } from 'redux';
import reducer from './reducers/login';

const reactotronStateMiddleware = __DEV__ ? console.tron.createEnhancer : () => {};
const store = createStore(reducer, compose(reactotronStateMiddleware()));

export default store;
