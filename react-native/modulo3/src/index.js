import '~/config/ReactotronConfig';
// import '~/config/DevToolsConfig';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
import { setNavigator } from './services/navigation';
// import styles from './styles';

const App = () => (
  <Provider store={store}>
    <Routes ref={setNavigator} />
  </Provider>
);

export default App;
