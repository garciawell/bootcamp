import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const reactotronStateMiddleware = __DEV__ ? console.tron.createEnhancer : () => {};
const store = createStore(
  rootReducer,
  compose(
    reactotronStateMiddleware(),
    applyMiddleware(sagaMiddleware),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
