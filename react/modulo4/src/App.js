import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import { Wrapper, Container, Content } from './styles/components';
import Header from './components/Header';
import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
      <GlobalStyle />
    </Fragment>
  </BrowserRouter>
);
export default App;
