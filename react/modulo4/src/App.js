import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './config/reactotron';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import { Wrapper, Container, Content } from './styles/components';
import Header from './components/Header';

import Routes from './routes';
import store from './store';
import ErrorBox from './components/ErrorBox';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <Wrapper>
          <Container>
            <Sidebar />
            <Content>
              <ErrorBox />
              <Header />
              <Routes />
            </Content>
          </Container>
          <Player />
        </Wrapper>
        <GlobalStyle />
      </Fragment>
    </BrowserRouter>
  </Provider>
);
export default App;
