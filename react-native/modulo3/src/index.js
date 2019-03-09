import '~/config/ReactotronConfig';
// import '~/config/DevToolsConfig';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';

// import styles from './styles';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
