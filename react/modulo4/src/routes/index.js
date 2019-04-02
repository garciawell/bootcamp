import React from 'react';

// import { Container } from './styles';
import { Switch, Route } from 'react-router-dom';
import Browse from '../pages/browse';
import playlist from '../pages/playlist';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Browse} />
    <Route path="/playlist/:id" component={playlist} />
  </Switch>
);

export default Routes;
