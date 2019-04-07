import React, { Fragment } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Provider } from 'react-redux';
import Mapa from './components/Mapa';
import Sidebar from './components/Sidebar';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Mapa />
    <Sidebar />
;
  </Provider>
);
export default App;
