import './config/ReactotronConfig';
import './config/DevToolsConfig';
import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import store from './store';
import TodoList from './TodoList';

// import styles from './styles';

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
